// Por ejemplo, JugadoresPage.js
import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import messi from "../assets/img/mesi-modified.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/mesi2-modified.png"
import meter2 from "../assets/img/ronaldo-modified.png"
import meter3 from "../assets/img/pique-modified.png"
import colorSharp from "../assets/img/color-sharp.png"

const Inicio = () => {

    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const toRotate = [ "Jugadores", "Partidos", "Equipos" ];
  const period = 5000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } 
  }


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




  return (

    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">  Bienvenido a equipos deportivos</span>
                <h1>{`Noticias de`} <span className="txt-rotate" dataPeriod="2000" data-rotate='[ "Jugadores", "Partidos", "Equipos" ]'><span className="wrap">{text}</span></span></h1>
                  <h3>Explora el apasionante mundo del fútbol en LATAM con nosotros
                    .Aqui encontraras noticias de deportes, jugadores, partidos. Sumérgete en la rica cultura futbolística de América Latina.
                    Nuestro sitio (trabajo de universidad xd) es tu destino central para obtener información completa sobre los equipos, jugadores y eventos futbolísticos en América Latina.
                  </h3>
          </Col>
          <Col xs={10} md={5} xl={4}>
            <siv className="messi">
                <img src={messi} alt="Header Img"/>
            </siv>
                  
                
          </Col>
        </Row>
      </Container>

      <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>jugadores Famosos</h2>
                        <p>Bienvenido a nuestra sección dedicada a los íconos del fútbol mundial! En este espacio, celebramos la grandeza de los jugadores que han dejado una huella imborrable en el deporte rey. Desde el mago argentino hasta el incansable portugués, y el defensor con estilo y carisma, te presentamos a tres gigantes del fútbol: Lionel Messi, Cristiano Ronaldo y Gerard Piqué.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Lionel Messi es el número uno con una puntuación de 93%.</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>La Puntuación del Jugador Cristiano Ronaldo en la temporada 2022 de la FIFA World Cup fue de 80,74%</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Gerard Piqué, Barcelona, 66% puntos Al igual que Chiellini, Piqué ha sido uno de los puntales del fútbol mundial desde hace mucho tiempo </h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>



    </section>
    
    
  );
}

export default Inicio;