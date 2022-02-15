import styled from "@emotion/styled";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  /* overflow: hidden; */
  background-color: black;
  padding: 5px 150px 150px 150px;
`;
const SliderContents = styled.div`
  /* width: 100%;
  height: 100%; */

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
`;
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;
const CarouselSlider = styled(Slider)`
  width: 100%;
  height: 300px;

  div {
    width: 100%;
    height: 100%;
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: gold;
  }
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Wrapper>
      <CarouselSlider {...settings}>
        <SliderContents>
          <BannerImage src="/img/lostarkbanner/bannerImg1.jpg" />
        </SliderContents>
        <SliderContents>
          <BannerImage src="/img/lostarkbanner/bannerImg2.jpg" />
        </SliderContents>
        <SliderContents>
          <BannerImage src="/img/lostarkbanner/bannerImg3.jpg" />
        </SliderContents>
        <SliderContents>
          <BannerImage src="/img/lostarkbanner/bannerImg4.jpg" />
        </SliderContents>
        <SliderContents>
          <BannerImage src="/img/lostarkbanner/bannerImg5.jpg" />
        </SliderContents>
        <SliderContents>
          <BannerImage src="/img/lostarkbanner/bannerImg6.jpg" />
        </SliderContents>
      </CarouselSlider>
    </Wrapper>
  );
}
