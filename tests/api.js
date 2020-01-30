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

test('GET /api/user', async (done) => {
  try {
    const response = await axios.get('/api/user')
    expect(response.data).toEqual([{
      name: 'John',
      mail: 'john@doe.io'
    }])
    done()
  } catch (e) {
    done(e)
  }
})

afterAll(() => {
  server.close()
})
