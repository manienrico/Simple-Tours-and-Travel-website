import './navbar.css'

function Navbar(){
    return(
        <nav>
            <div className='app__logo'>
                <img src="" alt="Logo" />
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="trips">Trips</a></li>
                <li><a href="blog">Blog</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar