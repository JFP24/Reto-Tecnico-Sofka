const { Router } = require("express");
const express = require("express");
const axios = require("axios");
const { Lanzadera, NoTripulada, Tripulada } = require("../db");
const router = Router();
router.use(express.json());

router.get("/lanzadera", async (req, res) => {
  try {
    const { nombre } = req.query;
    if (nombre) {
      //si me mandan un nombre por el input en el front
      const infoDb = await Lanzadera.findOne({
        where: {
          nombre,
        },
      });
      res.status(202).send(infoDb);
    } else {
      //traigo una base de datos y mando un arreglo a el frontend
      const lanzadera = await Lanzadera.findAll();
      res.status(202).send(lanzadera);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.post("/lanzadera", async (req, res) => {
  try {
    const { nombre, velocidad, peso, combustible, pais, creacion, image } =
      req.body; //me llega por el formulario del frontend

    if (nombre && velocidad) {
      //validamos el formulario antes de hacer la creacion
      const lanzadera = await Lanzadera.create({
        nombre,
        velocidad,
        peso,
        combustible,
        pais,
        creacion,
        image,
      });
      res.status(202).json(lanzadera);
    } else {
      res.send("espacios por llenar");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
