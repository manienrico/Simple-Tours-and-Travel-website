import { Navbar,Footer, Card } from '../../componets/index'

import background from '../../images/chastagner-thierry-1zFlrpWTs3Y-unsplash.jpg'
import bujjagali from '../../images/jonathan-gohner-EmsDN8-M4dk-unsplash.jpg'
import ssezziwa from '../../images/keith-kasaija-wrM9TOVDSrs-unsplash.jpg'
import murchsion from '../../images/ivan-sabayuki-rV8XeF6leIA-unsplash.jpg'
import elgon from '../../images/nathan-dumlao-HKZPcz4Jpm8-unsplash.jpg'
import kasenyi from '../../images/hennie-stander-cYPbGVr3njE-unsplash.jpg'
import nyamwiru from '../../images/2h-media-6r0XFKDumKk-unsplash.jpg'
import endVisual from '../../images/endVisual.jpg'
import mid from '../../images/mid.mp4'
import beach from '../../images/justin-kauffman-fM0ZBklturE-unsplash.jpg'

import {Navigation, Pagination, Scrollbar,A11y} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import './home.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Home(){
    return(
        <div className='app__home'>
            <div className='app__home-startVisual' 
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh'
            }}>
                <header>
                    <Navbar />
                </header>
                <div className="app__home-inPageNav">
                    <a href="#destination-home">Destination</a>
                    <a href="#hotelCheckIn-home">Hotel Check-ins</a>
                    <a href="#fares-home">Fares</a>
                    <a href="#testimonial-home">Testimonial</a>
                    <a href="#blog-home">Blog</a>
                </div>
            </div>

            <div className='app__home-contents'>
                <div className='app__home-contents__headings'>
                    <h2>Available</h2>
                    <p>Destinations</p>
                </div>
                <div id='destination-home' className='app__home-destination'>
                    {/* <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>

                        </SwiperSlide>
                        <SwiperSlide>

                        </SwiperSlide>
                        <SwiperSlide>

                        </SwiperSlide>                        
                        <SwiperSlide>

                        </SwiperSlide>    
                        <SwiperSlide>

                        </SwiperSlide>                        
                        <SwiperSlide>

                        </SwiperSlide>
                    </Swiper> */}
                    <div className='app__home-DestinationCard'>
                        <img src={bujjagali} alt="vvv" />
                        <Card name='Bujjagali Falls' address='Jinja, along the river nile.' />
                    </div>
                    <div className='app__home-DestinationCard'>
                        <img src={ssezziwa} alt="vvv" />
                        <Card name='Ssezziwa Falls' address='Mityana.' />
                    </div>
                    <div className='app__home-DestinationCard'>
                        <img src={murchsion} alt="vvv" />
                        <Card name='Murchsion Falls national park' address='Pade district.' />
                    </div>
                    <div className='app__home-DestinationCard'>
                        <img src={elgon} alt="vvv" id='elgon' />
                        <Card name='Mt. Elgon' address='Mbale' />
                    </div>
                    <div className='app__home-DestinationCard'>
                        <img src={kasenyi} alt="vvv" id='kasenyi' />
                        <Card name='Kasenyi landing site' address='Entebbe.' />
                    </div>
                    <div className='app__home-DestinationCard'>
                        <img src={nyamwiru} alt="vvv" />
                        <Card name='Mabere ga nyamwiru' address='Bunyoro region.' />
                    </div>
                    <div className='app__home-DestinationCard'>
                        <img src={beach} alt="vvv" />
                        <Card name='Beach' address='Bunyoro region.' />
                    </div>
                </div>
                
                <div className='app__home-contents__headings'>
                    <h2>Featured</h2>
                    <p>Hotel and Lodgings</p>
                </div>
                <div id='hotelCheckIn-home' className="app__home-hotelCheckIn">
                                       
                    <div className='app__home-hotelCheckInCard'>
                        <img src={bujjagali} alt="vvv" />
                        <Card name='Bujjagali Falls' address='Jinja, along the river nile.' />
                    </div>
                    <div className='app__home-hotelCheckInCard'>
                        <img src={ssezziwa} alt="vvv" />
                        <Card name='Ssezziwa Falls' address='Mityana.' />
                    </div>
                    <div className='app__home-hotelCheckInCard'>
                        <img src={murchsion} alt="vvv" />
                        <Card name='Murchsion Falls national park' address='Pade district.' />
                    </div>
                    <div className='app__home-hotelCheckInCard'>
                        <img src={elgon} alt="vvv" id='elgon' />
                        <Card name='Mt. Elgon' address='Mbale' />
                    </div>
                    <div className='app__home-hotelCheckInCard'>
                        <img src={kasenyi} alt="vvv" id='kasenyi' />
                        <Card name='Kasenyi landing site' address='Entebbe.' />
                    </div>
                    <div className='app__home-hotelCheckInCard'>
                        <img src={nyamwiru} alt="vvv" />
                        <Card name='Mabere ga nyamwiru' address='Bunyoro region.' />
                    </div>
                </div>
                <div id='fares-home' className="app__home-fares">
                    <h2>Fares</h2>
                    <div className='app__home-FaresCard'>
                        <Card price='Shs 60,000.00 UG' description='Includes Transport, Entrance, Photography, Swimming, and, Refreshment.' />
                    </div>
                    <div className='app__home-FaresCard'>
                        <Card name='Activities' description='Tubing, Water massage, Rafting, Boat cruize' />
                    </div>
                </div>
                <div className="app__home-midVisual">
                    <video autoPlay loop muted className='endVisual'>
                        <source src={mid} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <div className='app__home-contents__headings'>
                        <h2>Testimonials</h2>
                    </div>
                    <div id='testimonial-home' className="app__home-testimonialSnippets">
                        
                        <div className='app__home-TestimonialCard grow'>
                            <Card name='Jon Doe' description='They very punctual, right on time.' />
                            
                        </div>
                        <div className='app__home-TestimonialCard grow'>
                            <Card name='Tonny Stark' description='I love their customer care, it"s very top notch.' />
                            
                        </div>
                        <div className='app__home-TestimonialCard grow'>
                            <Card name='Martha Kay' description='The food was served hot as i wanted it to be. I am definitely coming back here.' />
                            
                        </div>
                        <div className='app__home-TestimonialCard grow'>
                            <Card name='George Duck' description='Let also get my friends to join in on these advntures.' />
                           
                        </div>
                        <div className='app__home-TestimonialCard grow'>
                            <Card name='Peter Miles' description='Am planning for another trip with you guys, i really enjoyed my time there.' />
                            
                        </div>
                        <div className='app__home-TestimonialCard grow'>
                            <Card description='When is the next trip, i missed the first one so i dont want to miss again on any.' name='Wonder Maskmorf'  />
                            
                        </div>
                    </div>
                </div>
                
                {/* <div id='blog-home' className="app__home-blogSnippets">
                    <h2>Blog</h2>
                </div> */}
                <div className='separation'></div>

                <div className="app__home-endVisual"
                    style={{
                        backgroundImage: `url(${endVisual})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100vh'
                    }}
                >
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home