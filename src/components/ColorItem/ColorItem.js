import "./ColorItem.css";



export default function ColorItem({name, image, imageArray, onClick}) {


    return (
        <li className="color-item">
            <div onClick={() => onClick(imageArray)} className="color-item__link">
                <img className="color-item__link-image" src={image} alt={name}/>
                <p className="color-item__title">{name}</p>
            </div>
            <img className="color-item__preview" src={image} alt={name}/>
        </li>
    );
}