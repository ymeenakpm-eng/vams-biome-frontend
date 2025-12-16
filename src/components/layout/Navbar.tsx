"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { getStoredCartId } from "@/lib/cart-client";
import { getCart } from "@/lib/medusa-cart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

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

  // Load current cart item count from Medusa, if a cart exists
  useEffect(() => {
    const id = getStoredCartId();
    if (!id) return;

    const loadCartCount = async () => {
      try {
        const cart = await getCart(id);
        const items = cart?.items ?? [];
        const totalQty = items.reduce(
          (sum: number, item: any) => sum + (item.quantity ?? 0),
          0
        );
        setCartItemCount(totalQty);
      } catch {
        // ignore cart errors in navbar badge
      }
    };

    void loadCartCount();
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo (mobile) */}
          <div className="flex-shrink-0 flex items-center lg:hidden">
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
          <div className="hidden lg:block flex-1">
            <div className="flex flex-nowrap items-center leading-tight text-base lg:text-lg xl:text-xl min-w-0">
              {/* Left side (logo + menu): constrained so it can't overlap the right utilities */}
              <div className="flex min-w-0 flex-1 items-center">
                {/* Logo (must never shrink or clip) */}
                <div className="flex-shrink-0 overflow-visible">
                  <Link href="/" className="flex items-center gap-3">
                    <span className="relative h-8 w-auto overflow-visible">
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

                {/* Menu area (scrolls instead of pushing logo out) */}
                <div className="min-w-0 flex-1 pl-6">
                  <div className="no-scrollbar flex min-w-0 flex-nowrap items-center gap-5 xl:gap-7 overflow-x-auto">
                    <Link href="/" className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="/tests" className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors">
                      Shop
                    </Link>
                    <Link
                      href="/how-it-works"
                      className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors"
                    >
                      How It Works
                    </Link>
                    <Link
                      href="/ai/report"
                      className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors"
                    >
                      AI Report Demo
                    </Link>
                    <Link
                      href="/science"
                      className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors"
                    >
                      The Science
                    </Link>
                    <Link
                      href="/professionals"
                      className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors"
                    >
                      Professionals
                    </Link>
                    <Link href="/blog" className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: contact + account + cart + primary CTA */}
              <div className="ml-auto flex flex-shrink-0 flex-nowrap items-center gap-3 xl:gap-4">
                <Link href="/about" className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="whitespace-nowrap text-gray-700 hover:text-primary transition-colors">
                  Contact Us
                </Link>

                {/* Utility / account dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setAccountOpen((prev) => !prev)}
                    className="flex items-center gap-1 whitespace-nowrap text-gray-700 hover:text-primary transition-colors"
                  >
                    <span>My dashboard</span>
                    <span className="text-sm">▼</span>
                  </button>
                  {accountOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5 text-lg">
                      <Link
                        href="/login"
                        className="block px-3 py-1.5 text-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => setAccountOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="block px-3 py-1.5 text-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => setAccountOpen(false)}
                      >
                        Register
                      </Link>
                      <Link
                        href="/track-kit"
                        className="block px-3 py-1.5 text-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => setAccountOpen(false)}
                      >
                        Track kit
                      </Link>
                      <Link
                        href="/activate-kit"
                        className="block px-3 py-1.5 text-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => setAccountOpen(false)}
                      >
                        Activate kit
                      </Link>
                    </div>
                  )}
                </div>

                {/* Cart link with item count, styled like Amazon-style cart */}
                <Link
                  href="/cart"
                  className="relative flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <span className="relative inline-flex items-center justify-center">
                    {/* Count just above cart icon, in VAMS BIOME green */}
                    {cartItemCount > 0 && (
                      <span className="absolute -top-3 text-lg font-extrabold text-emerald-500">
                        {cartItemCount}
                      </span>
                    )}

                    {/* Larger cart outline icon */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-14 w-16 text-slate-800"
                    >
                      <path
                        d="M4 5h3l2 9h9l2-6H9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="11" cy="19" r="1.8" fill="currentColor" />
                      <circle cx="18" cy="19" r="1.8" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="-ml-2 text-lg font-semibold">Cart</span>
                </Link>

                {/* Primary CTA */}
                <Link
                  href="/tests"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Start with a kit
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tests"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/ai/report"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              AI Report Demo
            </Link>
            <Link
              href="/science"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              The Science
            </Link>
            <Link
              href="/professionals"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Professionals
            </Link>
            <Link
              href="/guides"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              My dashboard
            </Link>
            <Link
              href="/track-kit"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Track kit
            </Link>
            <Link
              href="/activate-kit"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Activate kit
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 rounded-md text-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/tests"
              className="block px-3 py-2 text-center text-lg text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
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