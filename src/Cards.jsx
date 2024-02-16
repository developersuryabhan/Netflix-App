import React from "react";
import Images from "./Images";
import Heading from "./Heading";

// Props as a objects pass
function Card(props) {
  console.log(props)
  return (
    <div className="cards">
      <div className="card">
        <Images imgscr={props.imgscr} />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <Heading sname={props.sname} />
          <a href={props.links} target='_blank'>
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;