import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import "./ProductTypePage.css"

import {useParams, useRouteMatch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {products} from "../util/products-value";

export default function ProductTypePage({setHeader}) {
    let { type } = useParams();
    let { url } = useRouteMatch();
    const [data, setData] = useState( {});
    const [description, setDescription] = useState( []);
    useEffect(() => {
        if(products.hasOwnProperty(type)) {
            setData(products[type].data);
            setHeader(products[type].title);
            setDescription(products[type].description);
        }
    }, [type]);

    return(
        <div className="product-type-page">
            <h2 className="product-type-category-title">Модели</h2>
            {description.map((item, index) => (
            <p key={index} className="product-type-category-text">{item}</p>
            ))}
            <Products>
                {Object.entries(data).map(([key, value], index) => (
                    <Product key={index} image={value.image} name={value.title} url={`${url}/${key}`}/>
                ))}
            </Products>
        </div>
    );
}
