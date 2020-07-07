import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks'


// create matches load from firebase 
const Matches = () => {
    return (
        <div className= 'home_matches_wrapper'>
            <div className= 'container'>
                {/* reuseable component from MISC FOLDER */}
                <Tag
                    bck= '#541818'
                    size= '50px'
                    color= '#ffffff'
                    padding= '5px 10px'
                    display= 'inLine-block'
                    font= 'Roboto'
                >
                Matches
                </Tag>

                <Blocks/>

                <Tag
                    bck= '#ffffff'
                    size= '22px'
                    color= '#541818'
                    padding= '5px 10px'
                    display= 'inLine-block'
                    font= 'Roboto'
                    link= {true}
                    linkto= '/the_team'
                >
                    See more matches
                </Tag>
                
            </div>
        </div>
    );
};

export default Matches;