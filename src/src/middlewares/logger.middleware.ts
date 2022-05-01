import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class LoggerMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    console.log('Request:', request.method, request.url)
    next()
  }
}
