import "./PopupColorsList.css";
import React from "react";
export default function PopupColorsList({isOpen, onClose, colorsList}) {
    return(
        isOpen && <div className={`popup`}>
            <div className="popup__container">
                <div className="popup__list">
                    {Object.entries(colorsList).map(([key, value], index) => (
                        <div key={index} className="popup__item">
                            <img className="popup__item-image" src={value}/>
                        </div>
                    ))}

                </div>
                <div className="popup__close" onClick={onClose}/>
            </div>
        </div>
    );
}
