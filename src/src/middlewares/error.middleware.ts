import { ErrorMiddleware } from '@decorators/express'
import { Request, Response, NextFunction as Next } from 'express'

export class CastomErrorMiddleware implements ErrorMiddleware {
  public use(error: Error, request: Request, response: Response, next: Next) {
    console.error(error.stack)
    response.status(500).send('Something broke!')
    next()
  }
}
