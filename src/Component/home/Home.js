import React from 'react';
import Featured from './featured';
import Matches from './matches/Matches';
import MeetPlayers from './meetPlayers';
import Promo from './promotions'

// Home page for feature player and matches from firebase
const Home = () => {
    return (
        <div className='bck_blue'>
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promo/>
        </div>
    );
};

export default Home;