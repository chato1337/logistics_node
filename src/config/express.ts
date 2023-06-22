// import locationRouter from '@controller/location/location.router'
import express from 'express'
import cors from 'cors'

const createServer = (): express.Application => {
    const app = express()

    app.use(cors())

    return app
}

export { createServer }