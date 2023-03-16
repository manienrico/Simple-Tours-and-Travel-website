import {RxTwitterLogo,RxInstagramLogo} from 'react-icons/rx'
import {MdFacebook,MdLocationOn,MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import './footer.css'

function Footer(){
    return(
        <footer>
            <div className='app__footer-contain'>
                <div className='app__footer-1'>
                    <h3 className='app__footer-head'>Blackman Safaris</h3>
                    <p className='app__footer-body'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='app__footer-1__socials'>
                        <a href="#"><RxTwitterLogo size={30} /></a>
                        <a href="#"><MdFacebook size={30} /></a>
                        <a href="#"><RxInstagramLogo size={30}  /></a>
                    </div>
                </div>
                <div className='app__footer-2'>
                    <h3 className='app__footer-head'>Information</h3>
                    <div className='app__footer-body'>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className='app__footer-3'>
                    <h3 className='app__footer-head'>Customer Support</h3>
                    <div className='app__footer-body'>
                        <a href="#">FAQ</a>
                        <a href="#">Payment Options</a>
                        <a href="#">Book a Trip</a>
                    </div>
                </div>
                <div className='app__footer-4'>
                    <h3 className='app__footer-head'>Find Us</h3>
                    <div className='app__footer-body'>
                       <p><MdLocationOn size={32} /> 24th Street, off Old Portbell Rd.</p>
                       <p><BsTelephoneFill size={20} /> +256 392 921 090</p>
                       <p><MdEmail size={20} /> info.bmsafaris@gmail.com</p>
                    </div>
                </div>
                
            </div>
            <p className='rights'>Copyright ©2023, Enrico Mani.</p>
        </footer>
    )
}

export default Footer