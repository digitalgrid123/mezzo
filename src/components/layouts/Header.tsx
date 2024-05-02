"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { Button, Menu, MenuItem } from "@mui/material";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState({
    color: "#e4a991",
    text: "Clean",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (anchorEl === event.currentTarget) {
        setAnchorEl(null);
        setIsMenuOpen(false);
      } else {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true);
      }
    },
    [anchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  }, []);

  const handleOptionSelect = useCallback(
    (option: { color: string; text: string }) => {
      setSelectedOption(option);
      handleClose();
    },
    [handleClose]
  );

  const colorOptions = [
    { color: "#e4a991", text: "Clean" },
    { color: "#e4a991", text: "Dark" },
    { color: "#e6d7bf", text: "Bright" },
    { color: "#bcc9df", text: "Light" },
  ];

  useEffect(() => {
    setSelectedOption(
      colorOptions.find((option) => option.text === "Clean") || colorOptions[0]
    );
  }, []);

  return (
    <header className="py-3 px-4 sm:py-4 sm:px-10 bg-white border-b-2">
      <nav className="flex justify-between items-center">
        <div className="back-button flex items-center gap-1">
          <IoChevronBack className="text-xl" />
          <h6 className="text-sm sm:text-base">Back</h6>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="hidden sm:block text-sm sm:text-lg">Theme styles</h4>

          <div
            className="p-1 sm:p-2 rounded-md flex items-center gap-2 border"
            aria-controls="color-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <div
              className="w-4 h-4 sm:w-10 sm:h-10 bg-orange-300 rounded-full cursor-pointer"
              style={{ backgroundColor: selectedOption.color }}
            ></div>
            <h3 className="text-md sm:text-lg">{selectedOption.text}</h3>
            {isMenuOpen ? (
              <RiArrowDropUpLine className="text-xl" />
            ) : (
              <RiArrowDropDownLine className="text-xl" />
            )}
            <Menu
              id="color-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {colorOptions.map((option) => (
                <MenuItem
                  className="flex items-center gap-3"
                  key={option.text}
                  onClick={() => handleOptionSelect(option)}
                >
                  <div
                    className="w-4 h-4 sm:w-6 sm:h-6 rounded-full sm:text-xs"
                    style={{ backgroundColor: option.color }}
                  ></div>
                  {option.text}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
        <div>
          <Button
            className="bg-[#008060] text-xs sm:text-base font-semibold capitalize"
            variant="contained"
          >
            Try Theme
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
