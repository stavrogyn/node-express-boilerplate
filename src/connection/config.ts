interface Config {
  mongo: {
    url: string
    useCreateIndex: boolean
    autoIndex: boolean
  }
}

export const config: Config = {
  mongo: {
    url: process.env.MONGO_URL as string,
    useCreateIndex: Boolean(process.env.MONGO_CREATE_INDEX),
    autoIndex: Boolean(process.env.MONGO_AUTO_INDEX),
  },
}
