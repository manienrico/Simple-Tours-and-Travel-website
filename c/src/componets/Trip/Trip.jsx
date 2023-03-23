import './trip.css'

function Trip({name,cost,Description,Date,Attending,image}){
    return(
        <div className='app__trip'>
            <div className='app__trip-contain'>
                <img src={image} alt="trip" />
                <div className='app__trip-main'>
                    <div className='app__trip-main__head'>
                        <div className='app__trip-main__head-name'>{name}</div>
                        <div className='app__trip-main__head-cost'>{cost}</div>
                    </div>
                    <div className='app__trip-main__body two'>{Description}</div>
                </div>
                <div className='app__trip-footer'>
                    <div className='app__trip-footer__date three'>{Date}</div>
                    {/* <div className='app__trip-footer__confirmAttendance'>
                        <span>{Attending}</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Trip