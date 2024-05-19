const mongoose = require ("mongoose")

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@dbmongo.jju891p.mongodb.net/test?retryWrites=true&w=majority`)

    const connection = mongoose.connection;


    connection.on("error", () => {
        console.error("Erro ao conectar com o MongoDB")

    })

    connection.on("open", () => {
        console.log("conectado ao MongoDB com sucesso!")
    })
}

connect();

module.exports = mongoose;