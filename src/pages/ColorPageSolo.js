import React, {useState} from "react";
import ColorItem from "../components/ColorItem";
import "./ColorPage.css";
import PopupColorsList from "../components/PopupColorsList/PopupColorsList";

export default function ColorPageSolo({colors}) {
    const [isOpen, setIsOpen] = useState(false);
    const [popupColors, setPopupColors] = useState({});
    const handlePopupClose = () => {
        setPopupColors({});
        setIsOpen(false);
    }
    const handleColorClick = (imageArray) => {
        setPopupColors(imageArray);
        setIsOpen(true);
    }
    return(
        <div className="color-page">
            <h2 className="color-page__title">Варианты:</h2>
            <ul className="color-page__list-solo">
                {Object.entries(colors).map(([key, value], index) => (
                    <img key={index} className="color-page__list-solo-item" src={value} alt=""/>
                ))}
            </ul>

            <PopupColorsList isOpen={isOpen} colorsList={popupColors} onClose={handlePopupClose} />
        </div>
    );
}
