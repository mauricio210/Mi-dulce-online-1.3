const { Router } = require('express'); 
const usuarioRouter = Router(); 
var controllerUsuario = require('../controllers/controllerUsuarios');
usuarioRouter.post('/new', controllerUsuario.usuarioSave); 
usuarioRouter.post('/login', controllerUsuario.usuarioLogin); 
usuarioRouter.get("/", (req, res) => {
    res.send("Se encuentra en el API personas"); 
})
module.exports = usuarioRouter; 