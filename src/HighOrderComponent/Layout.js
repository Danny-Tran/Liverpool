import React from 'react';
import Header from '../Component/Header_Footer/Header'
import Footer from '../Component/Header_Footer/Footer'

// host header and footer
const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}     
            <Footer/>    
        </div>
    );
};

export default Layout;