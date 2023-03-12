import React from 'react';
import images from "../../datas/Images";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'
const ImageGallery = () => {
  return (
    <Carousel className='Slider'>
      {images.map(({ id, src, alt }) => (
        <div key={id}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </Carousel>
  );
};



export default ImageGallery;
