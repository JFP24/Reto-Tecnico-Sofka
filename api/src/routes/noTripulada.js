const { Router } = require("express");
const express = require("express");
const axios = require("axios");
const { Lanzadera, NoTripulada, Tripulada } = require("../db");
const router = Router();
router.use(express.json());

router.get("/notripulada", async (req, res) => {
  try {
    const { nombre } = req.query;
    if (nombre) {
      //si me mandan un nombre por el input en el front
      const infoDb = await NoTripulada.findOne({
        where: {
          nombre,
        },
      });
      res.status(202).send(infoDb);
    } else {
      //traigo la informacion de la base de datos y mando un arreglo a el frontend
      const lanzadera = await NoTripulada.findAll();
      res.status(202).send(lanzadera);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.post("/notripulada", async (req, res) => {
  try {
    const { nombre, velocidad, peso, combustible, pais, funcion, image } =
      req.body; //me llega por el formulario del frontend

    if (nombre && velocidad) {
      //validamos el formulario antes de hacer la creacion
      const lanzadera = await NoTripulada.create({
        nombre,
        velocidad,
        peso,
        combustible,
        pais,
        funcion,
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
