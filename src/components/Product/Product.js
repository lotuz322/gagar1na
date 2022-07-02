import pleatedCurtains from "../../images/pleated-curtains.png";
import "./Product.css";
import {Link} from "react-router-dom";

export default function Product({image, name, url}) {

    return(
        <Link to={url} className="product">
            <img className="product__image" src={image} alt={name}/>
            <div className="product__name-container">
                <p className="product__name">{name}</p>
            </div>
        </Link>
    );
}