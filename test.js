const test = require('tape')
const micro = require('micro')
const axios = require('axios')
const app = require('.')

let server
axios.defaults.baseURL = 'http://0.0.0.0:8080'
test('setup', t => {
  server = micro(app)
  server.listen(8080)
  t.end()
})

test('POST /api/user', async t => {
  t.plan(1)
  try {
    const response = await axios.post('/api/user', {
      name: 'John',
      mail: 'john@doe.io'
    })
    // should use fixtures for bigger apps
    t.deepEqual(response.data, [{
      name: 'John',
      mail: 'john@doe.io'
    }])
  } catch (error) {
    t.fail(error)
  }
})

test('GET /api/user', async t => {
  t.plan(1)
  try {
    const response = await axios.get('/api/user')
    // should use fixtures for bigger apps
    t.deepEqual(response.data, [{
      name: 'John',
      mail: 'john@doe.io'
    }])
  } catch (error) {
    t.fail(error)
  }
})

test.onFinish(() => server.close())
