"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_BANNERCARD_DATA } from "@/redux/actions/bannerCardAcrion";

const Page = () => {
  const { slug }: { slug: string[] } = useParams();
  const dispatch = useDispatch();
  const bannerCardData = useSelector(
    (state: any) => state.bannerCardReducer.bannerCard
  );
  const [houseId, transactionType] = slug;

  useEffect(() => {
    dispatch({
      type: SET_BANNERCARD_DATA,
    });
  }, []);

  const data = bannerCardData?.filter((e: any) => e.id === Number(houseId))[0];

  return (
    <div className="grid grid-cols-2 bg-white text-black">
      <div className="min-h-screen h-full flex flex-col justify-center items-center">
        <div>
          <div className="flex items-center">
            <span className="w-9 border-b-yellow-500 border-b mr-1"> </span>
            <h3 className=" text-yellow-500 capitalize">
              Ready to {transactionType}
            </h3>
          </div>
          <h2 className="font-semibold text-3xl mb-4 mt-2 text-black capitalize ml-10">
            Let’s tour and see our house!
          </h2>
          <p className="ml-10 w-96 text-sm text-slate-400 mb-5">
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </p>
          <div className="ml-10 w-96 text-slate-600 border-b">
            <h3 className="mb-4  font-semibold">House Detail</h3>
            <div className="grid grid-cols-2 gap-y-4 mb-5">
              <p>4 Bedrooms</p>
              <p>2 Bathrooms</p>
              <p>1 Carpet</p>
              <p>2 Floors</p>
            </div>
            {data&& transactionType === "rent" ? (
              <p className="font-semibold mb-9">
              Price: <span className="text-green-700">{(data?.price).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</span>
             /<span className="font-medium text-xs">per month<sup className=" text-red-950">*</sup></span>
            </p>
            ) : (
              <p className="font-semibold mb-9">
                Price: <span className="text-green-700">{Math.trunc((data?.price)*9211).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</span>
                <sup className=" text-red-950">*</sup>
              </p>
            )}
          </div>
          <div className="flex items-center">
            <img className="mt-4" src="/seller.png" alt="seller" />
            <div className="font-medium mr-16">
              <p>Dianne Russell</p>
              <p className="text-sm text-slate-400 ">Manager Director</p>
            </div>
            <button className="bg-green-500 rounded-full px-4 py-2 text-yellow-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen h-full flex justify-center items-center pr-24">
        <div className="flex w-3/4 h-2/4">
          {data && (
            <img className="" src={data.imageUrl} alt="selected house" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
