import img0 from "../../images/gallery/img.png";
import img1 from "../../images/gallery/img_1.png";
import img2 from "../../images/gallery/img_2.png";
import img4 from "../../images/gallery/img_4.png";
import img5 from "../../images/gallery/img_5.png";
import img6 from "../../images/gallery/img_6.png";
import img7 from "../../images/gallery/img_7.png";
import img8 from "../../images/gallery/img_8.png";
import img9 from "../../images/gallery/img_9.png";
import "./Gallery.css";
import {useEffect, useState} from "react";

export default function Gallery() {
    const arrayImage = [img0, img1, img2, img4, img5, img6, img7, img8, img9];
    const [activeImage, setActiveImage] = useState(0);

    const handleIntervalComplete = () => {
        setActiveImage(activeImage + 1);
    }

    useEffect( () => {
        if(activeImage >= arrayImage.length){
            setActiveImage(0)
        }
    }, [activeImage]);

    useEffect(() => {
        let timerId = setInterval(() => handleIntervalComplete(), 4000);
        return(() => {
            clearInterval(timerId);
        });
    }, [activeImage]);

    return(
      <div className="gallery">
          <div className="gallery__viewing">
              <img className="gallery__viewing-item" src={arrayImage[activeImage]}/>
          </div>
          <div className="gallery__image-list-container">
              <button className="gallery__image-list-scroll" onClick={()=> {
                  document.querySelector('.gallery__image-list-wrapper').scrollLeft -= 60;
                  console.log(document.querySelector('.gallery__image-list-wrapper').scrollLeft);
              }}/>
              <div className="gallery__image-list-wrapper">
                  <div className="gallery__image-list">
                      {arrayImage.map((item, index) => (
                          <img key={index}  onClick={() => setActiveImage(index)} className={(index === activeImage) ? 'gallery__image-list-item gallery__image-list-item_active' : 'gallery__image-list-item'} src={item}/>
                      ))}
                  </div>
              </div>

              <button onClick={()=> {
                  document.querySelector('.gallery__image-list-wrapper').scrollLeft += 60;
              }} className="gallery__image-list-scroll gallery__image-list-scroll_right"/>
          </div>
      </div>
    );
}