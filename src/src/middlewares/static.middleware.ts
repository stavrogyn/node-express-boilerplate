import express from 'express'
import path from 'path'
import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class StaticMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    express.static(path.join(__dirname, 'public'))
    next()
  }
}
