const { Router } = require("express");
const router = Router();

const lanzadera = require("./lanzadera");

router.use("/", lanzadera);

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
