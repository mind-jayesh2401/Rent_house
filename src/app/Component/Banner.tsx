"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { SET_BANNER_DATA } from "@/redux/actions/bannerActions";
import Div from "../SubComponent/Div";

function Banner() {
  
  const dispatch = useDispatch();
  const bannerData = useSelector((state: any) => state.bannerReducer.banner)
  useEffect(() => {
      dispatch({
        type: SET_BANNER_DATA,
      });  
  },[]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Div>
      <Div className="w-screen overflow-hidden ">
        <Slider {...settings}>
          {bannerData?.map((item: any) => (
            <Div key={item.id} className="outline-none focus:outline-none">
              {/* <h2>{item.title}</h2> */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[300px] outline-none focus:outline-none object-cover"
              />
            </Div>
          ))}
        </Slider>
      </Div>
    </Div>
  );
}

export default Banner;
