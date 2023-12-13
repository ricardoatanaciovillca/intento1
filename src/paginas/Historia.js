import his1 from "../assets/img/his1.jpg";
import his2 from "../assets/img/his2.jpg";
import his3 from "../assets/img/his3.jpg";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import his4 from "../assets/img/his4.jpg";
//import his5 from "../assets/img/his5.jpg";
//import his6 from "../assets/img/his6.jpg";
//import his7 from "../assets/img/his7.jpg";
import colorSharp from "../assets/img/color-sharp.png"


const Historia = () => {

   

    return (
        <section className="his">

            <section className="skills3" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Historia</h2>
                                <p>La historia del fútbol se considera a partir de 1869, año de fundación de la Asociación Inglesa de Fútbol</p>

                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
            </section>
            
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={his1} className="carru" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>La Historia del Futbol</h5>
                            <p className="carrusel-text">Se cree que el fútbol tiene sus raíces en juegos antiguos que involucraban la manipulación de una pelota. Civilizaciones como los chinos, romanos y griegos tenían juegos similares, pero el fútbol moderno emergió en Inglaterra a fines del siglo XIX.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={his2} className="carru" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            
                            <p className="carrusel-text">La codificación de reglas fue esencial para el desarrollo del fútbol. La Football Association (FA) en Inglaterra estableció las primeras reglas en 1863. La popularidad del deporte creció rápidamente, y se formaron asociaciones nacionales en varios países.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={his3} className="carru" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            
                            <p className="carrusel-text">A principios del siglo XX, el fútbol se expandió a nivel internacional. La FIFA (Federación Internacional de Fútbol Asociación) fue fundada en 1904 para supervisar el juego a nivel mundial. La Copa Mundial de la FIFA, que comenzó en 1930, se convirtió en el principal torneo internacional.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={his4} className="carru" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            
                            <p className="carrusel-text">En la década de 1950, Brasil emergió como una potencia futbolística con jugadores legendarios como Pelé. Ganaron la Copa Mundial en 1958, 1962 y 1970, dejando una marca indeleble en la historia del fútbol.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

    );

}
export default Historia;