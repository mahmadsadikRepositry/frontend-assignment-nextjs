"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

export default function ResponsiveNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Try for Free Banner */}
      <a
        id="try-for-free-banner"
        className="lg:hidden fixed left-0 right-0 flex h-[38px] z-[60] justify-center items-center gap-8 flex-1 self-stretch bg-blue"
        href="/try-for-free"
      >
        <div className="text-[16px] font-semibold text-white flex gap-[10px]">
          Try for free here
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="w-6 h-6" 
          />
        </div>
      </a>

      {/* Main Header */}
      <header
        className={clsx(
          "fixed z-[55] transition-all duration-500 ease-in-out w-full flex flex-col gap-4 items-center px-4 py-2 lg:px-8 lg:pt-8 lg:pb-6",
          "top-[38px] lg:top-0 h-16 lg:h-[134px]"
        )}
        style={{ backgroundColor: "hsla(0, 11%, 96%, 0.85)" }}
      >
        {/* Top Bar - Desktop Only */}
        <div className="hidden lg:flex justify-end items-center gap-8 self-stretch h-[14px] w-full max-w-[1440px] mx-auto">
          <a
            className="text-lightGrey text-[20px] underline"
            href="/help-center"
          >
            Help Center
          </a>
          <a
            href="tel:6314008888"
            className="text-blue font-semibold text-[20px]"
          >
            (631) 400-8888
          </a>
        </div>

        {/* Main Navigation */}
        <nav className="w-full flex flex-row justify-between items-center self-stretch h-[48px] max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link aria-label="Go to homepage" href="/">
            <div className="relative w-[267px] h-[42px] lg:w-[293px] lg:h-[48px]">
              <Image
                alt="Answering Legal Logo"
                loading="lazy"
                decoding="async"
                fill
                style={{
                  objectFit: "contain",
                  color: "transparent",
                }}
                sizes="(max-width: 1024px) 267px, 293px"
                src="/images/Answering LegalTM_Blue.png"
              />
              <span className="sr-only">Answering Legal Home</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="flex justify-center items-start gap-2 xl:gap-8 h-[30px]">
            <div className="relative hidden lg:flex">
              <div className="group flex flex-col items-center gap-2">
                <button
                  data-dropdown-toggle="Products"
                  className="flex items-center gap-1 font-semibold text-[20px] hover:text-blue text-navyBlue"
                >
                  Products
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4 transition-transform duration-300 rotate-0"
                  />
                </button>
                <div className="h-1 rounded-[8px] bg-teal transition-all duration-300 w-0"></div>
              </div>
            </div>

            <div className="relative hidden lg:flex">
              <div className="group flex flex-col items-center gap-2">
                <button
                  data-dropdown-toggle="About"
                  className="flex items-center gap-1 font-semibold text-[20px] hover:text-blue text-navyBlue"
                >
                  About
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4 transition-transform duration-300 rotate-0"
                  />
                </button>
                <div className="h-1 rounded-[8px] bg-teal transition-all duration-300 w-0"></div>
              </div>
            </div>

            <div className="relative hidden lg:flex">
              <div className="group flex flex-col items-center gap-2">
                <button
                  data-dropdown-toggle="Resources"
                  className="flex items-center gap-1 font-semibold text-[20px] hover:text-blue text-navyBlue"
                >
                  Resources
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4 transition-transform duration-300 rotate-0"
                  />
                </button>
                <div className="h-1 rounded-[8px] bg-teal transition-all duration-300 w-0"></div>
              </div>
            </div>

            <div className="relative hidden lg:flex">
              <div className="group flex flex-col items-center gap-2">
                <a
                  data-dropdown-toggle="Pricing"
                  className="font-semibold text-[20px] hover:text-blue text-navyBlue"
                  href="/answering-service-pricing-plans"
                >
                  Pricing
                </a>
                <div className="h-1 rounded-[8px] bg-teal transition-all duration-300 w-0"></div>
              </div>
            </div>
          </div>

          {/* Desktop Right Side - Search & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <form className="hidden lg:flex items-center gap-2 relative">
              <button
                type="button"
                className="z-10 transition-all duration-700 ease-in-out"
                aria-label="Search"
              >
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={32}
                  height={33}
                  className="w-8 h-8"
                />
              </button>
            </form>
            <a
              className="px-4 gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold leading-[29.26px] text-base sm:text-[22px] overflow-hidden h-[43px] shrink-0 py-[20px] w-fit h-auto max-h-[43px] bg-blue text-white hover:bg-navyBlue"
              href="/try-for-free"
            >
              Try for free
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex lg:hidden"
                aria-label="Open mobile menu"
              >
                <Image
                  alt="Hamburger Icon"
                  loading="lazy"
                  width={59}
                  height={48}
                  decoding="async"
                  style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
                  src="https://cdn.sanity.io/images/ypwggt2k/production/16888fc003b4cb13644da7c9332010fff571035d-59x48.svg"
                />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[70]" />
              <Dialog.Content className="fixed top-[102px] bottom-0 left-0 right-0 z-[70] w-full flex flex-col bg-white">
                <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
                <div className="flex flex-col gap-6 items-start px-8 pt-[88px] bg-navyBlue text-white flex-1 overflow-y-auto">
                  <div className="w-full">
                    <button className="flex justify-between items-center w-full pb-4">
                      <h4 className="text-[24px]">Products</h4>
                      <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6" />
                    </button>
                    <div className="h-[1px] w-full bg-teal"></div>
                  </div>

                  <div className="w-full">
                    <button className="flex justify-between items-center w-full pb-4">
                      <h4 className="text-[24px]">About</h4>
                      <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6" />
                    </button>
                    <div className="h-[1px] w-full bg-teal"></div>
                  </div>

                  <div className="w-full">
                    <button className="flex justify-between items-center w-full pb-4">
                      <h4 className="text-[24px]">Resources</h4>
                      <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6" />
                    </button>
                    <div className="h-[1px] w-full bg-teal"></div>
                  </div>

                  <div className="w-full">
                    <a className="block pb-4 text-white" href="/answering-service-pricing-plans">
                      <h4 className="text-[24px]">Pricing</h4>
                    </a>
                    <div className="h-[1px] w-full bg-teal"></div>
                  </div>

                  <form className="flex lg:hidden items-center gap-2 rounded-[12px] relative w-full max-w-[364px] overflow-hidden self-center">
                    <input
                      placeholder="Search"
                      className="transition-all duration-700 ease-in-out outline-none text-lightGrey bg-white rounded-[12px] shadow-searchInput flex py-2 px-4 items-center flex-1"
                      type="text"
                    />
                    <button
                      type="submit"
                      className="z-10 transition-all duration-700 ease-in-out flex h-[48px] p-4 justify-center items-center rounded-[12px] bg-blue"
                      aria-label="Search"
                    >
                      <FontAwesomeIcon icon={faSearch} className="w-8 h-8 text-white" />
                    </button>
                  </form>
                </div>

                <div className="flex flex-col items-center gap-6 px-8 py-6 bg-navyBlue">
                  <a className="text-[20px] underline text-white" href="/support">
                    Support
                  </a>
                  <a
                    id="dynamic-number"
                    href="tel:6316869700"
                    className="text-white hover:underline text-[24px] font-semibold"
                  >
                    (631) 686-9700
                  </a>
                  <a
                    className="gap-[10px] rounded-[12px] text-center flex justify-center items-center font-semibold overflow-hidden py-[22px] px-4 w-fit h-auto max-h-[52px] text-base md:text-[24px] bg-blue text-white hover:bg-white hover:text-blue w-full"
                    href="/try-for-free"
                  >
                    Try for free
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </header>
    </>
  );
}
