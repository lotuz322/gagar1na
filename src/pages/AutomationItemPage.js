import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./AutomationItemPage.css";

export default function AutomationItemPage({setHeader, automationObject, subHeader}) {
    let { category, subcategory } = useParams();
    const [data, setData] = useState( {});
    useEffect(() => {
        if(automationObject.hasOwnProperty(category)) {
            if(subcategory !== undefined)
            {
                if(automationObject.hasOwnProperty(subcategory))
                {
                    setData(automationObject[subcategory].data);
                    return;
                }
            }
            setData(automationObject[category].data);
        }
    }, []);

    useEffect(() => {
        setHeader(subHeader);
    }, [data]);
    return (
        <div className="automation-item-page">
            {Object.entries(data).map(([key, value], index) => (
                <div key={index} className="automation-item-page__item">
                    <img src={value.image} alt="" className="automation-item-page__image"/>
                    <div className="automation-item-page__info-container">
                        <h2 className="automation-item-page__item-title">{value.title}</h2>
                        <p className="automation-item-page__description">{value.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
