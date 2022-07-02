import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import pleatedCurtains from "../images/material-pleated-curtains.png";
import rollerBlinds from "../images/material-roller-blinds.png";
import marquises from "../images/material-marquises.png";
import windowBlind from "../images/material-window-blind.png";

export default function MaterialsPage() {
    return(
        <Products>
            <Product url="/materials/pleated-curtains" name="ШТОРЫ ПЛИССЕ" image={pleatedCurtains}/>
            <Product url="/materials/roller-blinds" name="РУЛОННЫЕ ШТОРЫ" image={rollerBlinds}/>
            <Product url="/materials/window-blind" name="ТКАНИ ДЛЯ ЖАЛЮЗИ" image={windowBlind}/>
            <Product url="/materials/cornices" name="МАРКИЗЫ" image={marquises}/>
        </Products>
    );
}
