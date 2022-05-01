import bodyParser from 'body-parser'
import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class ParserMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    bodyParser.urlencoded({ extended: false })
    bodyParser.json({ type: 'application/*+json' })
    bodyParser.raw({ type: 'application/vnd.custom-type' })
    bodyParser.text({ type: 'text/html' })
    next()
  }
}
