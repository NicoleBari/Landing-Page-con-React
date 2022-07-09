import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  function alerta(tipo) {
    alert("presentacion" + tipo);
  }
  return (
    <div className="">
      <Navbar />
      <Jumbotron />
      <div className="ms-5 me-5" style={{ "background-color": "#E29578" }}>
        <h1 className="text-center mt-5" style={{ color: "white" }}>
          The best sports
        </h1>
      </div>

      <br />
      <div className="container-fluid">
        <div className="row ms-5 me-5">
          <div className="col-md-3 col-12">
            <Card
              titulo="Ciclismo"
              img="https://a.storyblok.com/f/112937/568x464/c7971716ed/top-cycling-terms-to-watch-the-tour-de-france_568x464.jpg/m/620x0/filters:quality(70)/"
              mensaje={alerta}
              parrafo="El ciclismo es un deporte en el que se utiliza una bicicleta para recorrer circuitos al aire libre o en pista cubierta y que engloba diferentes especialidades."
              link="https://www.esciclismo.com/"
            />
          </div>
          <div className="col-md-3 col-12">
            <Card
              titulo="Golf"
              img="https://static1.abc.es/media/summum/2019/03/29/Golf-kaKI--1200x630@abc.jpg"
              mensaje={alerta}
              parrafo="El golf es un deporte cuyo objetivo es introducir una bola en los hoyos que están distribuidos en el campo con el menor número de golpes, utilizando para cada tipo de golpe uno de entre un conjunto de palos ligeramente diferentes entre sí, ya que la cabeza del palo tiene ángulos distintos, al igual que las varillas tienen longitudes diferentes."
              link=""
            />
          </div>
          <div className="col-md-3 col-12">
            <Card
              titulo="Tenis"
              img="https://static1.abc.es/media/bienestar/2019/08/02/tenis-abecedario-kgNF--620x349@abc.jpg"
              mensaje={alerta}
              parrafo="El tenis, también llamado tenis de campo, es un deporte de raqueta practicado sobre una pista rectangular, delimitada por líneas y dividida por una red. ​Se disputa entre dos jugadores o entre dos parejas."
              link=""
            />
          </div>
          <div className="col-md-3 col-12">
            <Card
              titulo="Voley"
              img="https://www.fundeu.es/wp-content/uploads/2021/01/voleibol-webefesptwelve224491.jpg"
              mensaje={alerta}
              parrafo="El voleibol, vóleibol, volibol, vólibol, balonvolea o simplemente vóley (del inglés volleyball)1​ es un deporte que se juega con una pelota y en el que dos equipos, integrados por seis jugadores cada uno, se enfrentan sobre un área de juego separada por una red central. "
              link=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
