const { el, uk, cdn } = require('hify')
const navbar = require('./navbar')
const footer = el.div({ class: 'uk-background-muted' }, [
  el.p({ style: { 'text-align': 'center' } }, [
    el.small('&copy; 2019 mick-whats')
  ])
])

module.exports = ({ main, side }) => {
  const _container = uk.container({
    title: 'BoipDoc',
    main,
    side,
    header: navbar,
    footer
  })
  _container.addAssets(cdn.highlightJs_darcula)
  _container.addAssets(['/assets/css/style.css'])
  return _container
}
