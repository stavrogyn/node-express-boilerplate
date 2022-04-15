import mongoose from 'mongoose'
import { ServerApiVersion } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { config } from './config'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  serverApi: ServerApiVersion.v1,
}

class MongoConnection {
  private static instance: MongoConnection

  private mongoServer?: MongoMemoryServer

  static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection()
    }
    return MongoConnection.instance
  }

  public async open(): Promise<void> {
    try {
      if (config.mongo.url === 'inmemory') {
        console.log('connecting to inmemory mongo db')
        this.mongoServer = new MongoMemoryServer()
        const mongoUrl = this.mongoServer.getUri()
        await mongoose.connect(mongoUrl, options)
      } else {
        console.log('connecting to mongo db: ' + config.mongo.url)
        mongoose.connect(config.mongo.url, options)
      }

      mongoose.connection.on('connected', () => {
        console.log('Mongo: connected')
      })

      mongoose.connection.on('disconnected', () => {
        console.error('Mongo: disconnected')
      })

      mongoose.connection.on('error', (err) => {
        console.error(`Mongo:  ${String(err)}`)
        if (err.name === 'MongoNetworkError') {
          setTimeout(function () {
            mongoose.connect(config.mongo.url, options).catch(() => {})
          }, 5000)
        }
      })
    } catch (err) {
      console.error(`db.open: ${err}`)
      throw err
    }
  }

  public async close(): Promise<void> {
    try {
      await mongoose.disconnect()
      if (config.mongo.url === 'inmemory') {
        await this.mongoServer!.stop()
      }
    } catch (err) {
      console.error(`db.open: ${err}`)
      throw err
    }
  }
}

export const connection = MongoConnection.getInstance()
