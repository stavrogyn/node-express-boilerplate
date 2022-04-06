import * as dotenv from 'dotenv'
import http from 'http'

import { server } from './src'

dotenv.config()

const port = process.env.PORT ?? 3033

http.createServer(server).listen(port, () => console.log(`Running at http://localhost:${port}/`))
