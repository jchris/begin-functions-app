let begin = require('@architect/functions')

let faunadb = require('faunadb')

let client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})


// TODO change defaultJSON
let defaultJSON = {
  ok: true
}

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))

  client.query({a:"Hello from FaunaDB"}).then((faunaResult)=> {
    res({
      json: faunaResult
    })
  }).catch((error) => {
    console.log("backend error", error)
    res({
      json: defaultJSON
    })
  })
}

exports.handler = begin.json.get(route)
