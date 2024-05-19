const UsuarioService = require('../services/UsuariosService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let usuarios = await UsuarioService.buscarTodos();

            for (let i in usuarios) {
                json.result.push({
                    id: usuarios[i].id,
                    email: usuarios[i].email,
                    senha: usuarios[i].senha,

                });
            }

            res.json(json);
        } catch (error) {
            json.error = 'Erro ao buscar usuários: ' + error.message;
            res.status(500).json(json);
        }
    }
};
