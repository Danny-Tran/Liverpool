import React from 'react';
import { PoolLogo } from '../ui/incons'

const Footer = () => {
    return (
        <footer className='bck_blue'>
            <div className ='footer_logo'>
                <PoolLogo
                    link={true}
                    linkTo='/'
                    width='100px'
                    height='100px'
                />
            </div>

            <div>
                <div className='footer_disclaimer'>
                    Liverpool FC 2020. All rights reserved
                </div>
            </div>

        </footer>
    );
};

export default Footer;