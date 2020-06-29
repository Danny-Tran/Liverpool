import React from 'react';
import Header from '../Component/Header_Footer/Header'

const { unstable_renderSubtreeIntoContainer } = require("react-dom");

const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            Hello World from layout    
            {props.children}         
        </div>
    );
};

export default Layout;