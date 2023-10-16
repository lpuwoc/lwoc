import 'dotenv/config'

import './config/env'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'

import routes from './routes'

const app = new Hono()

app.use("/", logger())
app.use("/", cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    maxAge: 86400,
    credentials: true,
    allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}))

app.get('/', (c) => {
    c.req.parseBody()
    return c.text('Hello World')
})

app.route('/api', routes)

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
    hostname: '0.0.0.0',
}, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}`)   
})
