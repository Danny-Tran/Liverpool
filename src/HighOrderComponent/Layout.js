import React from 'react';
import Header from '../Component/Header_Footer/Header'
import Footer from '../Component/Header_Footer/Footer'
const { unstable_renderSubtreeIntoContainer } = require("react-dom");

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