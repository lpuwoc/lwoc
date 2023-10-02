import 'dotenv/config'

import './config/env'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
    return c.text('Hello World')
})

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
}, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}`)   
})
