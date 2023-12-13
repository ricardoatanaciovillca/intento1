// Por ejemplo, JugadoresPage.js
import React from 'react';
import img1 from "../assets/img/equipo0.5.jpg"
import img2 from "../assets/img/equipo1.jpg"
import img3 from "../assets/img/equipo2.jpg"
import img4 from "../assets/img/equipo3.jpg"
import img5 from "../assets/img/equipo4.jpg"
import img6 from "../assets/img/equipo5.jpg"
import img7 from "../assets/img/equipo6.jpg"
import img8 from "../assets/img/equipo7.jpg"
import img9 from "../assets/img/equipo8.jpg"
import img10 from "../assets/img/equipo9.jpg"
import colorSharp from "../assets/img/color-sharp.png"



<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

const JugadoresPage = () => {
    return (
        <section className='juegos'>

            <section className="skills3" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Mejores Equipos</h2>
                                <p>Los mejores equpos de latam de futbol en America Latina pueden variar devido a las opiniones aun asi aqui estan los mejores equipos que son: </p>

                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
            </section>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nacional</h5>
                            <p class="card-text">Club Nacional de Football es uno de los clubes más antiguos de Uruguay y ha tenido un éxito considerable tanto a nivel nacional como internacional.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Peñarol </h5>
                            <p class="card-text">l Club Atlético Peñarol es otro club uruguayo de renombre, con una historia rica en títulos y rivalidades intensas, especialmente con Nacional.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Club AtleticoJuniors</h5>
                            <p class="card-text">Conocido como "Los Xeneizes", Boca Juniors es uno de los clubes más exitosos de Argentina y ha ganado numerosos títulos nacionales e internacionales.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Club Atlético River Plate</h5>
                            <p class="card-text">El eterno rival de Boca Juniors, River Plate es otro de los clubes más grandes de Argentina y ha tenido un éxito significativo a nivel mundial.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Club América</h5>
                            <p class="card-text">Conocido como "Las Águilas", el Club América es uno de los clubes más populares y exitosos de México, con una rica historia de títulos.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Flamengo</h5>
                            <p class="card-text">Flamengo es uno de los clubes más seguidos y exitosos de Brasil, con una enorme base de fanáticos y éxitos tanto a nivel nacional como internacional.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img7} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Corinthians </h5>
                            <p class="card-text">Otro gigante del fútbol brasileño, el Corinthians ha ganado numerosos campeonatos en Brasil y ha tenido éxito en competiciones internacionales</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img8} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Independiente</h5>
                            <p class="card-text">Independiente es conocido como "Rey de Copas" debido a sus numerosos títulos internacionales, incluidas las Copas Libertadores y Mundial de Clubes.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img9} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Santos FC </h5>
                            <p class="card-text">antos ha sido hogar de legendarios jugadores como Pelé y ha tenido un impacto significativo en el fútbol brasileño e internacional.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img10} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Corinthians</h5>
                            <p class="card-text">Otro gigante del fútbol brasileño, el Corinthians ha ganado numerosos campeonatos en Brasil y ha tenido éxito en competiciones internacionales</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default JugadoresPage;