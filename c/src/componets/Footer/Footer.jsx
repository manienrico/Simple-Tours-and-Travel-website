import {RxTwitterLogo,RxInstagramLogo} from 'react-icons/rx'
import {MdFacebook,MdLocationOn,MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import './footer.css'

function Footer(){
    return(
        <footer>
            <div className='app__footer-contain'>
                <div className='app__footer-1'>
                    <h2 className='app__footer-head'>Blackman Safaris</h2>
                    <p className='app__footer-body'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='app__footer-1__socials'>
                        <a href="#"><RxTwitterLogo size={30} /></a>
                        <a href="#"><MdFacebook size={30} /></a>
                        <a href="#"><RxInstagramLogo size={30}  /></a>
                    </div>
                </div>
                <div className='app__footer-2'>
                    <h2 className='app__footer-head'>Information</h2>
                    <div className='app__footer-body'>
                        <a href="#" className='huver' >Terms and Conditions</a>
                        <a href="#" className='huver' >Privacy Policy</a>
                    </div>
                </div>
                <div className='app__footer-3'>
                    <h2 className='app__footer-head'>Customer Support</h2>
                    <div className='app__footer-body'>
                        <a href="#" className='huver' >FAQ</a>
                        <a href="#" className='huver' >Payment Options</a>
                        <a href="#" className='huver' >Book a Trip</a>
                    </div>
                </div>
                <div className='app__footer-4'>
                    <h2 className='app__footer-head'>Find Us</h2>
                    <div className='app__footer-body'>
                       <p><MdLocationOn size={32} /> <span>24th Street, off Old Portbell Rd.</span></p>
                       <p><BsTelephoneFill size={20} /> <span>+256 392 921 090</span></p>
                       <p><MdEmail size={20} /> <span>info.bmsafaris@gmail.com</span></p>
                    </div>
                </div>
                
            </div>
            <p className='rights'>Copyright ©2023, Enrico Mani.</p>
        </footer>
    )
}

export default Footer