const User = require("../models/User")



module.exports = class AuthRegisterUSerController {
     static async init(req, res) {
        res.send({message:"Bem vindo a nossa API"});

     }

}