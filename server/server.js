const express = require('express')
const cors = require('cors')

const port = process.env.port || 3000

const server = express()
server.use(cors())
server.use(express.json())

const {router} = require('./routes/post')

server.get('/', (req, res) => res.send(`<h1>Welcome to Rantt</h1>`))
server.use('/posts', router)

server.listen(port, () => console.log(`> Rantt online @ http://localhost:${port}`))