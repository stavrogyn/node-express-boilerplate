import cookieSession from 'cookie-session'
import { Express } from 'express-serve-static-core'

export const useCookieSession = (app: Express) => {
  app.use(
    cookieSession({
      name: 'session',
      keys: ['example-key'],
      maxAge: 24 * 60 * 60 * 1000,
    }),
  )
}
