import express from 'express'
import { attachControllers } from '@decorators/express'

import { RootController } from './controllers'

const router = express.Router()

attachControllers(router, [RootController])

export default router
