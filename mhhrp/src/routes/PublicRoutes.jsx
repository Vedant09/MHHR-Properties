import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from "../utils/routes";

const HomeComponent = lazy(() => import('../components/Home'));
const AboutUsComponent = lazy(() => import('../components/AboutUs'));
const ContactUsComponent = lazy(() => import('../components/ContactUs'))
const NotFoundComponent = lazy(() => import('../components/PageNotFound'))
const PropertyDetails = lazy(() => import('../components/PropertyDetails'));
const PropertyForms = lazy(() => import('../components/PropertyForms'))
const PropertyLists = lazy(() => import('../components/PropertyLists'));

const PublicRoutes = () => {
    return (
        <React.Suspense>
            <Routes>
                <Route path={'/'} element={<HomeComponent />} />
                <Route path={RoutePaths.aboutUs} element={<AboutUsComponent />} />
                <Route path={RoutePaths.contactUs} element={<ContactUsComponent />} />
                <Route path={RoutePaths.propertyDetails} element={<PropertyDetails />} />
                <Route path={RoutePaths.addPropertyForm} element={<PropertyForms />} />
                <Route path={RoutePaths.propertyLists} element={<PropertyLists />} />
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </React.Suspense>
    );
}

export default PublicRoutes;