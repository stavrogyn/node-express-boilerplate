import bodyParser from 'body-parser'
import { Express } from 'express-serve-static-core'

export const useParser = (app: Express) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json({ type: 'application/*+json' }))
  app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
  app.use(bodyParser.text({ type: 'text/html' }))
}
