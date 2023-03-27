import { Navbar,Footer, Card, Testimonial } from '../../componets/index'

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
import 'swiper/css';
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
                <div className='app__miniNav-contain'>
                    <div className="app__home-inPageNav">
                        <a href="#destination-home">Destination</a>
                        <a href="#hotelCheckIn-home">Hotel Check-ins</a>
                        <a href="#fares-home">Fares</a>
                        <a href="#testimonial-home">Testimonial</a>
                    </div>
                </div>
                
            </div>

            <div className='app__home-contents'>
                <div className='app__home-contents__headings'>
                    <h2>Available</h2>
                    <p>Destinations</p>
                </div>
                <div id='destination-home' className='app__home-destination'>
                    
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
                    <div className='app__fare-contain'>
                        <h2 className='three'>Fares</h2>
                        <div className='app__home-FaresCard'>
                            <Card price='Shs 60,000.00 UG' description='Transport, Entrance, Photography, Swimming, and, Refreshment.' />
                        </div>
                    </div>
                    <div className='app__activities-contain'>
                        <h2 className='three'>Activities</h2>
                        <div className='app__home-FaresCard '>
                            <Card description='Tubing, Water massage, Rafting, Boat cruize' />
                        </div>
                    </div>
                </div>
                <div className="app__home-midVisual">
                    <video autoPlay loop muted className='endVisual'>
                        <source src={mid} type='video/mp4' />
                    </video>
                </div>
                <div className='app__home-testimonials'>
                    <div className='app__home-contents__headings makati'>
                        <h2>Testimonials</h2>
                    </div>
                    
                    <div id='testimonial-home' className="app__home-testimonialSnippets">
                    <Swiper
                        modules={[Navigation,Pagination,Scrollbar,A11y]} 
                        spaceBetween={50} 
                        slidesPerView={4}
                        navigation
                        pagination={{clickable: true}} 
                        scrollbar={{clickable: true}}
                        onSwiper={(Swiper)=>console.log(Swiper)}
                        onSlideChange={()=>console.log('slide change')}
                        >    
                            <SwiperSlide>
                                <Testimonial Name='John Doe' Rate='5 starz' Description='Note that the development build is not optimized.' month_year='Jan/2004' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Testimonial Name='The Chainsmokers' Description='To create a production build, use npm run build.' month_year='Jul/2010' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Testimonial Name='Seve Matteo' Description='To create a production build, use npm run build. Note that the development build is not optimized.' month_year='Apr/2017' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Testimonial Name='Marco .T' Description='Note that the development build is not optimized Terminate batch job you think i really enjoyed it.' month_year='Aug/2018' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Testimonial Name='Mauro .G' Description='Wondeful service and exceptional products. You should really have a taste of their services.' month_year='Sept/2018' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Testimonial Name='Peter Jon' Description='Hoooooo, the services are top notch. Am not lying when i say this surely, mstchewwwww.' month_year='Sept/2018' />
                            </SwiperSlide>
                        </Swiper>
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