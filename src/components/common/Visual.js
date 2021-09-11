import React from "react";
import visualData from "../../data/visualData";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

const VisualSwiper = ({ className, children }) => (
  <Swiper className={className}>{children}</Swiper>
);

const StyledVisual = styled(VisualSwiper)`
  img {
    width: 100%;
  }

  figcaption {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Visual = () => {
  return (
    <StyledVisual>
      {visualData.contents.map((item, index) => (
        <SwiperSlide key={`${item.type} + ${index}`}>
          <figure>
            <img src={item.image} alt="" />
            <figcaption>
              <em>{item.type}</em>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </StyledVisual>
  );
};

export default Visual;
