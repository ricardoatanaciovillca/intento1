import dest1 from "../assets/img/dest1.jpg";
import dest2 from "../assets/img/dest2.jpg";
import dest3 from "../assets/img/dest3.jpg";
import dest4 from "../assets/img/dest4.jpg";
import dest5 from "../assets/img/dest5.jpg";
import dest6 from "../assets/img/dest6.jpg";
import dest7 from "../assets/img/dest7.jpg";
import dest8 from "../assets/img/dest8.jpg";
import dest9 from "../assets/img/dest9.jpg";
import dest10 from "../assets/img/dest10.jpg";
import colorSharp from "../assets/img/color-sharp.png"

const JugadoresDestacados = () => {

    return (
        <section className="destacados">

            <section className="skills3" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Jugadores Destacados</h2>
                                <p>Hacer un ranking de los mejores jugadoes de futbol de America Latina es subjetivo y puede variar segun las opiniones,aun asi aqui un ranking de los mejores jugadores de Latam hasta el 2022</p>

                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
            </section>

            <div class="card-group">
                <div class="card">
                    <img src={dest1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Lionel Messi</h5>
                        <p class="card-text">Considerado uno de los mejores jugadores de todos los tiempos, Messi ha ganado numerosos títulos con el FC Barcelona y ha sido premiado con múltiples Balones de Oro.</p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Neymar Jr</h5>
                        <p class="card-text">Un talentoso delantero brasileño, conocido por su habilidad para regatear y su creatividad en el campo. Ha jugado para el Barcelona y el Paris Saint-Germain (PSG).</p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Robert Lewandowski</h5>
                        <p class="card-text">Aunque es polaco, merece ser mencionado por su destacado rendimiento en el Bayern de Múnich</p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest4} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Sergio Agüero</h5>
                        <p class="card-text">Un delantero argentino que ha tenido una exitosa carrera, especialmente con el Manchester City</p>

                    </div>
                </div>



            </div>
            <div className="card-group">
                <div class="card">
                    <img src={dest5} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Edinson Cavani</h5>
                        <p class="card-text">Un prolífico delantero uruguayo conocido por su capacidad goleadora y trabajo incansable en el campo. </p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest6} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Luis Suárez</h5>
                        <p class="card-text">Otra estrella uruguaya, Suárez es un delantero letal con una gran capacidad de finalización</p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest7} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Javier Hernández</h5>
                        <p class="card-text">Chicharito ha sido un delantero destacado que ha jugado en clubes como el Manchester United y el Real Madrid.</p>

                    </div>
                </div>

            </div>
            <div class="card-group">
                <div class="card">
                    <img src={dest8} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Paolo Guerrero </h5>
                        <p class="card-text">Uno de los mejores delanteros peruanos, Guerrero ha tenido una destacada carrera con clubes como el Corinthians y el Internacional.</p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest9} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">James Rodríguez </h5>
                        <p class="card-text">n talentoso mediocampista colombiano, conocido por su visión y habilidades técnicas. Ha jugado para clubes como el Real Madrid y el Everton.</p>

                    </div>
                </div>
                <div class="card">
                    <img src={dest10} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Arturo Vidal</h5>
                        <p class="card-text">Un mediocampista versátil chileno conocido por su energía y capacidad para marcar goles. Ha tenido éxito en clubes como la Juventus, el Bayern de Múnich y el FC Barcelona.</p>

                    </div>
                </div>
            </div>

        </section>
    );

}
export default JugadoresDestacados;