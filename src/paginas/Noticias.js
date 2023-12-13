import not1 from "../assets/img/not1.jpg";
import not2 from "../assets/img/not2.jpg";
import not3 from "../assets/img/not3.jpg";
import not4 from "../assets/img/not4.jpg";
import not5 from "../assets/img/not5.jpg";
import not6 from "../assets/img/not6.jpg";
import not7 from "../assets/img/not7.jpg";
import not8 from "../assets/img/not8.jpg";
import colorSharp from "../assets/img/color-sharp.png"


const Noticias = () => {

    return (

        <section className="not">

            <section className="skills3" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Noticias</h2>
                                <p>El futbol es un deporte muy famoso a nivel global donde cada equipo muestra sus abilidades y como es muy popular en esta seccion te daremos algunas noticias del deporte</p>

                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
            </section>


            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={not1} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">Corinthians acaricia la permanencia tras remonstar a Vasco da Gama</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={not2} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">El empate entre Barracas y Argentinos Juniors culminó la Copa de la Liga</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={not3} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">Racing golea a Belgrano y es el líder de la zona 2</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={not4} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">El Flamengo empata con el Palmeiras en la lucha por el título</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={not5} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">Defensa derrota a San Lorenzo y se cita con estudiantes en la final de la copa argentina</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={not6} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">Botafogo deja escapar la posivilidad de recuperr el liderato</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={not7} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">Venesuela se consolida en la cuarta osicion</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={not8} class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text">Colombia concerba su invicto ante paraguay </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );

}
export default Noticias;