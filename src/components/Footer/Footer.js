import "./Footer.css"
import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__columns">
                    <h3 className="footer__title">О КОМПАНИИ</h3>
                    <p className="footer__text">
                        Компания «Gagar1n» осуществляет производство и продажу различных солнцезащитных систем и предметов для декора окна.
                    </p>
                </div>

                <div className="footer__columns">
                    <h3 className="footer__title">ПРОДУКЦИЯ</h3>
                    <nav className="footer__nav">
                        <Link to="/products/pleated-curtains" className="footer__text footer__link">Шторы плиссе</Link>
                        <Link to="/products/roller-blinds" className="footer__text footer__link">Рулонные шторы</Link>
                        <Link to="/products/window-blind" className="footer__text footer__link">Жалюзи</Link>
                        <Link to="/products/cornices" className="footer__text footer__link">Карнизы</Link>
                        <Link to="/materials" className="footer__text footer__link">Материалы</Link>
                    </nav>
                </div>

                <div className="footer__columns">
                    <h3 className="footer__title">КОНТАКТЫ</h3>
                    <div>
                        <p className="footer__text footer__number">+7(977) 805-46-46</p>
                        <p className="footer__text">sobiratelniuobraz@gmail.com</p>
                        <p className="footer__text">пн-пт 9-18, сб и вс - выходной</p>
                    </div>
                </div>
            </div>
            <div className="footer__copyright-container">
                <p className="footer__copyright">&copy; 2022 Gagar1n</p>
            </div>
        </footer>
    );
}