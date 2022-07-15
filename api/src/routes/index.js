const { Router } = require("express");
const router = Router();

const lanzadera = require("./lanzadera");
const tripulada = require("./tripulada");

router.use("/", lanzadera);
router.use("/", tripulada);

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
