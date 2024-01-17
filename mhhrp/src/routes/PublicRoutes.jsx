import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { RoutePaths } from "../utils/routes";

const HomeComponent = lazy(() => import('../components/Home'));

const PublicRoutes = () => {
    console.log("fghjk")
    return (
        <React.Suspense>
            <Routes>
                <Route path={'/'} element={<HomeComponent />} />
                {/* <Route path={RoutePaths.home} element={<HomeComponent />} /> */}
            </Routes>
        </React.Suspense>
    );
}

export default PublicRoutes;