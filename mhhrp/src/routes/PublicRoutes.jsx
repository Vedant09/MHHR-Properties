import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from "../utils/routes";

const HomeComponent = lazy(() => import('../components/Home'));
const AboutUsComponent = lazy(() => import('../components/AboutUs'));
const ContactUsComponent = lazy(() => import('../components/ContactUs'))
const NotFoundComponent = lazy(() => import('../components/PageNotFound'))

const PublicRoutes = () => {
    return (
        <React.Suspense>
            <Routes>
                <Route path={'/'} element={<HomeComponent />} />
                {/* <Route path={RoutePaths.home} element={<HomeComponent />} /> */}
                <Route path={RoutePaths.aboutUs} element={<AboutUsComponent />} />
                <Route path={RoutePaths.contactUs} element={<ContactUsComponent />} />

                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </React.Suspense>
    );
}

export default PublicRoutes;