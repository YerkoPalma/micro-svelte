const { send, json } = require('micro')

// initiallise session
let users = []

exports.getUsers = (req, res) => send(res, 200, users)

exports.createUsers = async (req, res) => {
  const user = await json(req)

  users.push(user)
  return send(res, 200, users)
}
