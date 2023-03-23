import {MdLocationOn} from 'react-icons/md'
import './address.css'

function Address(){
    return(
        <div className='app__address'>
            <div className="app__address-main">
                <div className='icon'>
                    <MdLocationOn size={32} />
                </div>
                <span>24th Street, off Old Portbell Rd.</span>
            </div>
        </div>
    )
}

export default Address