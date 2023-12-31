import React, { useEffect, useState } from "react";
import Logo from "../assets/svgs/logo.svg";
import { APP_NAME } from "../constants/config";

const Footer = (props) => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-primary1 mt-8"
      style={{ overflowX: "hidden" }}
    >
      <div className="mx-auto max-w-screen-main px-4 pt-8 pb-6 sm:px-4 md:px-6 lg:px-8 lg:pt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[30%]">
            <div className="">
              <a
                className="logo text-white text-[32px] md:text-[24px] my-4 font-semibold align-middle"
                href="/"
              >
                VenueBoost
                {/* <img src={Logo} className={"w-full"} alt="logo" /> */}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-full md:w-[70%]">
            <div className="text-center sm:text-left my-6 mx-6">
              <p className="text-16 font-medium text-white">Features</p>
              <nav className="mt-6">
                <ul className="space-y-4 text-14">
                  <li>
                    <a className="text-white transition " href="/features">
                      View all features
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/features/reservations"
                    >
                      Reservations
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/features/waitlist-management"
                    >
                      Waitlist Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/features/menu-management"
                    >
                      Menu Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/features/table-management"
                    >
                      Table Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/features/staff-management"
                    >
                      Staff Management
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left my-6 mx-6">
              <p className="text-16 font-medium text-white">Who we serve</p>
              <nav className="mt-6">
                <ul className="space-y-4 text-14">
                  <li>
                    <a
                      className="text-white transition "
                      href="/who-we-serve/restaurants"
                    >
                      Restaurants
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/who-we-serve/cafes"
                    >
                      Cafes
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/who-we-serve/bistros"
                    >
                      Bistros
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/who-we-serve/bars"
                    >
                      Bars
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/who-we-serve/pub-and-clubs"
                    >
                      Pub and Clubs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left my-6 mx-6">
              <p className="text-16 font-medium text-white">Pricing</p>
              <nav className="mt-6">
                <ul className="space-y-4 text-14">
                  <li>
                    <a
                      className="text-white transition  "
                      href="/pricing-plans"
                    >
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition  "
                      href="/pricing-plans/add-ons"
                    >
                      Add-ons
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left my-6 mx-6">
              <p className="text-16 font-medium text-white">Resources</p>
              <nav className="mt-6">
                <ul className="space-y-4 text-14">
                  <li>
                    <a className="text-white transition " href="/resources">
                      View all resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/resources/faqs"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/resources/customer-hub"
                    >
                      Customer Hub
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/resources/success-stories"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition "
                      href="/resources/tools-guides"
                    >
                      Tools/Guides
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left my-6 mx-6">
              <p className="text-16 font-medium text-white">Company</p>
              <nav className="mt-6">
                <ul className="space-y-4 text-14">
                  <li>
                    <a className="text-white transition " href="/about-us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-white transition " href="/contact-us">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="text-white transition " href="/get-started">
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a className="text-white transition " href="/blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr className={`bg-[] my-8`} />
        <div className="flex flex-col items-start lg:items-end	 lg:flex-row">
          <div className="w-full lg:w-[80%] flex flex-wrap justify-start text-white text-12 text-left">
            <a href="/terms-conditions" className="mr-5">
              Terms &amp; conditions
            </a>
            <a href="/privacy-policy-b2b" className="mr-5">
              Privacy Notice
            </a>
            <a href="/b2b-cookie-policy" className="mr-5">
              Cookie Notice
            </a>
            <a href="/sitemap" className="mr-5">
              Sitemap
            </a>
            <p className="my-5">
              © 2022 RestaurantDiary.com limited. All Rights Reserved.
              Registered in the UK: Company No. SC258100: Registered Office: 3rd
              Floor, 36 Renfield Street, Glasgow, G2 1LU
            </p>
          </div>

          <div className="w-full lg:w-[20%] flex lg:justify-end">
            <ul className="flex flex-row gap-4">
              <a href="https://www.facebook.com/" target="_blank">
                <span
                  id="hs_cos_wrapper_Footer_"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="icon"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 264 512"
                    aria-hidden="true"
                  >
                    <g id="facebook-f1_layer">
                      <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                    </g>
                  </svg>
                </span>
              </a>

              <a href="https://twitter.com/" target="_blank">
                <span
                  id="hs_cos_wrapper_Footer_"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="icon"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <g id="twitter2_layer">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </g>
                  </svg>
                </span>
              </a>

              <a href="https://www.youtube.com/" target="_blank">
                <span
                  id="hs_cos_wrapper_Footer_"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="icon"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    aria-hidden="true"
                  >
                    <g id="youtube3_layer">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </g>
                  </svg>
                </span>
              </a>

              <a href="https://www.linkedin.com/company/" target="_blank">
                <span
                  id="hs_cos_wrapper_Footer_"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="icon"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <g id="linkedin-in4_layer">
                      <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                    </g>
                  </svg>
                </span>
              </a>

              <a href="https://www.instagram.com/" target="_blank">
                <span
                  id="hs_cos_wrapper_Footer_"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="icon"
                >
                  <svg
                    className="w-5 h-5 fill-white"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <g id="instagram5_layer">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </g>
                  </svg>
                </span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
