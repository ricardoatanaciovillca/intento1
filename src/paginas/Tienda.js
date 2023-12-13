import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import tienda1 from "../assets/img/tienda1.jpg"
import tienda2 from "../assets/img/tienda2.jpg"
import tienda3 from "../assets/img/tienda3.jpg"
import tienda4 from "../assets/img/tienda4.jpg"
import tienda5 from "../assets/img/tienda5.jpg"
import tienda6 from "../assets/img/tienda6.jpg"
import tienda7 from "../assets/img/tienda7.jpg"
import tienda8 from "../assets/img/tienda8.jpg"
import tienda9 from "../assets/img/tienda9.jpg"
import tienda10 from "../assets/img/tienda10.jpg"
import tienda11 from "../assets/img/tienda11.jpg"
import tienda12 from "../assets/img/tienda12.jpg"
const Tienda = () => {


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

        <section className="tienda">
            <div className="container">
            <div className="row">
                <div className="col-13">
                    <div className="skill-bx wow zoomIn">
                        <h2>Aqui encontraras algunos accesorios deportivos</h2>
                        <h1>Poleras</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={tienda1} alt="Image" />
                                <h6>Esta prenda absorve el sudor y con libre movimiento a solo 40$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda2} alt="Image" />
                                <h6>esta prenda deportiva se usa mas para partido casuales a los 20$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda3} alt="Image" />
                                <h6>Esta diseñado para salir y jugar a solo 30$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda4} alt="Image" />
                                <h6>Este deportivo colo naranja es muy comoda a solo 35$</h6>
                            </div>
                            
                        </Carousel>
                        <h1>Tenis de Marca</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={tienda5} alt="Image" />
                                <h6>Los tenis deportivos son de cuero y resistentes a 100$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda6} alt="Image" />
                                <h6>Este modelo amarillento esta a solo 120$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda7} alt="Image" />
                                <h6>Este par de blancos con platna resistente esta a 150$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda8} alt="Image" />
                                <h6>Los tenis negros son muy buenos a solo 80$</h6>
                            </div>
                            
                        </Carousel>
                        <h1>Accesorios Deportivos</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={tienda9} alt="Image" />
                                <h6>Para evitar accidentes tenemos este accesorios a solo 50$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda10} alt="Image" />
                                <h6>Estos guantes de arquero resistente a la fliccion a 20$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda11} alt="Image" />
                                <h6>algunos accesorios para mla mochila y el balo a 10$</h6>
                            </div>
                            <div className="item">
                                <img src={tienda12} alt="Image" />
                                <h6>Este valon echo de 4 materiales distintas a 300$</h6>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );

}
export default Tienda;