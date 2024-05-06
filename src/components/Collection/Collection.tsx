"use client";
import React, { useState, useRef, useEffect } from "react";
interface ImageProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

const collectionImages1: ImageProps[] = [
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_Oriantee_TLL3596_Vermillionmulti_3.jpg?crop=center&height=1444&v=1647884239&width=1300",
    alt: "Image 1",
    name: "Andre Luxe Cashmere Shacket",
    description: "Almond Buff Melange with White",
    price: 388.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_Aryaveesweater_TLL3595_havana-marl_3.jpg?crop=center&height=1444&v=1647887164&width=1300",
    alt: "Image 1",
    name: "Andre Luxe Cashmere Shacket",
    description: "Almond Buff Melange with White",
    price: 388.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_Romaresleevelesspopover_DSP3620_Tumeric_4.jpg?crop=center&height=1444&v=1647887145&width=1300",
    alt: "Image 2",
    name: "Cashmere Neck Square",
    description: "Camel color with square neckline",
    price: 250.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_Gorjapant_DSP3188_Tumeric_3_Color-Correction.jpg?crop=center&height=1444&v=1647887108&width=1300",
    alt: "Image 3",
    name: "Lori Off Shoulder",
    description: "Astral Melange off-shoulder top",
    price: 299.99,
  },
];

const collectionImages2: ImageProps[] = [
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/pf_austintiedress_tkn3605_samoapeach_1.jpg?crop=center&height=1444&v=1639856355&width=1300",
    alt: "Image 1",
    name: "Andre Luxe Cashmere Shacket",
    description: "Almond Buff Melange with White",
    price: 388.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/pf_austintiedress_tkn3605_blanc_3.jpg?crop=center&height=1444&v=1647883775&width=1300",
    alt: "Image 1",
    name: "Andre Luxe Cashmere Shacket",
    description: "Almond Buff Melange with White",
    price: 388.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_LoweHoodie_CPV3199_Almondmelange_3.jpg?crop=center&height=1444&v=1647883681&width=1300",
    alt: "Image 2",
    name: "Cashmere Neck Square",
    description: "Camel color with square neckline",
    price: 250.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_LoweHoodie_CPV3199_Almondmelange_3.jpg?crop=center&height=1444&v=1647883681&width=1300",
    alt: "Image 3",
    name: "Lori Off Shoulder",
    description: "Astral Melange off-shoulder top",
    price: 299.99,
  },
];
const Collection: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleMouseEnter = (index: number) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };
  return (
    <>
      <section className="px-10 py-10 sm:px-32 sm:py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-black text-2xl sm:text-5xl font-tenor font">
            Curated Collections
          </h1>
          <h4 className="text-sm sm:text-base">
            Handcrafted by our expert Designers
          </h4>
        </div>
        <div
          className={`${
            isMobile ? "" : "grid grid-cols-4 grid-rows-2 grid-flow-col"
          }  gap-8 mt-28`}
        >
          {collectionImages1.map((image, index) => (
            <div
              key={index}
              className="w-full h-full overflow-hidden relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {showDropdown[index] && (
                <button className="absolute uppercase top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base bg-white px-6 py-3 ">
                  Quick Add
                </button>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <p className="text-sm font-semibold">{image.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">{image.description}</p>
                  <p className="text-xs font-semibold">
                    ${image.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div
            className={`relative row-span-2 col-span-2 bg-gray-200 mt-10 sm:mt-0`}
          >
            <img
              src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-look-44.jpg?v=1638651514&width=4000"
              alt="image_5"
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-lg font-semibold text-white sm:block hidden">
                ShoreSide Collection
              </p>
              <h1 className="uppercase text-white font-tenor font-bold text-base sm:text-2xl mt-3 text-center">
                For Love of sun and sea
              </h1>
              <button className="text-xs sm:text-base bg-white py-2 px-4  sm:py-3 sm:px-8 mt-4">
                View the LookBook
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isMobile ? "" : "grid grid-cols-4 grid-rows-2 grid-flow-col"
          }  gap-8 mt-28`}
        >
          <div
            className={`relative row-span-2 col-span-2 bg-gray-200 mt-10 sm:mt-0 sm:mb-0 mb-8`}
          >
            <img
              src="https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/web-210128-BW-PF21_S219259.jpg?v=1646112530&width=2000"
              alt="image_5"
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-lg font-semibold text-white sm:block hidden">
                Wayfarer Collection
              </p>
              <h1 className="uppercase text-white font-tenor font-bold text-base sm:text-2xl mt-3 text-center">
                Essentials for the Wonderers
              </h1>
              <button className="text-xs sm:text-base bg-white py-2 px-4  sm:py-3 sm:px-8 mt-4">
                View the LookBook
              </button>
            </div>
          </div>
          {collectionImages2.map((image, index) => (
            <div
              key={index}
              className="w-full h-full overflow-hidden relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {showDropdown[index] && (
                <button className="absolute uppercase top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base bg-white px-6 py-3 ">
                  Quick Add
                </button>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <p className="text-sm font-semibold">{image.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">{image.description}</p>
                  <p className="text-xs font-semibold">
                    ${image.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Collection;
