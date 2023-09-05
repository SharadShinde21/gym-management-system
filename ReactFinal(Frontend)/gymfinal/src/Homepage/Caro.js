
import React from 'react';
import {Carousel,Image} from 'react-bootstrap';
import  carousel1  from '../images/carousel-1.jpg';
import carousel2 from '../images/carousel-2.jpg'
//import carousel3 from '../images/feature-1.jpg';


function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={carousel1} alt='caro1'/>
        <Carousel.Caption>
          <h3>“No sports person can achieve results without an equally dedicated and committed coach.” </h3>
          <p>~  Milkha Singh</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={carousel2} alt='caro2' />
        <Carousel.Caption>
          <h3>“Never Quit, Never back down.”</h3>
          <p>~ John Cena</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Caro;