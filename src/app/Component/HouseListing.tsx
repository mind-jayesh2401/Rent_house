"use client";
import React, { Fragment, useEffect } from "react";
import Section from "../SubComponent/Section";
import Div from "../SubComponent/Div";
import { SET_BANNERCARD_DATA } from "@/redux/actions/bannerCardAcrion";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

function HouseListing() {
  const dispatch = useDispatch();
  const bannerCardData = useSelector(
    (state: any) => state.bannerCardReducer.bannerCard
  );

  useEffect(() => {
    dispatch({
      type: SET_BANNERCARD_DATA,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: false,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
  };

  const SettingBanner = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Section className="w-full px-5 py-2 text-black overflow-hidden mt-4 ParentList">
      <Slider {...SettingBanner}>
        {bannerCardData?.map((e: any) => {
          return (
            <Div
              className=" border-gray-400 rounded-2xl bg-gray-200 p-2 max-w-[350px] w-full relative "
              key={e.id}
            >
              <Div className="w-full HouseList">
                <Slider {...settings}>
                  {e?.collectionImages?.map((f: any) => {
                    return (
                      <Fragment key={f.id}>
                        <div className="outline-none focus:outline-none border-none">
                          <img
                            src={f?.imageUrl}
                            alt="rooms"
                            className="rounded-2xl object-cover"
                          />
                        </div>
                      </Fragment>
                    );
                  })}
                </Slider>
              </Div>

              <Div className="h-full w-full">
                <Div className="flex justify-between px-1">
                  <h3 className="text-lg font-bold ">{e.heading}</h3>
                  <h3 className="text-lg font-bold text-gray-800 ">
                    ${e.price}
                  </h3>
                </Div>
                <p className="font-serif text-base py-2 px-1">
                  Description of rooms comes here which give info of what what
                  it have .
                </p>
              </Div>
            </Div>
          );
        })}
      </Slider>
    </Section>
  );
}

export default HouseListing;
