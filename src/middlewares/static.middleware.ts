import express from 'express'
import path from 'path'
import { Express } from 'express-serve-static-core'

export const useStatic = (app: Express) => {
  app.use(express.static(path.join(__dirname, 'public')))
}
