import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    "type": "sqlite",
    "database": "database/app.sqlite",
    "synchronize": true,
    "logging": false,
    "entities": [__dirname + "/entity/*.ts"],
    "migrations": [__dirname + "/migration/**/*.ts"],
    "subscribers": [__dirname + "/subscribers/**/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source Sqlite Inicializada com sucesso!")
    })
    .catch((err) => {
        console.error("Error during Data Source Sqlite initialization", err)
    })