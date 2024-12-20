// import { StyledImg } from "./Reviews.style"
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; 
// import 'swiper/css';
// import People1 from '../../assets/p1.webp'
// import People2 from '../../assets/p2.webp'
// import People3 from '../../assets/p3.webp'
// import People4 from '../../assets/p4.webp'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// export default function Reviews(){
//     return(
//         <>
//         <Swiper
//       spaceBetween={10} 
//       slidesPerView={3} 
//       loop={true} 
//       autoplay={{ delay: 3000 }}
//       pagination={{ clickable: true }}
//       modules={[Autoplay, Pagination, Navigation]}
     
//     >
//       <SwiperSlide>
//        <div><p>Олена</p> <StyledImg src={People1} alt="olena"/> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odio, architecto soluta quisquam, voluptatibus excepturi!</p></div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div><p>Газа</p> <StyledImg src={People2} alt="gaza" /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odio, architecto soluta quisquam, voluptatibus excepturi!</p></div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div><p>Анатолій</p> <StyledImg src={People3} alt="tolik" /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odio, architecto soluta quisquam, voluptatibus excepturi!</p></div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div><p>Віра</p> <StyledImg src={People4} alt="vera" /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odio, architecto soluta quisquam, voluptatibus excepturi!</p></div>
//       </SwiperSlide>
//     </Swiper>
//         </>
//     )
// } цей верхній закоментований варіант був зроблений за допомогою swiper, видаляти було шкода, тому закоментувала :)

import { useEffect, useState } from "react";
import { NextButton, PrevButton, Slide, SlideImage, SlideName, SliderContainer, SlideText, SlideTitle, SlideTrack } from "./Reviews.style"
import People1 from '../../assets/p1.webp'
import People2 from '../../assets/p2.webp'
import People3 from '../../assets/p3.webp'
import People4 from '../../assets/p4.webp'

export default function Reviews()  {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [{ name: "Олена", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: People1 },
    { name: "Газа", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: People2 },
    { name: "Анатолій", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: People3 },
    { name: "Віра", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: People4 },];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <SliderContainer id="reviews">
      <SlideTitle>Відгуки наших клієнтів</SlideTitle>
      <SlideTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideImage src={slide.image} alt={`slide-${index}`} />
            <SlideName>{slide.name}</SlideName>
            <SlideText>{slide.text}</SlideText>
          </Slide>
        ))}
      </SlideTrack>
      <PrevButton onClick={prevSlide}>⟨</PrevButton>
      <NextButton onClick={nextSlide}>⟩</NextButton>
    </SliderContainer>
  );
};


