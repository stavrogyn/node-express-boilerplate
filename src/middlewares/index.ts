import { Express } from 'express-serve-static-core'

import { useParser } from './parser.middleware'
import { useLogger } from './logger.middleware'
import { useError } from './error.middleware'
import { useCookieSession } from './cookie-session.middleware'
import { useStatic } from './static.middleware'
import { useCors } from './cors.middleware'
import { useHelmet } from './helmet.middleware'
import { useSession } from './session.middleware'

export const useMiddlewares = (app: Express) => {
  useParser(app)
  useLogger(app)
  useError(app)
  useCookieSession(app)
  useStatic(app)
  useCors(app)
  useStatic(app)
  useHelmet(app)
  useSession(app)
}
