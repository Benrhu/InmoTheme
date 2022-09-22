const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Sobre Urban</h1>
                            <h2 className="page-description">Cónocenos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Trabajamos para servirte a ti
                            </div>
                                <div className="about-text">
                                    Nuestro único objetivo es ayudar a otras personas a conectar con su hogar. No creemos que comprar un piso sea como comprar un coche.
                                    Sabemos lo importante que es para cualquier persona encontrar y conectar con su hogar, el lugar dónde van a descansar, van a disfrutar de sus hijos y sus nietos.
                                    <br/><br/>
                                    Por eso nos aseguuramos de que:
                            </div>
                                <div className="about-features">
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i>El piso está en muy buen estado y es de calidad.</p>
                                    <p className="about-feature" ><i className="fas fa-long-arrow-alt-right"></i>La zona y alrededores del piso es inmejorable</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i>Trabajamos con los mejores procesos de selección</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About