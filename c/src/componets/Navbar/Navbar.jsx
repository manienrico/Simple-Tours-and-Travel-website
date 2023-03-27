import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import './navbar.css'

function Navbar(){
    return(
        <nav>
            <div className='app__logo'>
                <img src="" alt="Logo" />
            </div>
            <ul className='big__screens'>
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="trips">Trips</a></li>
                {/* <li><a href="blog">Blog</a></li> */}
                <li><a href="contact">Contact</a></li>
            </ul>
            <div className='menu__icon'>
                <GiHamburgerMenu />
            </div>
            <div className='small__screen'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="trips">Trips</a></li>
                    {/* <li><a href="blog">Blog</a></li> */}
                    <li><a href="contact">Contact</a></li>
                </ul>
                <div className='menu__close-icon'>
                    <RxCross2 />
                </div>
            </div>
        </nav>
    )
}

export default Navbar