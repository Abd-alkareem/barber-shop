import '../../css/home.css'
import '../../css/main.css'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faScissors } from '@fortawesome/free-solid-svg-icons';
import discountImg from '../../image/discount-removebg-preview.png'
function Home (){
    return(<>
        <div className="home">
            <div className="container">
                <div className="main-part">
                    <span className="d-app"> <FontAwesomeIcon icon={faArrowDown} className='d-icon'/> <span>download app</span> </span>
                    <div className="landing">
                        <span>p-barber</span>
                        <p>We make your look at another level..</p>
                        <div>
                            <span> you have chosen the right place</span>
                            <FontAwesomeIcon icon={faScissors}/>
                        </div>
                    </div>
                    <div className="image"></div>
                </div>
                <div className="secound-part">
                <div className="rate"></div>
                <div className="testimoniols"></div>
                    <div className="discount">
                        <img src={discountImg} alt="" />
                        <span>25%</span>
                        <span>---> 30 march</span>
                        <span>discount</span>
                        <p>Take advantage of the offer..</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>)
}

export default Home;