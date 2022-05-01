import cookieSession from 'cookie-session'
import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class CookieSessionMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    cookieSession({
      name: 'session',
      keys: ['example-key'],
      maxAge: 24 * 60 * 60 * 1000,
    })
    next()
  }
}
