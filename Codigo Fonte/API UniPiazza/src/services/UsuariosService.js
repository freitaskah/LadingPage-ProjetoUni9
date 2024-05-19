const db = require ('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise ((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuario', (error, result)=>{
                if(error) { rejeitado(error); return; }
                aceito(result)
            });
        });
    }
}
 