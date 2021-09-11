import React from "react";
import visualData from "../../data/visualData";
import { Swiper, SwiperSlide } from "swiper/react";

const Visual = () => {
  return (
    <Swiper>
      {visualData.contents.map((item, index) => (
        <SwiperSlide key={`${item.type} + ${index}`}>
          <strong>{item.title}</strong>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Visual;
