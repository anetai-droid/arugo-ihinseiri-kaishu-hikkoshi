import './style.css'

function init() {
  const menuButton = document.querySelector('.menu-button')
  const mobileNav = document.querySelector('#mobile-nav')

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true'
    menuButton.setAttribute('aria-expanded', String(!open))
    menuButton.setAttribute('aria-label', open ? 'メニューを開く' : 'メニューを閉じる')
    if (mobileNav) mobileNav.hidden = open
  })

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!menuButton) return
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'メニューを開く')
      mobileNav.hidden = true
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav && !mobileNav.hidden && menuButton) {
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'メニューを開く')
      mobileNav.hidden = true
      menuButton.focus()
    }
  })

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
    { threshold: 0.12 }
  )

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
