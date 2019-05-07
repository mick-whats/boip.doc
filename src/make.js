const fs = require('fs')
const marked = require('marked')
// const renderer = require('./renderer')
const container = require('./container')

module.exports = src => {
  const md = fs.readFileSync(src, 'utf8')
  return container({ main: marked(md) })
  // return container({ main: marked(md, { renderer }) })
}
