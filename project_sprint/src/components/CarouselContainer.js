import React from "react";
import { Carousel } from "react-bootstrap";

import first from "./../holder/1.jpg";
import second from "./../holder/2.jpg";
import third from "./../holder/3.jpg";
// import fourth from "./holder/4.jpg";
// import fifth from "./holder/5.jpg";
// import sixth from "./holder/6.jpg";
// import seventh from "./holder/7.jpg";
// import eightth from "./holder/8.jpg";

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className=" w-100"
          style={{ height: "95vh" }}
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            officiis!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className=" w-100"
          style={{ height: "95vh" }}
          src={second}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            officiis.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className=" w-100"
          style={{ height: "95vh" }}
          src={third}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            officiis
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
