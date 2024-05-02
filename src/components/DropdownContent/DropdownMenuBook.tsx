import React from "react";
const Fade = require("react-reveal/Fade");
const Slide = require("react-reveal/Slide");

interface DropdownMenuBookProps {
  showDropdownBook: boolean;
}

const DropdownMenuBook: React.FC<DropdownMenuBookProps> = ({
  showDropdownBook,
}) => {
  const dropdownClass = `pb-10 bg-white px-10 flex items-start absolute top-0 w-full pt-32 flex-row justify-between gap-10 transition-all duration-300 ${
    showDropdownBook
      ? "opacity-100 scale-100 translateY-0"
      : "opacity-0 scale-95 translateY-[-100%] pointer-events-none"
  }`;
  return (
    <>
      {showDropdownBook && (
        <div className={dropdownClass}>
          <Fade top>
            <div>
              <h1 className="text-2xl font-tenor mb-2">Friange</h1>
              <h1 className="text-2xl font-tenor mb-2">ShoreSide</h1>
              <h1 className="text-2xl font-tenor mb-2">Wayfarer</h1>
            </div>
          </Fade>
          <div className="flex items-center gap-16">
            <Slide top>
              <div className="w-80 h-80 overflow-hidden relative cursor-pointer">
                <img
                  src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-look-85.jpg?v=1638651513&width=4000"
                  alt="Clothing Look 77"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
                  Friange
                </span>
                <button className="absolute bg-white top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 text-black text-sm ">
                  View LookBook
                </button>
              </div>
            </Slide>
            <Slide top>
              <div className="w-80 h-80 overflow-hidden relative cursor-pointer">
                <img
                  src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-look-18.jpg?v=1638651514&width=4000"
                  alt="Clothing Look 77"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
                  ShoreSide
                </span>
                <button className="absolute bg-white top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 text-black text-sm ">
                  View LookBook
                </button>
              </div>
            </Slide>
            <Slide top>
              <div className="w-80 h-80 overflow-hidden relative cursor-pointer">
                <img
                  src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-look-61.jpg?v=1638651514&width=4000"
                  alt="Clothing Look 77"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
                  Wayfarer
                </span>
                <button className="absolute bg-white top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 text-black text-sm ">
                  View LookBook
                </button>
              </div>
            </Slide>
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenuBook;
