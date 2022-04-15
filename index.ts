import * as dotenv from 'dotenv'
import http from 'http'

import { server, connection } from './src'

dotenv.config()

const port = process.env.PORT ?? 3033

connection
  .open()
  .then(() => http.createServer(server))
  .then((server) => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error(`Error starting server: ${err}`)
    process.exit(1)
  })
