const { router, get, post } = require('micro-fork')
const { getUsers, createUsers } = require('./routes/user')

module.exports = router()(
  get('/api/user', getUsers),
  post('/api/user', createUsers)
)
