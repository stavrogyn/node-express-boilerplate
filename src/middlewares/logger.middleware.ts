import { Request, Response, NextFunction as Next } from 'express'
import { Express } from 'express-serve-static-core'

export const useLogger = (app: Express) => {
  app.use('/', (req: Request, res: Response, next: Next) => {
    console.log('Request:', req.method, req.url)
    next()
  })
}
