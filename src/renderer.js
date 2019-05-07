// const marked = require('marked')
// const renderer = new marked.Renderer()

// renderer.code = function (code, infostring, escaped) {
//   var lang = (infostring || '').match(/\S*/)[0]
//   if (this.options.highlight) {
//     var out = this.options.highlight(code, lang)
//     if (out != null && out !== code) {
//       escaped = true
//       code = out
//     }
//   }

//   if (!lang) {
//     return (
//       '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>'
//     )
//   }

//   return (
//     '<pre><code class="' +
//     this.options.langPrefix +
//     escape(lang, true) +
//     '">' +
//     (escaped ? code : escape(code, true)) +
//     '</code></pre>\n'
//   )
// }
// // Run marked
// // console.log(myMarked('# heading+', { renderer: renderer }));
// module.exports = renderer
