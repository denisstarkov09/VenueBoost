import React, { useEffect, useState } from "react";
// import { Dropdown, Space } from "antd";
// import SvgDown from "../assets/svgs/chevron-down.svg";
import Logo from "../assets/svgs/logo.svg";
import Reservation from "../assets/svgs/reserv.svg";
import Waitlist from "../assets/svgs/wailist.svg";
import Menu from "../assets/svgs/menu.svg";
import Table from "../assets/svgs/table.svg";
import Staff from "../assets/svgs/staff.svg";
import Resource from "../assets/svgs/resource.svg";
import Faq from "../assets/svgs/faq.svg";
import Customerhub from "../assets/svgs/customerhub.svg";
import Success from "../assets/svgs/success.svg";
import Tool from "../assets/svgs/tools.svg";
import Restaurant from "../assets/svgs/rest.svg";
import Cafe from "../assets/svgs/coffee.svg";
import Bistros from "../assets/svgs/bistro.svg";
import Bars from "../assets/svgs/bars.svg";
import PubAndClub from "../assets/svgs/rest2.svg";

// import { APP_NAME } from "../constants/config";
import DropdownMenu from "../components/DropdownMenu";
import DropdownMenuMobile from "../components/DropdownMenuMobile";
const Header = (props) => {
  const feature_menus = [
    {
      label: "Reservations",
      url: "/features/reservations",
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
      icon: Reservation,
    },
    {
      label: "Waitlist Management",
      url: "/features/waitlist-management",
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
      icon: Waitlist,
    },
    {
      label: "Menu Management",
      url: "/features/menu-management",
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
      icon: Menu,
    },
    {
      label: "Table Management",
      url: "/features/table-management",
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
      icon: Table,
    },
    {
      label: "Staff Management",
      url: "/features/staff-management",
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
      icon: Staff,
    },
  ];

  const resource_menus = [
    {
      label: "View all resources",
      url: "/resources",
      icon: Resource,
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
    },
    {
      label: "FAQs",
      url: "/resources/faqs",
      icon: Faq,
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
    },
    {
      label: "Customer Hub",
      url: "/resources/customer-hub",
      icon: Customerhub,
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
    },
    {
      label: "Success Stories",
      url: "/resources/success-stories",
      icon: Success,
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
    },
    {
      label: "Tools/Guides",
      url: "/resources/tools-guides",
      icon: Tool,
      subtitle:
        "We have release some new features in the Veshion. Check it out now guys",
    },
  ];

  const whoweserve_menus = [
    {
      label: "Restaurants",
      url: "/who-we-serve/restaurants",
      subtitle:
        "We empower restaurants with technology to efficiently manage yield, walk-in customers, and marketing.",
      icon: Restaurant,
    },
    {
      label: "Cafes",
      url: "/who-we-serve/cafes",
      subtitle:
        "Helping Cafés reserve tables, improve forecasting, staff rostering, increase exposure, and a lot more. ",
      icon: Cafe,
    },
    {
      label: "Bistros",
      url: "/who-we-serve/bistros",
      subtitle:
        "Promote your special menu, manage tables, set a cap on reservations, take deposits and reduce no-shows.",
      icon: Bistros,
    },
    {
      label: "Bars",
      url: "/who-we-serve/bars",
      subtitle:
        "Forecast customer footfall, promote menu or offers, manage events, track staff performance, and reserve tables.",
      icon: Bars,
    },
    {
      label: "Pub and Clubs",
      url: "/who-we-serve/pub-and-clubs",
      subtitle:
        "Reach maximum guests, get bookings, and forecast the footfall to rock through the night with ResDairy.",
      icon: PubAndClub,
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header aria-label="Site Header" className="bg-white header ">
      <div className="hidden lg:block bg-secondary1 ">
        <div className="flex h-8 items-center justify-end mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-16">
          <ul className="flex items-center gap-12 text-sm">
            <li>
              <a
                className={
                  "font-medium text-black1 transition hover:text-black1/75"
                }
                href="/aboutus"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className={
                  "font-medium text-black1 transition hover:text-black1/75"
                }
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className={
                  "font-medium text-black1 transition hover:text-black1/75"
                }
                href="/product-updates"
              >
                Product Updates{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <div className="flex md:items-center md:gap-12">
            <a className="text-teal-600 flex items-center  gap-4 logo" href="/">
              <img src={Logo} className={"w-48 h-48"} alt="logo" />
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="nav flex flex-col lg:flex-row   gap-12 w-full">
              <nav aria-label="Site Nav">
                <ul className="flex flex-col justify-start lg:flex-row gap-4 lg:gap-6 text-sm">
                  <li>
                    <DropdownMenu menu={feature_menus} title="Features" />
                  </li>
                  <li>
                    <DropdownMenu
                      menu={whoweserve_menus}
                      title="Who we serve"
                    />
                  </li>
                  <li>
                    <a
                      className={
                        "text-18 h-20 font-medium align-middle text-black1 transition hover:text-black1/75"
                      }
                      href="/pricing-plans"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <DropdownMenu menu={resource_menus} title="Resources" />
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4 w-full justify-center">
                <div className="flex flex-col xs:flex-row gap-4 justify-center">
                  <div className="flex">
                    <a
                      className="w-full rounded-md bg-primary1 px-2 lg:px-4 py-2 text-center text-16 font-medium text-white shadow"
                      href="/get-started"
                      style={{ lineHeight: "190%" }}
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="flex">
                    <a
                      className="w-full rounded-md border-2 border-primary1 bg-white text-center px-2 lg:px-4 py-2 text-16 font-medium  text-primary1"
                      href="https://admin.venueboost.eu/"
                      style={{ lineHeight: "160%" }}
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isNavOpen && (
            <div className="flex flex-col gap-12 w-full header-menu-mobile p-0 m-0 bg-gray-100">
              <nav aria-label="Site Nav">
                <ul className="flex flex-col gap-4 text-sm">
                  <li>
                    <DropdownMenuMobile menu={feature_menus} title="Features" />
                  </li>
                  <li>
                    <DropdownMenuMobile
                      menu={whoweserve_menus}
                      title="Who we serve"
                    />
                  </li>
                  <li>
                    <a
                      className={
                        "text-18 m-4 mx-6 font-medium align-start text-black1 transition hover:text-black1/75"
                      }
                      href="/pricing-plans"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <DropdownMenuMobile
                      menu={resource_menus}
                      title="Resources"
                    />
                  </li>
                </ul>
              </nav>

              <div className="flex flex-col xs:flex-row gap-4 justify-center">
                <a
                  className=" mx-2 rounded-md bg-primary1 px-4 py-2 text-center text-16 font-medium text-white shadow"
                  href="/get-started"
                  style={{ lineHeight: "190%" }}
                >
                  Get Started
                </a>
                <a
                  className=" mx-2 rounded-md border-2 border-primary1 bg-white text-center px-4 py-2 text-16 font-medium  text-primary1"
                  href="https://admin.venueboost.eu/"
                  style={{ lineHeight: "160%" }}
                >
                  Login
                </a>
              </div>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
