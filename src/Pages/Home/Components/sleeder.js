import "./sleeder.css";
import { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from '@material-ui/core/Card';
// import astronaut from "./images/astronaut.png";
// import celebrating from "./images/celebrating.png";
// import assests from "./images/assests.png";
// import education from "./images/education.png";
// import taken from "./images/taken.png";
import React from 'react';



const images = ["https://cache.marriott.com/marriottassets/marriott/PRCSH/prcsh-exterior-0097-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*", "https://cache.marriott.com/marriottassets/marriott/PRCSH/prcsh-indoor-pool-4803-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*", "https://cache.marriott.com/marriottassets/marriott/PRCSH/prcsh-king-bedroom-4801-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*"];
function Sleeder() {
  const NextArrow = ({ onClick }) => {
    return (
      <div style={{boxShadow: "0 6px 10px 0 rgb(229, 226, 226)",width:"63px",height:"60px",
      padding: "0",color:"grey",
        fontSize: "16px",right:"43px",top:"230px"}} className="arrow next" onClick={onClick}>
        <ArrowForwardIosIcon style={{margin:"18px"}} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
        <div>
        <div style={{marginTop:"100px"}}>
      <div style={{boxShadow: "0 4px 8px 0 rgb(229, 226, 226)",width:"63px",height:"60px",color:"gray",
      fontSize: "16px",left:"44px",top:"230px",position:"absolute"}} className="arrow prev" onClick={onClick}>
        <ArrowBackIosIcon  style={{margin:"18px"}} />
      </div>
      </div>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    lazyLoad: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Threed">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Card style={{borderWidth:"20px",borderColor:"grey",}} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} />
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default Sleeder;