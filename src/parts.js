// const prettier = require('prettier')
// const { el, ex } = require('hify')
// const _h = (level, cont) => {
//   return el[`h${level}`](cont, {
//     style: {
//       color: '#666',
//       'border-left': 'solid 1px #b00000',
//       padding: '0.25em 0.5em'
//     }
//   })
// }

// module.exports.h2 = cont => _h(2, cont)
// module.exports.h3 = cont => _h(3, cont)

// module.exports.apiBlock = ({
//   title,
//   code,
//   desc,
//   codeOpt = {},
//   resOpt = {
//     class: 'uk-padding-small',
//     style: { border: 'solid 0.5px lightgray' }
//   },
//   noResult
// }) => {
//   const codeString = _code => {
//     let arr = prettier
//       .format(_code.toString(), { semi: false, parser: 'babylon' })
//       .split('\n')
//     arr = arr.slice(1, arr.length - 2)
//     arr
//       .slice()
//       .reverse()
//       .some(line => {
//         const flag = /^\s*?return/.test(line)
//         if (flag) {
//           const index = arr.indexOf(line)
//           arr[index] = line.replace('return ', '')
//           // _arr[i] = line.replace('return ', '')
//         }
//         return flag
//       })
//     arr = arr.map(line => {
//       return line.replace(/^\s{2}/, '')
//     })
//     const str = arr.join('\n')
//     return str
//   }
//   return el.div([
//     _h(3, title),
//     desc || null,
//     noResult ? null : el.h4('code'),
//     ex.preCode(codeString(code), codeOpt),

//     noResult ? null : el.h4('result'),
//     noResult ? null : el.div([code()], resOpt),
//     el.br()
//   ])
// }
