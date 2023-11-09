"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import ContainerImage from "./layouts/container-image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwappingGallery({ images }) {
  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        className="rounded-2xl"
      >
        {images.map((img) => {
          return (
            <SwiperSlide key={img.path}>
              <ContainerImage
                jpgPath={img.path}
                webpPath={img.path.replace(".jpg", ".webp")}
                altText={img.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
