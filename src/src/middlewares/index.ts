import { Express } from 'express-serve-static-core'

import { ParserMiddleware } from './parser.middleware'
import { LoggerMiddleware } from './logger.middleware'
import { CastomErrorMiddleware } from './error.middleware'
import { CookieSessionMiddleware } from './cookie-session.middleware'
import { StaticMiddleware } from './static.middleware'
import { CorsMiddleware } from './cors.middleware'
import { HelmetMiddleware } from './helmet.middleware'
import { SessionMiddleware } from './session.middleware'

export const useMiddlewares = (app: Express) => {
  app.use(new ParserMiddleware().use)
  app.use(new LoggerMiddleware().use)
  app.use(new StaticMiddleware().use)
  app.use(new CookieSessionMiddleware().use)
  app.use(new CorsMiddleware().use)
  app.use(new HelmetMiddleware().use)
  app.use(new SessionMiddleware().use)
  app.use(new CorsMiddleware().use)
  app.use(new CookieSessionMiddleware().use)
  app.use(new CastomErrorMiddleware().use)
}
