let begin = require('@architect/functions')
let faunadb = require('faunadb')

let client = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_SECRET
})


function route (req, res) {
  let request = JSON.stringify(req, null, 2)

  // TODO change defaultJS

  console.log('Hello backend! ', request)

  client.query("Hello from FaunaDB").then((faunaResult)=> {
    let defaultJS = `console.log('${faunaResult} ', ${request})`
    res({
      js: defaultJS
    })
  }).catch((error) => {
    console.log("backend error", error)
  })
}

exports.handler = begin.js.get(route)
