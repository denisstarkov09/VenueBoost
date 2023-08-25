import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RouteNames from "../constants/route_names";
import Home from "../views/home";
import NotFound from "../views/notFound";
import TermsConditions from "../views/terms";
import About from "../views/about";
import Contact from "../views/contact";
import Whyboost from "../views/whyboost";
import GetStarted from "../views/getstarted";
import SnapfoodNetwork from "../views/snapfood-network";
import Resources from "../views/resources";
import Rcustomerhub from "../views/resources/customerhub";
import Rfaqs from "../views/resources/faqs";
import Rtools from "../views/resources/tools";
import Rstories from "../views/resources/success-stories";
import Features from "../views/features";
import Feature_menus from "../views/features/menus";
import Feature_reservations from "../views/features/reservations";
import Feature_staffs from "../views/features/staffs";
import Feature_tables from "../views/features/tables";
import Feature_waitlist from "../views/features/waitlist";
import Pricing from "../views/pricing";
import PricingAddons from "../views/pricing/add-ons";
import PrivacyPolicy from "../views/policy";
import Blog from "../views/blog";
import BlogDetail from "../views/blog-detail";
import VendorRegister from "../views/vendor-register";
import VendorRegisterScreen from "../views/vendor-register/register";
import VendorNotVerifedScreen from "../views/vendor-register/not_verified";
import VendorRegisterVerifyScreen from "../views/vendor-register/verify-email";
import VendorRegisterPlanPayScreen from "../views/vendor-register/planpay";
import WhoWeServeRestaurants from "../views/whoweserve/restaurants";
import WhoWeServeCafes from "../views/whoweserve/cafes";
import WhoWeServeBars from "../views/whoweserve/bars";
import WhoWeServeBistros from "../views/whoweserve/bistros";
import WhoWeServePubandclubs from "../views/whoweserve/pubandclubs";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path={RouteNames.home} element={<Home />} />
        <Route exact path={RouteNames.term} element={<TermsConditions />} />
        <Route exact path={RouteNames.policy} element={<PrivacyPolicy />} />
        <Route exact path={RouteNames.about} element={<About />} />
        <Route exact path={RouteNames.contact} element={<Contact />} />
        <Route exact path={RouteNames.get_started} element={<GetStarted />} />
        <Route
          path={"/:token/apply/complete-registration"}
          element={<VendorRegister />}
        >
          <Route index element={<VendorRegisterScreen />} />
          <Route
            exact
            path="verify-email"
            element={<VendorNotVerifedScreen />}
          />
          <Route
            exact
            path="choose-plan-and-pay"
            element={<VendorRegisterPlanPayScreen />}
          />
        </Route>
        <Route
          exact
          path={"/restaurants/verify-email/:token"}
          element={<VendorRegisterVerifyScreen />}
        />
        <Route exact path={RouteNames.blog} element={<Blog />} />
        <Route exact path={RouteNames.blog_detail} element={<BlogDetail />} />
        <Route exact path={RouteNames.why_boost} element={<Whyboost />} />
        <Route
          exact
          path={RouteNames.snapfood_network}
          element={<SnapfoodNetwork />}
        />
        <Route exact path={RouteNames.resource_tools} element={<Rtools />} />
        <Route exact path={RouteNames.resouce_story} element={<Rstories />} />
        <Route
          exact
          path={RouteNames.resource_hub}
          element={<Rcustomerhub />}
        />
        <Route exact path={RouteNames.resource_faq} element={<Rfaqs />} />
        <Route exact path={RouteNames.resources} element={<Resources />} />
        <Route
          exact
          path={RouteNames.pricing_addons}
          element={<PricingAddons />}
        />
        <Route exact path={RouteNames.pricing} element={<Pricing />} />
        <Route exact path={RouteNames.staffs} element={<Feature_staffs />} />
        <Route
          exact
          path={RouteNames.feature_tables}
          element={<Feature_tables />}
        />
        <Route
          exact
          path={RouteNames.feature_menus}
          element={<Feature_menus />}
        />
        <Route
          exact
          path={RouteNames.feature_waitlist}
          element={<Feature_waitlist />}
        />
        <Route
          exact
          path={RouteNames.feature_reservations}
          element={<Feature_reservations />}
        />
        <Route exact path={RouteNames.features} element={<Features />} />
        <Route
          exact
          path={RouteNames.whoweserve_restaurants}
          element={<WhoWeServeRestaurants />}
        />
        <Route
          exact
          path={RouteNames.whoweserve_cafes}
          element={<WhoWeServeCafes />}
        />
        <Route
          exact
          path={RouteNames.whoweserve_bars}
          element={<WhoWeServeBars />}
        />
        <Route
          exact
          path={RouteNames.whoweserve_bistros}
          element={<WhoWeServeBistros />}
        />
        <Route
          exact
          path={RouteNames.whoweserve_pubandclubs}
          element={<whoweserve_pubandclubs />}
        />
        <Route exact path={RouteNames.not_found} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
