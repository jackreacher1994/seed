import express from 'express'
import appConfig from './config/app'

const app = express()

app.get("/", (req, res) => res.send("Hello"))

app.listen(appConfig.port, () => console.log("Server is listening on port ${appConfig.port}"))
