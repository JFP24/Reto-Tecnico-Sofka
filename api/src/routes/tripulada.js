const { Router } = require("express");
const express = require("express");
const axios = require("axios");
const { Lanzadera, NoTripulada, Tripulada } = require("../db");
const router = Router();
router.use(express.json());

router.get("/tripulada", async (req, res) => {
  try {
    const { nombre } = req.query;
    if (nombre) {
      const tripuladaDb = await Tripulada.findOne({
        where: {
          nombre,
        },
      });
      res.status(202).send(tripuladaDb);
    } else {
      const infoDb = await Tripulada.findAll();
      res.send(infoDb);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/tripulada", async (req, res) => {
  try {
    const { nombre, capacidad, peso, combustible, pais, orbita, image } =
      req.body; //me llega por el formulario del frontend

    if (nombre && capacidad) {
      //validamos el formulario antes de hacer la creacion
      const tripulada = await Tripulada.create({
        nombre,
        capacidad,
        peso,
        combustible,
        pais,
        orbita,
        image,
      });
      res.status(202).json(tripulada);
    } else {
      res.send("espacios por llenar");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
