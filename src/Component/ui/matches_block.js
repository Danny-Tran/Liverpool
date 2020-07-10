import React from 'react';

const MatchesBlock = ({match}) => {

    console.log(match)

    return (
        <div className='match_block'>
            <div className='match_date'>
                {match.final ? match.date : `Match will play on: ${match.date}`}
            </div>
            
            <div className='match_wrapper'>
                <div className='match_top'>
                    <div className='left'>

                    </div>

                    <div className='right'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchesBlock;