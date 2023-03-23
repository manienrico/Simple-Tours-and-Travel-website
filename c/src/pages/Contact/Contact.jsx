import { useState } from 'react'
import { Navbar,Footer, Email,Address,Telephone } from '../../componets/index'
import {BsTelephoneFill} from 'react-icons/bs'
import './contact.css'

function Contact(){
    const [choice, setChoice] = useState('address');

    const changeChoiceState = (e) => {
        setChoice(e.target.className);
    }

    console.log(choice);

    return(
        <div className='app__contact'>
            <header id='h'>
                <Navbar />
            </header>
            <div className='app__contact-contain'>
                <div className='app__contact-intro'>
                    <h1>Get in touch!</h1>
                    <span>For any inquiries or query.</span>
                </div>
                <div className='app__contact-contain__contents'>
                    <div className='app__contact-contain__content-head'>
                        <div className="address" onClick={changeChoiceState}>Address</div>
                        <div className="tel" onClick={changeChoiceState}>Telephone</div>
                        <div className="email" onClick={changeChoiceState}>Email</div>
                    </div>
                    <div className='app__contact-contain__content-body'>
                        {
                            choice == 'address' ? (<Address />) : choice == 'tel' ? (<Telephone />) : choice == 'email' ? (<Email />) : (<Address />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact