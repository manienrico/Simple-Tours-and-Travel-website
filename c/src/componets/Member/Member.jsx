import './member.css'

function Member({title,name,position,description}){
    return(
        <div className='app__member'>
            <div className='app__member-head'>
                <div className='app__member-head__position six'>{position}</div>
                <div className='app__member-name'>
                    <div className='app__member-head__title four'>{title}</div>
                    <div className='app__member-head__name'>{name}</div>
                </div>
            </div>
            <div className='app__member-body'>{description}</div>
        </div>
    )
}

export default Member