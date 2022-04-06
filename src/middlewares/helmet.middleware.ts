import * as helmet from 'helmet'
import { Express } from 'express-serve-static-core'

export const useHelmet = (app: Express) => {
  app.use(helmet.contentSecurityPolicy())
  app.use(helmet.crossOriginEmbedderPolicy())
  app.use(helmet.crossOriginOpenerPolicy())
  app.use(helmet.crossOriginResourcePolicy())
  app.use(helmet.dnsPrefetchControl())
  app.use(helmet.expectCt())
  app.use(helmet.frameguard())
  app.use(helmet.hidePoweredBy())
  app.use(helmet.hsts())
  app.use(helmet.ieNoOpen())
  app.use(helmet.noSniff())
  app.use(helmet.originAgentCluster())
  app.use(helmet.permittedCrossDomainPolicies())
  app.use(helmet.referrerPolicy())
  app.use(helmet.xssFilter())
}
