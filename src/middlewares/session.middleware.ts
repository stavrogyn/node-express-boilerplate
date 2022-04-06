import session from 'express-session'
import uid from 'uid-safe'
import { Express } from 'express-serve-static-core'

export const useSession = (app: Express) => {
  app.use(
    session({
      genid: () => uid.sync(18),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    }),
  )
}
