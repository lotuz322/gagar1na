import React, {useState} from "react";
import ColorItem from "../components/ColorItem";
import "./ColorPage.css";
import PopupColorsList from "../components/PopupColorsList/PopupColorsList";

export default function ColorPage({colors}) {
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
            <h2 className="color-page__title">Цвета:</h2>
            <ul className="color-page__list">
                {colors.map((item, index) => (
                    <ColorItem
                        key={index}
                        name={item.title}
                        image={item.colors[Object.keys(item.colors)[0]]}
                        imageArray={item.colors}
                        onClick={handleColorClick}/>
                ))}
            </ul>

            <PopupColorsList isOpen={isOpen} colorsList={popupColors} onClose={handlePopupClose} />
        </div>
    );
}
