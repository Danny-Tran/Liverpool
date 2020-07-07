import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper } from '../../ui/misc'

class Blocks extends Component {
    
    state = {
        matches:[]
    }

    componentDidMount(){
        //function from misc looping through snapshot from firebase
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{ 
            const matches = firebaseLooper(snapshot);
            console.log(matches)
        })
    }
    
    showMatches = () => (
        <div>
            Matches!!!!!
        </div>
    )

    render() {
        return (
            <div className='home_matches'>
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;