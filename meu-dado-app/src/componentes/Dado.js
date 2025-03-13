import React from 'react';
import { BsDice1Fill, BsDice2Fill, BsDice3Fill, BsDice4Fill, BsDice5Fill, BsDice6Fill } from "react-icons/bs";
import './Dado.css';
 
function Dado({ valor }) {
  const icones = {
    1: BsDice1Fill,
    2: BsDice2Fill,
    3: BsDice3Fill,
    4: BsDice4Fill,
    5: BsDice5Fill,
    6: BsDice6Fill,
  };
 
  return (
    <div className="Dado">
      {React.createElement(icones[valor], { size: 300 })}
    </div>
  );
}
 
export default Dado;