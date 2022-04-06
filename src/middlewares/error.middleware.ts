import { Request, Response, NextFunction as Next } from 'express'
import { Express } from 'express-serve-static-core'

export const useError = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: Next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
}
