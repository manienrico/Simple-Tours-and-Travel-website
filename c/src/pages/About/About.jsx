import { useState } from 'react'
import { Navbar,Footer, WhatWeDo, Mission, Goal, Member } from '../../componets/index'
import endVisual from '../../images/aboutVisual.jpg'
import show from '../../images/show.jpg'
import founder from '../../images/founder.jpg'
import mbr from '../../images/mbr.jpg'
import './about.css'

function About(){
    const [choice, setChoice] = useState('whatWeDo')

    const changeChoice =(e)=>{
        setChoice(e.target.className)
    }

    return(
        <div className='app__about'>
            <header
            style={{
                backgroundImage: `url(${endVisual})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh'
            }}
            >
                <Navbar />
                <div className='app__about-intro'>
                    <h1 className='one'>Black Man Safaris</h1>
                    <p className='one'>Tell a Story</p>
                </div>
            </header>
            <div className='app__about-contain'>
                <div className="app__about-businessStory__contain">
                    <div className="app__about-businessStory__img">
                        <img src={show} alt="img" />
                    </div>
                    <div className="app__about-businessStory__detail-contain">
                        <div className='app__about-businessStory__detail-head'>
                            <div className='whatWeDo' onClick={changeChoice} >What we do</div>
                            <div className='mission' onClick={changeChoice} >Mission</div>
                            <div className='goal' onClick={changeChoice} >Goal</div>
                        </div>
                        <div className='app__about-businessStory-detail'>
                            {/* importing our components */}
                            {
                                choice == 'whatWeDo' ? (<WhatWeDo />) : choice == 'mission' ? (<Mission />) : choice == 'goal' ? (<Goal />) : (<WhatWeDo />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='app__about-composition'>
                <div className='app__about-composition__founder'>
                    <div className='app__about-founder__contain'>
                        <img src={founder} alt="Founder" />
                        <Member title='Mr.' name='Martin Ntambazi' position='C.E.O' description='Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.' />
                    </div>
                </div>
                <div className='app__about-composition__team'>
                    <div className='member'>
                        <img src={mbr} alt="Team member 1" />
                        <Member title='Ms.' name='Test one' position='H.R' />
                    </div>
                    <div className='member'>
                        <img src={mbr} alt="Team member 2" />
                        <Member title='Mr.' name='Test four' position='Operations Manager' />
                    </div>
                    <div className='member'>
                        <img src={mbr} alt="Team member 3" />
                        <Member title='Dr.' name='Burna Boy' position='Managing Director' />
                    </div>
                </div>
            </div>
            <div className='app__about-fun__contain'>
                <div className='app__about-fun'>
                    <h4 className='app__about-fun__head'>Thank for choosing us.</h4>
                    <span className='app__about-fun__subHead'>Enjoy your holiday</span>
                </div>
            </div>
        {/* </div> */}
            <Footer />
        </div>
    )
}

export default About