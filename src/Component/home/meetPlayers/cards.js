import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Takumi from '../../../Resources/images/players/LP-Takumi.png'
import PlayerCards from '../../ui/PlayerCards'

class Cards extends Component {

    // state animation of cards
    state= {
        cards: [
            {
                bottom: 90,
                left: 300,
            },
            {
                bottom: 60,
                left: 200,
            },
            {
                bottom: 30,
                left: 100,
            },
            {
                bottom: 0,
                left: 0,
            }
        ]
    }
//looping through state above and passing it to Animate
    showAnimeCards = () => (
        this.state.cards.map((card,i)=>(
            <Animate
                key={i}
                show={this.props.show}

                start={{
                    left:0,
                    bottom:0,
                }}

                enter={{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: {duration: 500, ease: easePolyOut}
                }}
            >
                {({left, bottom})=>{
                    return(
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom,
                            }}
                        >
                            <PlayerCards
                                number='18'
                                name='Takumi'
                                lastname='Minamino'
                                bck={Takumi}
                            />
                        </div>
                    )
                }}
            </Animate>
        ))
    )

    render() {
        return (
            <div>
                {this.showAnimeCards()}
            </div>
        );
    }
}

export default Cards;