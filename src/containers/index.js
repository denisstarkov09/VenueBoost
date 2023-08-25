import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import AppRoutes from "./appRoutes";
import ScrollToTop from "../components/Hooks/scrolltoTop";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const App = (props) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="mx-auto max-w-screen-2xl mt-28 px-4 sm:px-6 md:px-8 lg:px-16  ">
        <AppRoutes />
      </div>
      <Footer />
      <NotificationContainer />
    </>
  );
};

export default App;
