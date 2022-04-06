import express from 'express'
import { Express } from 'express-serve-static-core'

import router from './router'
import { useMiddlewares } from './middlewares'

export function createServer(): Express {
  const server = express()

  useMiddlewares(server)
  server.use('/', router)

  return server
}
