// components/layout/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#424242]">
      <div className="flex gap-10">
        <div className="flex flex-col gap-16">
          <h1 className="text-6xl text-white font-thin ">MEZZO</h1>
          <div className="flex  justify-between gap-28">
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
                This store is a demo of the pipeline theme. The producst from
                this store are from the catalog of
                <span> Brochu Walker</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[34rem]">
            <img
              src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/210128_BW_PF21_S219059.jpg?v=1671215731&width=3000"
              alt="footer-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-28 py-24">
            <h5 className="text-base text-white">Our Weekly newsletter</h5>
            <h1 className=" text-6xl text-white mt-2 font-thin">
              Skip to the details
            </h1>
            <p className="text-white text-base">
              Join to get special offers, free giveaways, and once-in-a-lifetime
              deals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
