import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

import { PoolLogo } from '../ui/incons';

class Header extends Component {
    render() {
        return (
            <AppBar
                position = 'fixed'
                style = {{
                    backgroundColor: '#cc0033',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e',
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className='header_logo'>
                            <PoolLogo
                                link={true}
                                linkTo='/'
                                width='100px'
                                height='100px'
                            />
                        </div>
                    </div>

                    <Link to='/the_team'>
                        <Button color='inherit'>The Team</Button>
                    </Link>

                    <Link to='/the_matches'>
                        <Button color='inherit'>The Matches</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;