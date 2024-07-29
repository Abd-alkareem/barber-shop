import { Link } from 'react-router-dom';
import '../../css/header.css'
import '../../css/main.css'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
 function Header(){
    function openMinu(){
        document.querySelector(".minu-btn").classList.toggle("active");
        document.querySelector("header .links").classList.toggle("active");
    }
    useEffect(()=>{
        document.querySelectorAll(".link-a").forEach((a)=>{
            a.addEventListener("click",()=>{
                document.querySelectorAll(".link-a").forEach((e)=>{
                    e.classList.remove("active");
                })
            a.classList.add("active");       
            document.querySelector(".minu-btn").classList.remove("active");
            document.querySelector("header .links").classList.remove("active");
            })
        })

    },[])
    return(
        <>
        <header>
            <div className="container">
                <div className="logo">P-BARBER</div>
                <ul className="links">
                    <li>
                        
                        <Link to="/" className='link-a active' >home</Link>
                    </li>
                    <li>
                        
                        <Link to="/about" className='link-a'>about</Link>
                    </li>
                    <li>
                        <Link to="/services" className='link-a'>services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='link-a'>contact us</Link>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faBars} className='d-flex d-md-none minu-btn' onClick={()=>{openMinu()}} />
            </div>
        </header>
        </>
    )
}

export default Header;