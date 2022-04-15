import * as dotenv from 'dotenv'

dotenv.config()

interface Config {
  mongo: {
    url: string
  }
}

export const config: Config = {
  mongo: {
    url: process.env.MONGO_URL as string,
  },
}
