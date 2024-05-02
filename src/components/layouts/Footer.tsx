// components/layout/Footer.tsx
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#424242] pl-16">
      <div className="flex gap-10 justify-between">
        <div className="flex flex-col ">
          <h1 className="text-6xl text-white font-thin pt-20">MEZZO</h1>
          <div className="flex  justify-between gap-28 mt-4">
            <div>
              <ul>
                <li className="text-white text-lg font-tenor p-1">
                  Collections
                </li>
                <li className="text-white text-lg font-tenor p-1">Fringe</li>
                <li className="text-white text-lg font-tenor p-1">Shoreside</li>
                <li className="text-white text-lg font-tenor p-1">Wayfarer</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-white text-lg font-tenor p-1">
                  Helpful links
                </li>
                <li className="text-white text-lg font-tenor p-1">About Us</li>
                <li className="text-white text-lg font-tenor p-1">
                  Our Locations
                </li>
                <li className="text-white text-lg font-tenor p-1">
                  Mezzo News
                </li>
                <li className="text-white text-lg font-tenor p-1">
                  Contact Us
                </li>
                <li className="text-white text-lg font-tenor p-1">
                  Theme feature
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-base text-white font-semibold">
                This is a Demo
              </h6>
              <p className="text-base font-tenor font-normal text-white mt-1">
                This store is a demo of the pipeline theme. <br /> The producst
                from this store are from the catalog of <br />
                <span className="underline cursor-pointer"> Brochu Walker</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-96">
            <img
              src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/210128_BW_PF21_S219059.jpg?v=1671215731&width=3000"
              alt="footer-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-28 py-24 relative">
            <h5 className="text-base text-white">Our Weekly newsletter</h5>
            <h1 className="text-6xl text-white mt-2 font-thin">
              Skip to the details
            </h1>
            <p className="text-white text-base mt-2">
              Join to get special offers, free giveaways, and once-in-a-lifetime
              deals.
            </p>
            <div className="relative mt-3">
              <input
                className="bg-transparent w-full border-b-2 p-2 pr-10 focus:outline-none caret-white"
                type="email"
                placeholder="your-email@gmail.com"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                <FaArrowRightLong className="text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
