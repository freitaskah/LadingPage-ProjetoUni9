const express = require('express');
const router = express.Router();

const UsuariosController = require('./controllers/UsuariosController');

router.get('/usuarios', UsuariosController.buscarTodos)

module.exports = router;