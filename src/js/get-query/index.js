let begin = require('@architect/functions')

function route (req, res) {
  let request = JSON.stringify(req, null, 2)

  // TODO change defaultJS
  let defaultJS = `console.log('Hello frontend! ', ${request})`

  console.log('Hello backend! ', request)
  res({
    js: defaultJS
  })
}

exports.handler = begin.js.get(route)
