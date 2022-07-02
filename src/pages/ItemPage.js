import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {materials, products} from "../util/products-value";
import "./ItemPage.css";
import Product from "../components/Product/Product";
import Products from "../components/Products/Products";

import standardColor1013 from "../images/standart-profile-colors/1013.png";
import standardColor8019 from "../images/standart-profile-colors/8019.png";
import standardColor9006 from "../images/standart-profile-colors/9006.png";
import standardColor9016 from "../images/standart-profile-colors/9016.png";

export default function ItemPage({setHeader}) {
    let { category, type, item } = useParams();
    const [data, setData] = useState( {});
    const [categoryData, setCategoryData] = useState( {});
    const [colorsList, setColorsList] = useState([]);
    useEffect(() => {
        if(products.hasOwnProperty(type)) {
            if(products[type].data.hasOwnProperty(category))
            {
                if(products[type].data.hasOwnProperty(category))
                {
                    const tempItemData = products[type].data[category].data[item];
                    const tempCategoryData = products[type].data[category].data;
                    const tempCategoryItem = {};
                    let i = 0;
                    for (let key in tempCategoryData) {
                        if(tempCategoryData[key].title !== tempItemData.title) {
                            tempCategoryItem[key] = tempCategoryData[key];
                            i++;
                            if(i >= 3)
                                break;
                        }
                    }

                    if(materials.hasOwnProperty(type)) {
                        const temp = [];
                        materials[type].forEach((item) => {
                            temp.push(item.colors[Object.keys(item.colors)[0]]);
                            temp.push(item.colors[Object.keys(item.colors)[1]]);
                        });
                        setColorsList(temp);
                    }
                    setData(tempItemData);
                    setCategoryData(tempCategoryItem);
                }
            }
        }
        return(() => {
            window.scrollTo(0, 0);
        });
    }, [item]);

    useEffect(() => {
        setHeader(data.title);
    }, [data]);
    return (
        <div className="item-page">
            <div className="item-page__container-info">
                <img className="item-page__image" src={data.image} />
                <div>
                    <h2 className="item-page__title">Описание:</h2>
                    <p className="item-page__text">{data.description}</p>
                    <h2 className="item-page__title">Комплектация:</h2>
                    <p className="item-page__text">{data.equipment}</p>

                    {(data.standardColors && !(data.standardColors.length === 0)) &&
                        (<h3 className="item-page__standard-color-list-title">Цвет комплектации:</h3>)
                    }

                    {(!data.standardColors) &&
                    (<h3 className="item-page__standard-color-list-title">Цвет комплектации:</h3>)
                    }

                    <ul className="item-page__standard-color-list">
                        {!data.standardColors && (
                                <>
                                    <li className="item-page__standard-color-list-item">
                                        <img className="item-page__standard-color-list-image" src={standardColor1013} alt=""/>
                                    </li>
                                    <li className="item-page__standard-color-list-item">
                                        <img className="item-page__standard-color-list-image" src={standardColor8019} alt=""/>
                                    </li>
                                    <li className="item-page__standard-color-list-item">
                                        <img className="item-page__standard-color-list-image" src={standardColor9006} alt=""/>
                                    </li>
                                    <li className="item-page__standard-color-list-item">
                                        <img className="item-page__standard-color-list-image" src={standardColor9016} alt=""/>
                                    </li>
                                </>
                        )}
                        {data.standardColors && data.standardColors.map((item, index) => (
                            <li key={index} className="item-page__standard-color-list-item">
                                <img className="item-page__standard-color-list-image" src={item} alt=""/>
                            </li>
                        ))}
                    </ul>
                    <Route path="products/pleated-curtains">
                        <p className="item-page__text">Возможна покраска профиля по цветовой карте RAL</p>
                    </Route>
                    {data.headerSubDescription && (
                        <h3 className="item-page__standard-color-list-title">{data.headerSubDescription}</h3>
                    )}
                    {data.arrayVariant && (
                        <div className="item-page__info-image-list">
                            {data.arrayVariant.map((item, index) => (
                                <div className="item-page__info-image-list-item">
                                    <p className="item-page__info-image-list-item-title">{item[0]}</p>
                                    <img className="item-page__info-image-list-item-image" src={item[1]} alt=""/>
                                </div>
                            ))}
                        </div>
                    )}
                    {data.subDescription && (
                        <p className="item-page__text">{data.subDescription}</p>
                    )}
                    {data.headerSubDescription_2 && (
                        <h3 className="item-page__standard-color-list-title">{data.headerSubDescription_2}</h3>
                    )}
                    {data.subDescription_2 && (
                        <p className="item-page__text">{data.subDescription_2}</p>
                    )}
                    {data.warning && (
                        <p style={{color: 'red',}} className="item-page__text">{data.warning}</p>
                    )}
                </div>
            </div>
            {!data.unableColor && (
                <div className="item-page__container-colors">
                    <Switch>
                        <Route path="/products/pleated-curtains">
                            <h2 className="item-page__title">Ткани для плиссе:</h2>
                        </Route>
                        <Route path="/products/roller-blinds">
                            <h2 className="item-page__title">Ткани для рулонных штор:</h2>
                        </Route>
                        <Route path="/products/window-blind/vertical">
                            <h2 className="item-page__title">Ткани для вертикальных жалюзи:</h2>
                        </Route>
                        <Route path="/products/window-blind/horizontal">
                            <h2 className="item-page__title">Ламели для деревянных жалюзи:</h2>
                        </Route>
                    </Switch>
                    <div className="item-page__colors">
                        {!data.color && colorsList.map((item, index) => (
                            <img className="item-page__colors-item" key={index} src={item} alt=""/>
                        ))}
                        {data.color && Object.entries(data.color).map(([key, value], index) => (
                            <img className="item-page__colors-item" key={index} src={value} alt=""/>
                        ))}
                    </div>
                    {!data.color && (
                        <Link className="item-page__color-link" to={`/materials/${type}`}>Все ткани...</Link>
                    )}
                </div>
            )}
            <div className="item-page__container-colors">
                <h2 className="item-page__title">Другие модели:</h2>
                <Products className="item-page__colors">
                    {Object.entries(categoryData).map(([key, value], index) => (
                        <Product key={index} image={value.image} name={value.title} url={`/products/${type}/${category}/${key}`}/>
                    ))}
                </Products>
            </div>
        </div>
    );
}