const { Router } = require("express");
const express = require("express");
const axios = require("axios");
const { Lanzadera, Notripulada, Tripulada } = require("../db");
const router = Router();
router.use(express.json());

router.get("/notripulada", async (req, res) => {
  try {
    const { nombre } = req.query;
    if (nombre) {
      //si me mandan un nombre por el input en el front
      const infoDb = await Notripulada.findOne({
        where: {
          nombre,
        },
      });
      const info = [
        {
          id: infoDb.id,
          nombre: infoDb.nombre,
          velocidad: infoDb.velocidad,
          peso: infoDb.peso,
          combustible: infoDb.combustible,
          pais: infoDb.pais,
          funcion: infoDb.funcion,
          image: infoDb.image,
        },
      ];
      res.status(202).send(info);
    } else {
      //traigo la informacion de la base de datos y mando un arreglo a el frontend
      const noTripulada = await Notripulada.findAll();
      res.status(202).send(noTripulada);
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
      const noTripulada = await Notripulada.create({
        nombre,
        velocidad,
        peso,
        combustible,
        pais,
        funcion,
        image,
      });
      res.status(202).json(noTripulada);
    } else {
      res.send("espacios por llenar");
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/notripulada", (req, res) => {
  let { id } = req.query;
  console.log();
  Notripulada.destroy({
    where: { id: id },
  });
  res.status(200).send("Se borró");
});

module.exports = router;
