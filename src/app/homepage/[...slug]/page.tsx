"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_BANNERCARD_DATA } from "@/redux/actions/bannerCardAcrion";

const Page = () => {
  const [popup, setPopup] = useState(false);
  const [selectedYear, setSelectedYear] = useState(5);
  const [selectedInterestRate, setSelectedInterestRate] = useState(10);
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

  const calculateInterest = () => {
    // Add your logic to calculate interest based on the selected year and other parameters
    // For simplicity, let's assume a fixed interest rate of 10%
    const principal = data?.price * 9211; // Assuming data?.price is in USD
    const numberOfMonths = selectedYear * 12;
    const interest =
      (principal * (selectedInterestRate / 100) * selectedYear) / 2;
    return interest.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const calculateTotalAmount = () => {
    // Add your logic to calculate the total amount with interest based on the selected values and other parameters
    const principal = data?.price * 9211; // Assuming data?.price is in USD
    const numberOfMonths = selectedYear * 12;
    const interest = (principal * (selectedInterestRate / 100) * selectedYear) / 2;
    const totalAmount = principal + interest;
    return totalAmount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const handleKeyPress = (e: { key: string; }) => {
      if (e.key === "Escape" && popup) {
        setPopup(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [popup]);

  const closeModal = () => {
    setPopup(false);
  };

  const stopPropagation = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
  };

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
            {data && transactionType === "rent" ? (
              <p className="font-semibold mb-9">
                Price:{" "}
                <span className="text-green-700">
                  {(data?.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
                /
                <span className="font-medium text-xs">
                  per month<sup className=" text-red-950">*</sup>
                </span>
              </p>
            ) : (
              <div className="flex justify-between items-center  mb-9">
                <p className="font-semibold">
                  Price:{" "}
                  <span className="text-green-700">
                    {Math.trunc(data?.price * 9211).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                  <sup className=" text-red-950">*</sup>
                </p>

                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => setPopup(!popup)}
                >
                   Calculate interest
                </button>

                <div
                  id="default-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                  onClick={closeModal}
                  className={`${
                    !popup ? "hidden" : "flex"
                  } overflow-y-auto overflow-x-hidden fixed bg-[rgba(0,0,0,0.3)] top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full`}
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full"  onClick={stopPropagation}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-400">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-black  dark:text-black">
                          Calculate interest
                        </h3>
                        <button
                          type="button"
                          onClick={() => setPopup(!popup)}
                          className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="p-4 md:p-5 space-y-4 text-black">
                        <label className="block text-sm font-medium ">
                          Select Loan Term (in years):
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="30"
                          step="1"
                          value={selectedYear}
                          onChange={(e) =>
                            setSelectedYear(Number(e.target.value))
                          }
                          className="w-full"
                        />
                        <p className="text-sm font-medium ">
                          Selected Loan Term: {selectedYear} years
                        </p>

                        <label className="block text-sm font-medium ">
                          Select Interest Rate (%):
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="20"
                          step="1"
                          value={selectedInterestRate}
                          onChange={(e) =>
                            setSelectedInterestRate(Number(e.target.value))
                          }
                          className="w-full"
                        />
                        <p className="text-sm font-medium ">
                          Selected Interest Rate: {selectedInterestRate}%
                        </p>

                        <p className="text-sm font-medium ">
                          Estimated Interest: {calculateInterest()}
                        </p>
                        <p className="text-sm font-medium ">
                Estimated Total Amount: {calculateTotalAmount()}
              </p>
                      </div>
                      {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          onClick={() => setPopup(!popup)}
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
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
