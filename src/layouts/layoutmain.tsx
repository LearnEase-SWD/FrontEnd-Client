import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import Home from '../containers/Home';



const Layout: React.FC = () => {
    return (
        <>
            <div className="preloader">
                <img className="preloader__image" width="60" src="assets/images/loader.png" alt="" />
            </div>
            <div className="page-wrapper">
                <Header />

                <Home />

                <Footer />
            </div>



        </>


    );
};

export default Layout;

