import { useState } from 'react'
import { Navbar,Footer, Email,Address,Telephone } from '../../componets/index'
import './contact.css'

function Contact(){
    const [choice, setChoice] = useState();

    if(setChoice==true){
        
    }

    return(
        <div className='app__contact'>
            <header>
                <Navbar />
            </header>
            <div className='app__contact-contain'>
                <div className='app__contact-contain__contents'>
                    <div className='app__contact-contain__content-head'>
                        <div className="address" onClick={{}}>Address</div>
                        <div className="telephone" onClick={{}}>Telephone</div>
                        <div className="email" onClick={{}}>Email</div>
                    </div>
                    <div className='app__contact-contain__content-body'>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact