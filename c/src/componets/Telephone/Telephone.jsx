import {BsTelephoneFill} from 'react-icons/bs'
import './telephone.css'

function Telephone(){
    return(
    <div className='app__telephone'>
        <div className="app__telephone-main">
            <div className='icon'>
                <BsTelephoneFill size={27} style={{color: 'white'}} />
            </div>
            <span>+256 392 921 090</span>
        </div>
    </div>
    )
}

export default Telephone