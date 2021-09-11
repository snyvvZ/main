import React from "react";
import visualData from "../../data/visualData";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const VisualSwiper = ({ children }) => <Swiper>{children}</Swiper>;

const StyledVisual = styled(VisualSwiper)`
  .swiper-container {
    background-color: red !important;
  }
  .swiper-slide {
    background-color: red !important;
  }
  .swiper-wrapper {
    background-color: red !important;
  }

  img {
    width: 100%;
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
