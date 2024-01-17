import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routes = () => {

    const isUserLoggedIn = localStorage.getItem('signedIn') === 'true';

    return isUserLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
}

export default Routes;
