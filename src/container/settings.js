const { el } = require('hify')
module.exports.navLogo = el.a({ class: 'uk-navbar-item uk-logo', href: '/' }, [
  el.h1({ class: 'uk-heading-primary' }, ['boip'])
])

module.exports.navLeft = [
  ['commands', '/commands.html'],
  ['boilerplate', '/boilerplate.html'],
  ['faq', '/faq.html']
]

module.exports.navRight = [
  [
    el.img({ src: '/assets/images/GitHub-Mark-Light-32px.png' }),
    'https://github.com/mick-whats/boip'
  ]
]
