import {NavLink} from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

export default function Header({}) {

    return(
        <header className="header">
            <div className="header__info">
                <p className="header__info-text">г.Москва, Коминтерна 2/2</p>
                <p className="header__info-text">+7(977)805-46-46</p>
            </div>
            <img className="header__logo"  src={logo} alt="лого"/>
            <nav className="header__menu">
                <NavLink className="header__menu-link" activeClassName="header__menu-link_active" exact to="/">О КОМПАНИИ</NavLink>
                <NavLink className="header__menu-link" activeClassName="header__menu-link_active" to="/products">ПРОДУКЦИЯ</NavLink>
                <NavLink className="header__menu-link" activeClassName="header__menu-link_active" to="/documentation">ДОКУМЕНТАЦИЯ</NavLink>
                <NavLink className="header__menu-link" activeClassName="header__menu-link_active" to="/contacts">КОНТАКТЫ</NavLink>
            </nav>
        </header>
    );
}