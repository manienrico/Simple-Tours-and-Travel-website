import './testimonial.css'

function Testimonial({Name,Description,Rate,month_year}){
    return(
        <div className='app__testimonial'>
            <div className='app__testimonial-contain'>
                <div className='app__testimonial-top'>
                    <div className='app__testimonial-name'>{Name}</div>
                    <div className='app__testimonial-desc'>{Description}</div>
                </div>
                <div className='app__testimonial-bottom'>
                    <div className='app__testimonial-rate'>{Rate}</div>
                    <div className='app__testimonial-date'>{month_year}</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial