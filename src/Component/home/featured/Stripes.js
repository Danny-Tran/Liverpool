import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {
    
    state = {
        stripes: [
            {
                background: '#cc0033'
            },
            {
                background: '#ffffff'
            },
            {
                background: '#cc0033'
            }
        ]
    }

    showStripes = () => (
        this.state.stripes.map((stripe, i)=>(
            <Animate
                key={i}
                show={true}

                start={{
                    background:'#ffffff'
                }}

                enter={{
                    background: [stripe.background]
                }}
            >
                {({background})=>{
                    return (
                        <div
                            className='stripe'
                            style={{background}}
                        ></div>
                    );
                }}
            </Animate>
        ))
    )
    
    render() {
        return (
            <div className='featured_stripes'>
                {this.showStripes()}
            </div>
        );
    }
}

export default Stripes;