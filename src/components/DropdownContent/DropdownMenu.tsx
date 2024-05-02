import React from "react";
const Slide = require("react-reveal/Fade");
const Fade = require("react-reveal/Fade");

interface DropdownMenuProps {
  showDropdown: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ showDropdown }) => {
  const dropdownClass = `pb-10 bg-white px-10 flex items-start absolute top-0 w-full pt-32 flex-row justify-between gap-10 transition-all duration-300 ${
    showDropdown
      ? "opacity-100 scale-100 translateY-0"
      : "opacity-0 scale-95 translateY-[-100%] pointer-events-none"
  }`;

  const renderList = (title: string, items: string[]) => (
    <div className="columns-sm">
      <Fade>
        <h4 className="font-semibold uppercase leading-[0.09em] text-sm pb-1">
          {title}
        </h4>
        <hr className="bg-gray-300 h-[1px] mt-3" />
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-xs py-2 font-sans font-normal">
              {item}
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );

  return (
    <>
      {showDropdown && (
        <div className={dropdownClass}>
          {renderList("Ready-To-Wear", [
            "Bottoms",
            "Dresses",
            "Loungewear",
            "Lookers",
            "Sweaters",
            "Outerwear",
            "Activewear",
            "Formal Wear",
            "Jeans",
            "Skirts",
          ])}
          {renderList("Shoes & Accessories", [
            "Sneakers",
            "Boots",
            "Flats",
            "Heels",
            "Bags",
            "Scarves",
            "Hats",
            "Jewelry",
            "Sunglasses",
          ])}
          {renderList("Curated Edits", [
            "Best Seller",
            "Kinder to Environment",
            "New, in Navy",
            "The White Edit",
          ])}
          <div className="flex items-center gap-6">
            <Slide top>
              <div className="w-60 h-60 overflow-hidden relative cursor-pointer">
                <img
                  src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-look-77.jpg?v=1638651513"
                  alt="Clothing Look 77"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
                  New
                </span>
              </div>
              <div className="w-60 h-60 overflow-hidden relative cursor-pointer">
                <img
                  src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-look-365.jpg?v=1638651265&width=1920"
                  alt="Clothing Look 77"
                  className="w-full h-full object-cover"
                />
                <span className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl ">
                  BestSellings
                </span>
              </div>
            </Slide>
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
