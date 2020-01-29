/* eslint-env jest */
import api from '..'
import micro from 'micro'
import axios from 'axios'

let server
axios.defaults.adapter = require('axios/lib/adapters/http')
axios.defaults.baseURL = 'http://localhost:8080'

beforeAll(() => {
  server = micro(api)
  server.listen(8080)
})

// test('setup', t => {
//   server = micro(app)
//   server.listen(8080)
//   t.end()
// })

test('POST /api/user', async (done) => {
  try {
    const response = await axios.post('/api/user', {
      name: 'John',
      mail: 'john@doe.io'
    })
    expect(response.data).toEqual([{
      name: 'John',
      mail: 'john@doe.io'
    }])
    done()
  } catch (e) {
    done(e)
  }
})

// test('POST /api/user', async t => {
//   t.plan(1)
//   try {
//     const response = await axios.post('/api/user', {
//       name: 'John',
//       mail: 'john@doe.io'
//     })
//     // should use fixtures for bigger apps
//     t.deepEqual(response.data, [{
//       name: 'John',
//       mail: 'john@doe.io'
//     }])
//   } catch (error) {
//     t.fail(error)
//   }
// })

// test('GET /api/user', async t => {
//   t.plan(1)
//   try {
//     const response = await axios.get('/api/user')
//     // should use fixtures for bigger apps
//     t.deepEqual(response.data, [{
//       name: 'John',
//       mail: 'john@doe.io'
//     }])
//   } catch (error) {
//     t.fail(error)
//   }
// })

// test.onFinish(() => server.close())
afterAll(() => {
  server.close()
})
