import React from 'react';
import Featured from './featured';
import Matches from './matches/Matches';

// Home page for feature player and matches from firebase
const Home = () => {
    return (
        <div className='bck_blue'>
            <Featured/>
            <Matches/>
        </div>
    );
};

export default Home;