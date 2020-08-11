import React from 'react';

// creating a reuseable match block that we will pass firebase through
const MatchesBlock = ({match}) => {

    // console.log(match)

    return (
        <div className='match_block'>
            <div className='match_date'>
                {match.final ? match.date : `Match will play on: ${match.date}`}
            </div>
            
            <div className='match_wrapper'>
                <div className='match_top'>
                    <div className='left'>
                        <div className='icon' style={{background:`url(/images/team_icons/${match.localThmb}.png)`}}></div>
                        <div className='team_name' font='Roboto'>{match.local}</div>
                    </div>

                    <div className='right'>
                        {match.final ? match.resultLocal:'-'}
                    </div>
                </div>

                <div className='match_bottom'>
                    <div className='left'>
                        <div className='icon' style={{background:`url(/images/team_icons/${match.awayThmb}.png)`}}></div>
                        <div className='team_name' font='Roboto'>{match.away}</div>
                    </div>

                    <div className='right'>
                        {match.final ? match.resultAway:'-'}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MatchesBlock;