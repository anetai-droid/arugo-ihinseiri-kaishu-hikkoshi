import { access, readFile } from 'node:fs/promises'

const files = {
  'index.html': await readFile('index.html', 'utf8'),
  'privacy.html': await readFile('privacy.html', 'utf8'),
  'legal.html': await readFile('legal.html', 'utf8'),
  'public/robots.txt': await readFile('public/robots.txt', 'utf8'),
}

const checks = [
  ['検索除外の noindex が残っています', /noindex,\s*nofollow/],
  ['未確定項目が残っています', /【要確認】|\[要確認\]|\[要設定\]/],
  ['公開前注記が残っています', /公開前チェック|写真はイメージです/],
  ['robots.txt が全検索エンジンを遮断しています', /Disallow:\s*\/\s*(?:\r?\n|$)/],
]

const failures = []
for (const [message, pattern] of checks) {
  const matchedFiles = Object.entries(files)
    .filter(([, contents]) => pattern.test(contents))
    .map(([name]) => name)
  if (matchedFiles.length) failures.push(`${message}: ${matchedFiles.join(', ')}`)
}

const index = files['index.html']
if (!index.includes('rel="canonical"')) failures.push('canonical URL が未設定です: index.html')
if (!index.includes('property="og:image"')) failures.push('OGP画像が未設定です: index.html')
if (/href=["']#["']/.test(index)) failures.push('リンク先が未設定の href="#" が残っています: index.html')

const ids = new Set([...index.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]))
for (const [, anchor] of index.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(anchor)) failures.push(`リンク先 #${anchor} が index.html に存在しません`)
}

for (const [, imagePath] of index.matchAll(/src="\/images\/([^"]+)"/g)) {
  try {
    await access(`public/images/${imagePath}`)
  } catch {
    failures.push(`画像 public/images/${imagePath} が存在しません`)
  }
}

if (failures.length) {
  console.error('公開前チェックに失敗しました。')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log('公開前チェックに合格しました。')
