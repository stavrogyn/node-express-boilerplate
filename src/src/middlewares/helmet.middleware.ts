import * as helmet from 'helmet'
import { Request, Response, NextFunction as Next } from 'express-serve-static-core'
import { Middleware } from '@decorators/express'

export class HelmetMiddleware implements Middleware {
  public use(request: Request, response: Response, next: Next): void {
    helmet.contentSecurityPolicy()
    helmet.crossOriginEmbedderPolicy()
    helmet.crossOriginOpenerPolicy()
    helmet.crossOriginResourcePolicy()
    helmet.dnsPrefetchControl()
    helmet.expectCt()
    helmet.frameguard()
    helmet.hidePoweredBy()
    helmet.hsts()
    helmet.ieNoOpen()
    helmet.noSniff()
    helmet.originAgentCluster()
    helmet.permittedCrossDomainPolicies()
    helmet.referrerPolicy()
    helmet.xssFilter()
    next()
  }
}
