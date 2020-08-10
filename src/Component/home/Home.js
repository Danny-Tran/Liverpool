import React from 'react';
import Featured from './featured';
import Matches from './matches/Matches';
import MeetPlayers from './meetPlayers';
import Promotion from './promotions'

// Home page for feature player and matches from firebase
const Home = () => {
    return (
        <div className='bck_blue'>
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    );
};

export default Home;