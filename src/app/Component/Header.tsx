"use client";
import React, { useState } from "react";
import Section from "../SubComponent/Section";
import Div from "../SubComponent/Div";

function Header() {
    const [isMobileMenuHidden, setIsMobileMenuHidden] = useState<boolean>(true);

  return (
    <Section className="relative">
      <nav className="bg-gray-100 w-full px-4">
        <Div className="max-w-full mx-auto">
          <Div className="flex justify-between">
            <Div className="flex">
              <Div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold">Rental Rooms</span>
                </a>
              </Div>

              <Div className={`md:flex items-center space-x-1 hidden `}>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Pricing
                </a>
              </Div>
            </Div>

            <Div
              className={`md:flex items-center space-x-1 hidden`}
            >
              <a href="" className="py-5 px-3 text-black">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </Div>

            <Div className="md:hidden flex items-center">
              <button className="mobile-menu-button"  onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </Div>
          </Div>
        </Div>

        <Div
          className={`mobile-menu py-2 ${
            isMobileMenuHidden ? "hidden" : ""
          }  md:hidden`}
        >
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 text-gray-950">
            Features
          </a>
          2<a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 text-gray-950">
            Pricing
          </a>
        </Div>
      </nav>
    </Section>
  );
}

export default Header;
