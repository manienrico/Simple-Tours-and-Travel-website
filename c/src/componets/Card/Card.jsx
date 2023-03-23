import './card.css'

function Card({name,address,price,description,Image}){
    return(
        <div className='app__card'>
            <div className="app__card-main">
                {Image}
            </div>
            <div className="app__card-sub">
                <div className='app__card-sub__px'>
                    <em className='two'>{price}</em>
                    <div className='app__card-sub__name'>
                        <h2 className='four'>{name}</h2>
                        <div className='app__card-sub__address'>
                            <h4 className='two'>{address}</h4>
                        </div>
                    </div>
                    <div className='app__card-sub__description'>
                        <p className='two'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card