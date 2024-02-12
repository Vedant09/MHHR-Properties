import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RoutePaths } from "../utils/routes";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const HomeComponent = lazy(() => import("../components/Home"));
const AboutUsComponent = lazy(() => import("../components/AboutUs"));
const ContactUsComponent = lazy(() => import("../components/ContactUs"));
const NotFoundComponent = lazy(() => import("../components/PageNotFound"));
const PropertyDetails = lazy(() => import("../components/PropertyDetails"));
const PropertyForms = lazy(() => import("../components/PropertyForms"));
const PropertyLists = lazy(() => import("../components/PropertyLists"));
const Login = lazy(() => import("../components/Login"));

const PublicRoutes = () => {

    const location = useLocation();
    console.log(location, "location")

  return (
    <div>
      {location?.pathname !== RoutePaths.login ? <Navbar /> : null}

      <React.Suspense>
        <Routes>
          <Route path={"/"} element={<HomeComponent />} />
          <Route path={RoutePaths.aboutUs} element={<AboutUsComponent />} />
          <Route path={RoutePaths.contactUs} element={<ContactUsComponent />} />
          <Route
            path={RoutePaths.propertyDetails}
            element={<PropertyDetails />}
          />
          <Route
            path={RoutePaths.addPropertyForm}
            element={<PropertyForms />}
          />
          <Route path={RoutePaths.propertyLists} element={<PropertyLists />} />
          <Route path="*" element={<NotFoundComponent />} />

          <Route path={RoutePaths.login} element={<Login/>} />

        </Routes>
      </React.Suspense>

      {location?.pathname !== RoutePaths.login ? <Footer /> : null}
    </div>
  );
};

export default PublicRoutes;
