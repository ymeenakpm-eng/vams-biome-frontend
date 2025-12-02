"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-6 w-auto -mt-1">
                <Image
                  src="/images/logo-vams-biome-v2.png.png"
                  alt="VAMS Biome logo"
                  width={120}
                  height={32}
                  className="object-contain"
                  priority
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/well" className="text-gray-700 hover:text-primary transition-colors">
                Shop
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/ai/report"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                AI Report Demo
              </Link>
              <Link href="/science" className="text-gray-700 hover:text-primary transition-colors">
                The Science
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact Us
              </Link>

              {/* Utility / account dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setAccountOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-gray-700 hover:text-primary text-sm transition-colors"
                >
                  <span>My dashboard</span>
                  <span className="text-[10px]">▼</span>
                </button>
                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
                    <Link
                      href="/login"
                      className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                      onClick={() => setAccountOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                      onClick={() => setAccountOpen(false)}
                    >
                      Register
                    </Link>
                    <Link
                      href="/admin"
                      className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                      onClick={() => setAccountOpen(false)}
                    >
                      Admin login
                    </Link>
                  </div>
                )}
              </div>

              {/* Primary CTA */}
              <Link
                href="/well"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Start with a kit
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/well"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/ai/report"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              AI Report Demo
            </Link>
            <Link
              href="/science"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              The Science
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              My dashboard
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Admin login
            </Link>
            <Link
              href="/well"
              className="block px-3 py-2 text-center text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Start with a kit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}