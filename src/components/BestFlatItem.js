import {Link} from "react-router-dom"
const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">Hospitalet de Llobregat</Link></h4>
                    <span><Link to="/">Principal 1</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>3 camas</span>
                        </div>
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>2 habitaciones</span>
                        </div>
                    </div>
                    <h5 className="best-estate-price">150.000€</h5>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem