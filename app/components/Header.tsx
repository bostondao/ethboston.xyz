"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log("click outside");
      if ((event.target as HTMLElement).id === "toggleButton") {
        return;
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="relative w-full">
      {/* Top header: */}
      <header
        style={{ backgroundColor: `rgba(255, 247, 237)` }}
        className={`fixed z-40 w-full flex justify-between items-center p-4 sm:border-t-0 border-b-2 border-blue-1 overflow-hidden h-12`}
      >
        {/* Desktop header */}
        <div className="hidden sm:flex items-center justify-between space-x-4 w-full">
          {/* left side */}
          <div className="flex items-center">
            <Link
              href="/"
              className="uppercase text-blue-1 font-semibold hover:text-blue-2"
            >
              <img
                src="./logo-text.webp"
                alt="title"
                className="h-5 max-w-full object-contain"
              />
            </Link>
          </div>
          {/* right side */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.notion.so/ethboston2024/a1844e8d91aa4e87ad69fb11f2f928a8?v=b473a09e8d6743bca286225426311304&pvs=4"
              target="_blank"
              className="uppercase text-blue-1 font-semibold hover:text-blue-2"
            >
              Hackathon
            </Link>
            <Link
              href="https://forms.gle/BbEqmfy6K5Mkpcqt9"
              target="_blank"
              className="uppercase text-blue-1 font-semibold hover:text-blue-2"
            >
              Apply to Speak
            </Link>
            <Link
              href="/previous-speakers"
              className="uppercase text-blue-1 font-semibold hover:text-blue-2"
            >
              Previous Speakers
            </Link>
            <Link
              href="get-tickets"
              className="uppercase text-blue-1 font-semibold hover:text-blue-2"
            >
              Tickets
            </Link>
          </div>
        </div>

        {/* Mobile header */}
        <div className="sm:hidden w-full">
          {/* inner navbar */}
          <div className="flex items-center justify-between h-12 w-full">
            <Link
              href="/"
              className="uppercase text-blue-1 font-semibold hover:text-blue-2"
            >
              <img
                src="./logo-text.webp"
                alt="title"
                className="h-5 max-w-full object-contain"
              />
            </Link>
            <button
              id="toggleButton"
              onClick={() => toggleMenu()}
              className="block sm:hidden text-blue-1 font-semibold"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className={`absolute top-12 w-screen`}>
          <div
            className="flex flex-col w-full text-end pt-2 px-4 border-b-2 border-blue-1"
            style={{ backgroundColor: `rgba(255, 247, 237)` }}
          >
            <Link
              href="/"
              className="block mb-2 text-blue-1 font-semibold hover:text-blue-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="https://www.notion.so/ethboston2024/a1844e8d91aa4e87ad69fb11f2f928a8?v=b473a09e8d6743bca286225426311304&pvs=4"
              target="_blank"
              className="block mb-2 text-blue-1 font-semibold hover:text-blue-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hackathon
            </Link>
            <Link
              href="https://forms.gle/BbEqmfy6K5Mkpcqt9"
              target="_blank"
              className="block mb-2 text-blue-1 font-semibold hover:text-blue-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply to Speak
            </Link>
            <Link
              href="/previous-speakers"
              className="block mb-2 text-blue-1 font-semibold hover:text-blue-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Previous Speakers
            </Link>
            <Link
              href="/get-tickets"
              className="block text-blue-1 font-semibold mb-2 hover:text-blue-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tickets
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
