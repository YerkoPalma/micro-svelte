const { get, post } = require('micro-fork')
const { getUsers, createUsers } = require('./routes/user')

exports.routes = [
  get('/api/user', getUsers),
  post('/api/user', createUsers)
]
