import "./MainPage.css";
import Gallery from "../components/Gallery";
import React, {useEffect} from "react";
import FeedbackForm from "../components/FeedbackForm";
import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import {products} from "../util/products-value";
import {Link} from "react-router-dom";

export default function MainPage({setSubHeaderTitle}) {

    useEffect(() => {
        setSubHeaderTitle();
    }, []);
    return(
        <div className="main-page">
            <h2 className="main-page__title">О Компании Gagar1na</h2>
            <p className="main-page__subtitle">
                Компания «Gagar1n» осуществляет производство и продажу различных солнцезащитных систем и предметов для декора окна: Уличные маркизные системы и тенты, Рулонные шторы, Шторы плиссе, Жалюзи, Защитные рольставни и различные Карнизные системы для штор от лучших Европейских производителей.
            </p>
            <Gallery/>
            <h3 className="main-page__list-for-title">Компания оказывает профессиональные услуги:</h3>
            <ol className="main-page__list-for">
                <li className="main-page__list-for-item">Частным лицам</li>
                <li className="main-page__list-for-item">Корпоративным клиентам</li>
                <li className="main-page__list-for-item">Архитекторам и дизайнерам</li>
                <li className="main-page__list-for-item">Строительным и монтажным организациям</li>
            </ol>
            <h2 className="main-page__title">Компания осуществляет:</h2>
            <ul className="main-page__list-performs">
                <li className="main-page__list-performs-item">Обеспечение партнеров, по работе с данной продукцией, необходимыми рекламными материалами (каталоги, образцы, прайс-листы, брошюры).</li>
                <li className="main-page__list-performs-item">Бесплатное обучение и консультирование, помощь в предварительной проработке и расчете сложных технических заданий.</li>
                <li className="main-page__list-performs-item">Предоставление специалистов по продажам и замерам, ведению и надзору на объектах со сложным техническим заданием.</li>
                <li className="main-page__list-performs-item">Квалифицированные монтажные работы. Бесплатную доставку своей продукции по Москве и ближайшему Подмосковью.</li>
            </ul>
            <h2 className="main-page__title">Наша продукция</h2>
            <Products>
                {Object.entries(products).map(([key, value], index) => (
                    <Product key={index} image={value.image} name={value.title} url={`products/${key}`}/>
                ))}
            </Products>
            <h2 className="main-page__title">Документация</h2>
            <p className="main-page__subtitle">Предлагаем ознакомиться с документацией, здесь Вы найдете необходимые документы и действующие цены на изделия.</p>
            <div className="main-page__list-docs">
                <div className="main-page__list-docs-item">
                    <Link to="contact/" className="main-page__list-docs-item-title">Прайс лист</Link>
                    <div style={{width: '50px', borderBottom: '1px solid white'}}></div>
                    <p className="main-page__list-docs-text">Обновленный прайс-лист на изделия и комплектующие с описанием и характеристиками.</p>
                </div>
                <div className="main-page__list-docs-item">
                    <Link to="contact/" className="main-page__list-docs-item-title">Инструкции</Link>
                    <div style={{width: '50px', borderBottom: '1px solid white'}}></div>
                    <p className="main-page__list-docs-text">Инструкции по эксплуатации и уходу за изделиями, содержат все необходимые сведения.</p>
                </div>
            </div>
            <FeedbackForm/>
        </div>
    );
}