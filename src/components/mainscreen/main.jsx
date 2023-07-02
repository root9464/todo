import { useState, useEffect } from "react";
import './style.css'
import Circle from '../../assets/img/cyrcle.svg'
import Logo from '../../assets/img/logo.svg'
import Arrow from '../../assets/img/arrow.svg'
import Alert from 'react-bootstrap/Alert';
import { ArrowDownCircleFill } from 'react-bootstrap-icons';
export const Main = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
    return (
        <section className="main">
            
            <img  className='circle' src={Circle} alt="alt"></img>
            <img className="logo" src={Logo} alt="alt"></img>

            <p className="subtitle">From the developer aE</p>
            <Alert.Link className="butt" href="#todo"><ArrowDownCircleFill className="arrow" size={55} /></Alert.Link>
            
        </section>
    );
} 