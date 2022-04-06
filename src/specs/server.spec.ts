import request from 'supertest'
import { createServer } from '../server'

const server = createServer()

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(server).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.text).toBe('Hello World')
  })
})
