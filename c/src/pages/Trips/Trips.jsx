import { Navbar,Footer, Trip } from '../../componets/index'
import kasenyi from '../../images/hennie-stander-cYPbGVr3njE-unsplash.jpg'
import './trips.css'

function Trips(){
    return(
        <div className='app__trips'>
            <header>
                <Navbar />
            </header>
            <div className='app__trips-contain'>
                <div className='app__trips-info'>
                    <div className='app__trips-info__latest'>
                        <div className='app__trips-head'>
                            <h1>Latest</h1>
                        </div>
                        <div className='app__trips-main'>
                            <div className='app__trips-info__latest-trip'>
                                <Trip name='Bujjagali Falls' Description='Experience the outstanding sound of the waters of bujjagali as they move along the Nile river.' image={kasenyi} />
                            </div>
                            <div className='app__trips-info__latest-trip'>
                                <Trip name='Itanda Falls' Description='Come if you are coming nze temunkoya.' image={kasenyi} />
                            </div>
                            <div className='app__trips-info__latest-trip'>
                                <Trip name='Sipi Falls' Description='Also you come, we dont have to remind you everytime.' image={kasenyi} />
                            </div>
                        </div>
                    </div>
                    <div className='app__trips-info__attendance'>
                        <div className='app__trips-info__attendance-head'>
                            <h1>Most attended</h1>
                        </div>
                        <div className='app__trips-info__attendance-main'>
                            <div className='app__trips-info__latest-trip'>
                                <Trip name='Bujjagali Falls' Description='Experience the outstanding sound of the waters of bujjagali as they move along the Nile river.' image={kasenyi} />
                            </div>
                            <div className='app__trips-info__latest-trip'>
                                <Trip name='Jinja bungee resort' Description='Come experience the unforgetable bungee jumps you will ever have, come on now, you have earned it.' image={kasenyi} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='app__trips-info__attendance-head'>
                        <h1>Trips</h1>
                    </div>
                    <div className='app__trips-effort'>
                        <div className='app__trips-effort__soon'>
                            <Trip name='Kasenyi Landing site' cost='Shs. 30,000 Ug' Date='22/03/2023' Description='Come and witness the beauty of mother nature along the lake victoria in its entirety as aligns together with the surrounding community' image={kasenyi} />
                        </div>
                        <div className='app__trips-effort__soon'>
                            <Trip name='Kasenyi Landing site' cost='Shs. 30,000 Ug' Date='22/03/2023' Description='Come and witness the beauty of mother nature along the lake victoria in its entirety as aligns together with the surrounding community' image={kasenyi} />
                        </div>
                        <div className='app__trips-effort__soon'>
                            <Trip name='Kasenyi Landing site' cost='Shs. 30,000 Ug' Date='22/03/2023' Description='Come and witness the beauty of mother nature along the lake victoria in its entirety as aligns together with the surrounding community' image={kasenyi} />
                        </div>
                        <div className='app__trips-effort__soon'>
                            <Trip name='Kasenyi Landing site' cost='Shs. 30,000 Ug' Date='22/03/2023' Description='Come and witness the beauty of mother nature along the lake victoria in its entirety as aligns together with the surrounding community' image={kasenyi} />
                        </div>
                        <div className='app__trips-effort__soon'>
                            <Trip name='Kasenyi Landing site' cost='Shs. 30,000 Ug' Date='22/03/2023' Description='Come and witness the beauty of mother nature along the lake victoria in its entirety as aligns together with the surrounding community' image={kasenyi} />
                        </div>
                        {/* <div className='app__trips-effort__attend'>Confirm attendance</div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Trips