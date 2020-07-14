import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, newArray } from '../../ui/misc';

import MatchesBlock from '../../ui/matches_block';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {
    
    state = {
        matches:[]
    }

    componentDidMount(){
        //function from misc looping through snapshot from firebase
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{ 
            const matches = firebaseLooper(snapshot);

            this.setState({
                matches: newArray(matches)
            })
            // console.log(matches);
        })
    }
    
    showMatches = (matches) => (
        matches ?
            matches.map((match)=>(
                <Slide top key={match.id}>
                    <div className='item'>
                        <div className='wrapper'>
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>

            ))
        :null
    )

    render() {
        // console.log(this.state)
        return (
            <div className='home_matches'>
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;