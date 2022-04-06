import cors from 'cors'
import { Express } from 'express-serve-static-core'

export const useCors = (app: Express) => {
  app.use(cors())
}
