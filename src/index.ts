import "reflect-metadata";
import express from "express";
import cors from "cors"
import * as UserController from "./controller/UserController"

const PORT = 3000;

async function startup() {
    const app = express()
    app.use(express.json(), cors())

    app.post("/user", UserController.save)
    app.get("/user", UserController.getAll)

    app.listen(PORT, () => {
        console.log("app rodando na porta " + PORT)
    })
}

startup()