import cors from 'cors'
import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class CorsMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    cors()
    next()
  }
}
