import {MdEmail} from 'react-icons/md'
import './email.css'

function Email(){
    return(
        <div className='app__email'>
            <div className="app__email-main">
                <div className='icon'>
                    <MdEmail size={30} style={{color: '#fff'}} />
                </div>
                <span>info.bmsafaris@gmail.com</span>
            </div>
            
        </div>
    )
}

export default Email