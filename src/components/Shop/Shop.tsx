"use client";

import React, { useState, useRef, useEffect } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface ImageProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

// Define different sets of products for each tab
const cashmereImages: ImageProps[] = [
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/Andre-Luxe-Cashmere-Shacket_LUX3697_Lt.Chia-Melange_3.jpg?crop=center&height=722&v=1639890288&width=650",
    alt: "Image 1",
    name: "Andre Luxe Cashmere Shacket",
    description: "Almond Buff Melange with White",
    price: 388.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/Andre-Luxe-Cashmere-Shacket_LUX3697_Lt.Chia-Melange_3.jpg?crop=center&height=722&v=1639890288&width=650",
    alt: "Image 1",
    name: "Andre Luxe Cashmere Shacket",
    description: "Almond Buff Melange with White",
    price: 388.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/Cashmere-Neck-Square_LUX0003_camel_2.jpg?crop=center&height=722&v=1639890315&width=650",
    alt: "Image 2",
    name: "Cashmere Neck Square",
    description: "Camel color with square neckline",
    price: 250.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/Lori-Off-Shoulder_TCR3016_AStral-Melange_4.jpg?crop=center&height=722&v=1666200848&width=650",
    alt: "Image 3",
    name: "Lori Off Shoulder",
    description: "Astral Melange off-shoulder top",
    price: 299.99,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/DEL1_DEL1__ANAISEVEE_CPD3583_OYSTERGREYMELANGE_1.jpg?crop=center&height=722&v=1639856756&width=650",
    alt: "Image 4",
    name: "Anaisevee",
    description: "Oyster Grey Melange dress",
    price: 450.0,
  },
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/Lori-Off-Shoulder_TCR3016_AStral-Melange_4.jpg?crop=center&height=722&v=1666200848&width=650",
    alt: "Image 3",
    name: "Lori Off Shoulder",
    description: "Astral Melange off-shoulder top",
    price: 299.99,
  },
];

const cottonImages: ImageProps[] = [
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_HavanaDress_JCP3622_Washed-Black-Onyx_7.jpg?crop=center&height=722&v=1647882996&width=650",
    alt: "Havana Dress",
    name: "Havana Dress",
    description: "Washed Black Onyx Dress",
    price: 250.0,
  },
  // Add more Cotton products here
];

const linenImages: ImageProps[] = [
  {
    src: "https://pipeline-theme-fashion.myshopify.com/cdn/shop/products/SU_OrianTee_TLL3596_OffWhite.jpg?crop=center&height=722&v=1639856455&width=650",
    alt: "Orian Tee",
    name: "Orian Tee",
    description: "Off-White T-Shirt",
    price: 50.0,
  },
  // Add more Linen products here
];

const tabNames = ["Cashmere", "Cotton", "Linen"];

const Shop: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Cashmere");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const imagesPerPage = isMobile ? 1 : 4;
  const transitionDuration = 0.5; // Initial transition duration

  const handleMouseEnter = (index: number) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseLeave = (index: number) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  // Define function to get the images array based on selected tab
  const getImagesByTab = (): ImageProps[] => {
    switch (selectedTab) {
      case "Cashmere":
        return cashmereImages;
      case "Cotton":
        return cottonImages;
      case "Linen":
        return linenImages;
      default:
        return [];
    }
  };

  const images = getImagesByTab();
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const newPage = Math.floor(scrollLeft / event.currentTarget.offsetWidth);
    setCurrentPage(newPage);
  };

  return (
    <section className="pt-8 sm:pt-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-black font-tenor font-normal mb-2 sm:mb-4">
          Shop Our Signature Fabrics
        </h1>
        <div className="bg-slate-300 h-[3px] w-10"></div>
      </div>
      <div className="flex justify-center mt-5 sm:mt-10 space-x-4">
        {tabNames.map((tabName) => (
          <button
            key={tabName}
            className={`text-sm sm:text-lg font-semibold ${
              selectedTab === tabName
                ? "text-gray-700 rounded-full bg-slate-200 p-2 sm:p-4"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedTab(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div className="relative mt-4 ">
        {images.length > imagesPerPage && (
          <>
            <button
              className={`hidden sm:block absolute rounded-full top-0 left-36 transform -translate-y-1/2 bg-gray-200 px-2 py-2 ${
                currentPage === 0 ? "pointer-events-none" : ""
              }`}
              disabled={currentPage === 0}
              onClick={handleClickPrev}
            >
              <MdOutlineNavigateBefore className="text-2xl" />
            </button>
            <button
              className={` hidden sm:block absolute rounded-full top-0 right-36 transform -translate-y-1/2 bg-gray-200 px-2 py-2 ${
                currentPage === totalPages - 1 ? "pointer-events-none " : ""
              }`}
              disabled={currentPage === totalPages - 1}
              onClick={handleClickNext}
            >
              <MdOutlineNavigateNext className="text-2xl" />
            </button>
          </>
        )}

        <div
          className="container mx-auto px-4 sm:px-2"
          onScroll={handleScroll}
          style={{
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
          }}
          ref={containerRef}
        >
          <div className="flex pt-14 relative">
            <div
              className="image-container flex items-center gap-10 h-80 "
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
                transition: `transform ${transitionDuration}s ease`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-72 h-full overflow-hidden relative cursor-pointer"
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
                      <p className="text-xs text-gray-500">
                        {image.description}
                      </p>
                      <p className="text-xs font-semibold">
                        ${image.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
