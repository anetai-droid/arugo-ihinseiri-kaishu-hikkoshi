# LP Template

AIエージェントがゼロからレイアウトを組まず、テーマ・文章・画像の置き換えからLP制作を開始するためのスターターです。

## プレビュー

テンプレートの見た目は、以下からブラウザで確認できます。

🔗 https://anetai-droid.github.io/LP-Template/standalone/LP-Template-Standalone.html

ローカルで確認する場合は `standalone/LP-Template-Standalone.html` をダブルクリックしてください（追加ツール不要）。

## 構成

- `starter/`: 単体で動作するLPスターター
- `standalone/LP-Template-Standalone.html`: ダブルクリックだけで確認できる完全スタンドアロン版
- `skill/lp-starter-builder/`: Claude/Codex向け制作スキル。`assets/lp-starter/` にスターターを内包

## 使い方

```powershell
cd starter
npm install
npm run dev
```

新しい案件では `starter/` を案件フォルダへコピーし、`index.html` のコピー、`src/style.css` 冒頭のデザイントークン、`public/images/` の画像を変更します。

`画像素材/` に案件用画像を置いてください。既定では `1.png` を全面写真型ヒーローに使用し、`2.png` 以降を下層の画像エリアへ割り当てます。スキル利用時も、同フォルダ内の画像を確認してランダムに配置する方針です。

表示だけ確認する場合は、`standalone/LP-Template-Standalone.html` をダブルクリックしてください。追加ツールやインストールは不要です。

## 納品前

`starter/DELIVERY_CHECKLIST.md` を確認し、以下を実行してください。

```powershell
npm run build
npm run preflight
```

`preflight` は、仮ブランド、架空実績、仮メールアドレス、未設定の法務情報、`noindex`、検索エンジン遮断設定が残っている場合に失敗します。
