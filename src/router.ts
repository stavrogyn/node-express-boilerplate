import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

router.get('/about', (req: Request, res: Response) => {
  res.send('About me')
})

export default router
