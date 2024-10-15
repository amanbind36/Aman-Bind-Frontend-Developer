
"use client"
import React from 'react'
import "./asked.css"
import AOS from 'aos';
import { useEffect } from 'react';
const Askedquestion = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
  return (
    <div className='askcontainer' data-aos="fade-up">
        <div className='leftask' >
            <p className='askname'>Frequently Asked 
            Questions</p>
        </div>
        <div className='rightask'>
            <div className='textbox'>
                <p>+</p>
                <p className='text'>What is EthAi?</p>
            </div>
            <div className='textbox'>
                <p>+</p>
                <p className='text'>How can EthAi can help me as a Trader?</p>
            </div>
            <div className='textbox'>
                <p>+</p>
                <p className='text'>Who can use EthAi?</p>
            </div>
            <div className='textbox'>
                <p>+</p>
                <p className='text'>How does EthAi track smart money flow?</p>
            </div>
            <div className='textbox'>
                <p>+</p>
                <p className='text'>How does ensure data security?</p>
            </div>
        </div>
    </div>
  )
}

export default Askedquestion