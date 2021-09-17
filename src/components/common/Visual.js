import React from "react";
import visualData from "../../data/visualData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import styled from "styled-components";
import variables from "../../styles/variables";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination]);

const VisualSwiper = ({ className, children }) => (
  <Swiper
    className={className}
    pagination={{
      dynamicBullets: true,
      clickable: true,
    }}
  >
    {children}
  </Swiper>
);

const StyledVisual = styled(VisualSwiper)`
  img {
    width: 100%;
  }

  .swiper-pagination {
    bottom: 24px;
  }

  .swiper-pagination-bullet {
    background-color: ${variables.white};
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

const StyledText = styled.div`
  display: grid;
  align-items: flex-end;
  grid-template-rows: 22px auto 21px;
  width: 100%;
  height: 100%;
  padding: 40px 25px 70px 25px;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  color: ${variables.white};

  em {
    font-size: 15px;
    line-height: 22px;
  }

  strong {
    width: 220px;
    align-items: flex-end;
    padding: 75px 0 10px 0;
    font-size: 30px;
    line-height: 39px;
    word-break: keep-all;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }
`;

const Visual = () => {
  return (
    <StyledVisual>
      {visualData.contents.map((item, index) => (
        <SwiperSlide key={`${item.type} + ${index}`}>
          <img src={item.image} alt="" />
          <StyledText>
            <em>{item.type}</em>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </StyledText>
        </SwiperSlide>
      ))}
    </StyledVisual>
  );
};

export default Visual;
