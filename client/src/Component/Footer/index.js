import './Footer.css'
import {Link} from 'react-router-dom'
// import { Link } from '@mui/material/Link';
import React from 'react'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footersec' id='upfooter'>
                <img src={process.env.PUBLIC_URL + '/assets/logo11.jpg'} alt="logo" style={{width:"100px", height:"30px"}}/>
                <section>
                    <i class="fab fa-facebook" ></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fas fa-at"></i>
                    <i class="fab fa-telegram"></i>
                </section>
            </div>
            <hr />
            <div className='footersec' id='downfooter'>
                <p>© BLOOD-DONORS 2022. We love our users!</p>
                <section>
                    <Link to="#">Privacy & Policies</Link>
                    <Link to="#">Terms & Conditions</Link>
                    <Link to="about" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Contact Us</Link>
                </section>
            </div>
        </div>
    )
}
