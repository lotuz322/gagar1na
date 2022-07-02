import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import "./ProductTypePage.css"

import {useParams, useRouteMatch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {products} from "../util/products-value";

export default function ProductAutomationPage({setHeader, automationObject, subHeader}) {
    const [data, setData] = useState(automationObject);
    let { url } = useRouteMatch();

    useEffect(() => {
        setData(automationObject.data);
    }, []);

    useEffect(() => {
        setHeader(subHeader);
    }, [data]);

    return(
        <div className="product-type-page">
            <Products>
                {Object.entries(data).map(([key, value], index) => (
                    <Product key={index} image={value.image} name={value.title} url={`${url}/${key}`}/>
                ))}
            </Products>
        </div>
    );
}
