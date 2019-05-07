const { uk } = require('hify')
const { navLogo, navLeft, navRight } = require('./settings')

module.exports = uk.navbar({
  logo: navLogo,
  left: navLeft,
  right: navRight,
  sticky: true,
  style: { 'background-color': '#261C1A', color: '#F2F2F2' }
})
