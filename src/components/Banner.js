import banner from "../banner.jpg"
const Banner = () => {

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"><strong> NUEVO CONCEPTO INMOBILIARIO</strong> </h2>
                                <p>CENTRO URBANO DE L'HOSPITALET</p>
                                <button type="button" className="btn btn-primary m-2">Ver piso</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;