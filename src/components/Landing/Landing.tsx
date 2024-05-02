"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

import DropdownMenu from "../DropdownContent/DropdownMenu";
import DropdownMenuBook from "../DropdownContent/DropdownMenuBook";

const Landing: React.FC = () => {
  const [showShopText, setShowShopText] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showDropdownBook, setShowDropdownBook] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("gbp");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showContactDropdown, setShowContactDropdown] =
    useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slidingScreenRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      slidingScreenRef.current &&
      !slidingScreenRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let dropdownTimer: ReturnType<typeof setTimeout>;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    dropdownTimer = setTimeout(() => {
      setShowDropdown(true);
    }, 200); // Adjust the delay as needed
  };

  const handleMouseLeave = () => {
    clearTimeout(dropdownTimer);
    setShowDropdown(false);
  };

  const handleMouseEnterBook = () => {
    clearTimeout(dropdownTimer);
    dropdownTimer = setTimeout(() => {
      setShowDropdownBook(true);
    }, 200); // Adjust the delay as needed
  };

  const handleMouseLeaveBook = () => {
    clearTimeout(dropdownTimer);
    setShowDropdownBook(false);
  };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    setShowDropdown(false); // Close the dropdown after selection
  };

  const handleMouseEnterContact = () => {
    setShowContactDropdown(true);
  };

  // Function to handle mouse leave on Contact
  const handleMouseLeaveContact = () => {
    setShowContactDropdown(false);
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

  return (
    <>
      <section
        className={`relative bg-cover ${
          isMobile ? "bg-center" : ""
        }   bg-no-repeat w-full sm:h-[calc(100vh_-_350px)] h-[calc(100vh_-_410px)]`}
        style={{
          backgroundImage:
            'url("https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/clothing-hero-flipped.jpg?v=1666145888")',
        }}
      >
        <div
          className={` relative z-50 ${
            showDropdown || showDropdownBook ? "bg-slate-100 " : ""
          } flex items-center justify-between w-full pt-1 px-4 pb-1 sm:pt-2 sm:px-10 sm:pb-2 border-b-[0.5px]`}
        >
          <div className="flex">
            <h2
              className={`${
                showDropdown || showDropdownBook ? "text-black" : "text-white"
              } text-[12px] sm:text-sm`}
            >
              <span> Fall collection is out now</span>
            </h2>
            <span
              className={`${
                showDropdown || showDropdownBook ? "text-black" : "text-white"
              } ml-1 mr-1 text-[12px] sm:text-sm`}
            >
              |
            </span>
            <div
              className="relative"
              onMouseEnter={() => setShowShopText(true)}
              onMouseLeave={() => setShowShopText(false)}
            >
              <h2
                className={`${
                  showDropdown || showDropdownBook
                    ? "text-black "
                    : "text-white"
                } text-[12px] sm:text-sm ${
                  showShopText
                    ? "transition-all duration-1000 disappearing-underline"
                    : "border-b-[1px] cursor-pointer"
                }`}
              >
                {isMobile ? (
                  <span>Shop Collection</span>
                ) : (
                  <span>Shop our fall collection</span>
                )}
              </h2>
              {showShopText && (
                <h2 className="absolute right-0 border bg-white text-sm top-6">
                  Fall 2024
                </h2>
              )}
            </div>
          </div>
          <div className="relative">
            <div
              className={`bg-transparent border-none ${
                showDropdown || showDropdownBook ? "text-black" : "text-white"
              }  text-[12px] sm:text-sm cursor-pointer flex items-center gap-1`}
              onClick={toggleDropdown}
            >
              {selectedCurrency === "gbp" &&
                (isMobile ? "UK (£)" : "United Kingdom (£)")}
              {selectedCurrency === "usd" &&
                (isMobile ? "US ($)" : "United States ($)")}
              {selectedCurrency === "eur" &&
                (isMobile ? "EU (€)" : "European Union (€)")}

              {isDropdownOpen ? (
                <RiArrowDropUpLine className="text-2xl" />
              ) : (
                <RiArrowDropDownLine className="text-2xl" />
              )}
            </div>
            {isDropdownOpen && (
              <div
                className={`absolute mt-2 py-2 bg-white border border-gray-200 rounded w-full transition-all ${
                  isMobile ? "sm:hidden" : "hidden sm:block"
                }`}
              >
                <div
                  className="cursor-pointer text-sm text-[#524C42] px-2 py-2 hover:bg-gray-200"
                  onClick={() => handleCurrencyChange("gbp")}
                >
                  {isMobile ? "UK (£)" : "United Kingdom (£)"}
                </div>
                <div
                  className="cursor-pointer text-sm text-[#524C42] px-2 py-2 hover:bg-gray-200"
                  onClick={() => handleCurrencyChange("usd")}
                >
                  {isMobile ? "US ($)" : "United States ($)"}
                </div>
                <div
                  className="cursor-pointer text-sm text-[#524C42] px-2 py-2 hover:bg-gray-200"
                  onClick={() => handleCurrencyChange("eur")}
                >
                  {isMobile ? "EU (€)" : "European Union (€)"}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="sm:block hidden">
          <div className="header-landing relative z-50 px-10 flex justify-between pt-2">
            <div>
              <h2
                className={`text-4xl ${
                  showDropdown || showDropdownBook ? "text-black" : "text-white"
                }  font-tenor font-thin`}
              >
                MEZZZO
              </h2>
            </div>
            <div className="flex">
              <ul className="flex gap-16 items-center">
                <li
                  className={`${
                    showDropdown || showDropdownBook
                      ? showDropdown
                        ? "text-black animated-underline"
                        : "text-black"
                      : "text-white"
                  } text-sm uppercase  cursor-pointer`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Shop
                </li>
                <li
                  className={`${
                    showDropdown || showDropdownBook
                      ? showDropdownBook
                        ? "text-black animated-underline"
                        : "text-black"
                      : "text-white"
                  } text-sm uppercase  cursor-pointer`}
                  onMouseEnter={handleMouseEnterBook}
                  onMouseLeave={handleMouseLeaveBook}
                >
                  LookBook
                </li>
                <li
                  className={`${
                    showDropdown || showDropdownBook
                      ? "text-black"
                      : "text-white"
                  } text-sm uppercase  cursor-pointer`}
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                >
                  Contact
                  {showContactDropdown && (
                    <div className="absolute mt-2 py-4 px-4  bg-white border border-gray-200 rounded transition-all">
                      <div className="cursor-pointer text-sm font-tenor text-[#524C42] px-2 py-2 hover:bg-gray-200">
                        Our Location
                      </div>
                      <div className="cursor-pointer text-sm font-tenor text-[#524C42] px-2 py-2 hover:bg-gray-200">
                        Contact US
                      </div>
                      <div className="cursor-pointer text-sm font-tenor text-[#524C42] px-2 py-2 hover:bg-gray-200">
                        About US
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className={`${
                    showDropdown || showDropdownBook
                      ? "text-black"
                      : "text-white"
                  } text-sm uppercase  cursor-pointer`}
                >
                  News
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <BsPerson
                className={`text-2xl  cursor-pointer ${
                  showDropdown || showDropdownBook ? "text-black" : "text-white"
                }`}
              />
              <IoSearch
                className={`text-2xl  cursor-pointer ${
                  showDropdown || showDropdownBook ? "text-black" : "text-white"
                }`}
              />
              <CiShoppingCart
                className={`text-2xl  cursor-pointer ${
                  showDropdown || showDropdownBook ? "text-black" : "text-white"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden block">
          <div className="flex items-center justify-between px-4 py-1">
            <button
              className=" cursor-pointer text-2xl text-white"
              onClick={toggleMenu}
            >
              ☰
            </button>

            <div
              ref={slidingScreenRef}
              className={`fixed top-0 left-0 w-4/5 h-full bg-white shadow-md z-10 transition-transform transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <nav className="mt-16">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-200"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-200"
                    >
                      Lookbook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-200"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h2
                className={`text-4xl sm:text-4xl text-white font-tenor font-thin`}
              >
                MEZZO
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <CiShoppingCart
                className={`text-2xl cursor-pointer text-white`}
              />
            </div>
          </div>
        </div>

        <div className="landing-content relative z-50 overflow-hidden  h-5/6 flex justify-center flex-col">
          <h6 className=" text-base sm:text-xl text-white text-center">
            A CONCIOUS WARDROBE
          </h6>
          <h1 className="text-xl sm:text-6xl text-white font-tenor text-center uppercase mt-2 sm:mt-4">
            TIMELESS STYLE SUSTAINABLE <br /> DESIGN
          </h1>
          <div className="flex justify-center mt-3 gap-4 sm:gap-8">
            <button className="bg-white text-sm px-2 py-2 sm:px-16 sm:py-5 uppercase">
              View Products
            </button>
            <button className="bg-transparent  text-white p-2  text-sm px-2 py-2 sm:px-16 sm:py-5 uppercase">
              Learn More
            </button>
          </div>
        </div>
        <DropdownMenu showDropdown={showDropdown} />
        <DropdownMenuBook showDropdownBook={showDropdownBook} />
      </section>
    </>
  );
};

export default Landing;
