import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import {useParams, useRouteMatch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {products} from "../util/products-value";
import "./ProductTypeCategory.css";

export default function ProductTypeCategory({setHeader}) {
    let { category, type } = useParams();
    let { url } = useRouteMatch();
    const [data, setData] = useState( {});
    const [description, setDescription] = useState( '');

    useEffect(() => {
        if(products.hasOwnProperty(type)) {
            if(products[type].data.hasOwnProperty(category))
            {
                setData(products[type].data[category].data);
                setHeader(products[type].data[category].headerText);
                setDescription(products[type].data[category].description);
            }
        }
    }, []);


    return(
        <div className="product-type-category">
            <p className="product-type-category-text">{description}</p>
            <Products>
                {Object.entries(data).map(([key, value], index) => (
                    <Product key={index} image={value.image} name={value.title} url={`${url}/${key}`}/>
                ))}
            </Products>
        </div>
    );
}
