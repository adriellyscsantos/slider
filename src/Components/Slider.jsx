import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import '../Styles/style.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
    return (
      <>
       
        <div className="Carousel">
          <Carousel breakPoints={breakPoints}>
            <Item>Adrielly</Item>
            <Item>É</Item>
            <Item>Linda</Item>
            <Item>Maravilhosa</Item>
            <Item>Perfeita</Item>
            <Item>Cheirosa</Item>
            <Item>Tudo de bom</Item>
            <Item>E muito mais</Item>
          </Carousel>
        </div>
      </>
    );
  }

  export default Slider
