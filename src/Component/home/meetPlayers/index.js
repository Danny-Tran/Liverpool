import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import Cards from './cards'

class MeetPlayers extends Component {

    state = {
        show:false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={()=>{
                    this.setState({
                        show:true
                    })
                }}
            >
                <div className='home_meetplayers'
                    style={{ background: `#ffffff url(${Stripes})` }}
                >
                    <div className='container'>
                        <div className='home_meetplayers_wrapper'>
                            <div className='home_card_wrapper'>
                                <Cards
                                    show={this.state.show}
                                >

                                </Cards>
                        </div>
                            <div className='home_text_wrapper'>
                                <div>
                                    <Tag bck='#72d6d6' size='100px' color='#ffffff'
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        Meet
                                </Tag>
                                </div>
                                <div>
                                    <Tag bck='#72d6d6' size='100px' color='#ffffff'
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        The
                                </Tag>
                                </div>
                                <div>
                                    <Tag bck='#72d6d6' size='100px' color='#ffffff'
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        Team
                                </Tag>
                                </div>
                                <div>
                                    <Tag bck='#ffffff' size='27px' color='#01A396'
                                        link={true}
                                        linkto='/the_team'
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '27px',
                                            border: '1px solid #000000'
                                        }}
                                    >
                                        More
                                </Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    }
}

export default MeetPlayers;