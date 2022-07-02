import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import materials from "../images/materials.png";
import {products} from "../util/products-value";
import React, {useEffect} from "react";
import {useRouteMatch} from "react-router-dom";

export default function ProductsPage({setSubHeaderTitle}) {
    const data = products;
    let { path } = useRouteMatch();
    useEffect(() => {
        setSubHeaderTitle();
    }, []);
    return(
        <Products>
            {Object.entries(data).map(([key, value], index) => (
                <Product key={index} image={value.image} name={value.title} url={`${path}/${key}`}/>
            ))}
            <Product url="/materials" name="МАТЕРИАЛЫ" image={materials}/>
        </Products>
    );
}
