const router = require("express").Router()

const AuthRegisterUSerController = require ("../controllers/AuthRegisterUserController")

router.get("/", AuthRegisterUSerController.init)
// router.post("/auth/register/user", AuthRegisterUSerController.registerUSer)

module.exports = router;