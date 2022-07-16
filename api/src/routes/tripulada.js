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
      const infoDb = await Tripulada.findOne({
        where: {
          nombre,
        },
      });
      const info = [
        {
          id: infoDb.id,
          nombre: infoDb.nombre,
          capacidad: infoDb.velocidad,
          peso: infoDb.peso,
          combustible: infoDb.combustible,
          pais: infoDb.pais,
          orbita: infoDb.funcion,
          image: infoDb.image,
        },
      ];
      res.status(202).send(info);
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

router.delete("/tripulada", (req, res) => {
  let { id } = req.query;
  console.log();
  Tripulada.destroy({
    where: { id: id },
  });
  res.status(200).send("Se borró");
});

module.exports = router;
