import session from 'express-session'
import uid from 'uid-safe'
import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class SessionMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    session({
      genid: () => uid.sync(18),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    }),
      next()
  }
}
