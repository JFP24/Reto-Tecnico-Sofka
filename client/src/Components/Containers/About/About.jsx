import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./About.module.css";

import { Link } from "react-router-dom";
import {
  DiReact,
  DiJavascript1,
  DiPostgresql,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedux,
  SiSequelize,
  SiExpress,
  SiNodedotjs,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

export const About = () => {
  return (
    <div className={style.container}>
      <div className={style.container_about}>
        <div className={style.container_title}>
          <h1 className={style.title}>Reto Sofka</h1>
        </div>
        <p className={style.description}>
          <b>Reto Sofka</b> se desarrolló como reto para el proceso de seleccion
          para los Training Leagues
          <br />
          <b> Sofka Technologies</b>. La idea general es crear una aplicación en
          la cual se puedan ver distintas naves espaciales junto con información
          relevante de las mismas entre otras cosas:
          <b> Buscar naves; Crear, Eliminar</b>
        </p>

        <h4>Fue creado con las siguientes tecnologías:</h4>
        <div className={style.tech_list}>
          <li>
            <DiReact className={style.react_icon} />
            React
          </li>
          <li>
            <SiRedux className={style.react_icon} /> Redux
          </li>
          <li>
            {" "}
            <DiJavascript1 className={style.react_icon} /> Javascript
          </li>
          <li>
            <SiSequelize className={style.react_icon} />
            Sequelize
          </li>
          <li>
            <DiPostgresql className={style.react_icon} />
            PostgreSQL
          </li>
          <li>
            <DiCss3 className={style.react_icon} />
            Css
          </li>
          <li>
            <DiHtml5 className={style.react_icon} />
            Html
          </li>
          <li>
            <SiExpress className={style.react_icon} />
            Express
          </li>
          <li>
            <SiNodedotjs className={style.react_icon} />
            Node.js
          </li>
        </div>
        <hr />

        <div className={style.about_pages}>
          <a
            href="https://www.linkedin.com/in/felipe-pulgarin-b988b21b0/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className={style.social_links_icons} color="#0A66C2" />
          </a>
          <a href="https://github.com/JFP24" target="_blank" rel="noreferrer">
            <SiGithub className={style.social_links_icons} color="black" />
          </a>
        </div>
        <small className={style.dev}>Diseñado por Felipe Pulgarin</small>
        <div className={style.button}>
          <Link to={"/home"}>
            <button className={style.volver}>Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
