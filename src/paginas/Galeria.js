import colorSharp from "../assets/img/color-sharp.png"

const Galeria = () => {


    const videoStyle = {
        border: '5px solid ', // Color y grosor del borde
        display: 'inline-block',
        margin: '0px', // Espaciado entre los videos
    };

    return (

        <section className="galeria">

            <section className="skills3" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Galeria de videos de futbol</h2>

                                <div style={videoStyle}>
                                    <iframe
                                        width="300"
                                        height="200"
                                        src="https://www.youtube.com/embed/fKFAgDm15jg?ab_channel=TheGrefg"
                                        title="Mi Video de YouTube"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div style={videoStyle}>
                                    <iframe
                                        width="300"
                                        height="200"
                                        src="https://www.youtube.com/embed/fGAAWZj01jg?ab_channel=TheGrefg"
                                        title="Mi Video de YouTube"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div style={videoStyle}>
                                    <iframe
                                        width="300"
                                        height="200"
                                        src="https://www.youtube.com/embed/DUm88iSAyvM?ab_channel=YoSoyPlex"
                                        title="Mi Video de YouTube"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>

                                </div>
                                <div style={videoStyle}>
                                    <iframe
                                        width="300"
                                        height="200"
                                        src="https://www.youtube.com/embed/YzoS8nMpmqM?ab_channel=ElrincóndelClick"
                                        title="Mi Video de YouTube"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div style={videoStyle}>
                                    <iframe
                                        width="300"
                                        height="200"
                                        src="https://www.youtube.com/embed/pFTMwpqO_Ac?ab_channel=FútbolTeAmo"
                                        title="Mi Video de YouTube"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div style={videoStyle}>
                                    <iframe
                                        width="300"
                                        height="200"
                                        src="https://www.youtube.com/embed/B5Hi11VmIuo?ab_channel=ImRomonz"
                                        title="Mi Video de YouTube"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
            </section>



        </section>

    );

}
export default Galeria;