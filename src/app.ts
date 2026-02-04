
import express from "express";
import type { Application } from "express";

const app : Application = express()

app.get('/', (req, res) => {
    res.json({ message : "App running fine with TS"})
})

export default app

