"use client"

import React from 'react'
import "./explore.css"
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const Explore = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
  return (
    <div className='explorecontainer'>
        
        <div className='insideexplore' data-aos="fade-up">
            <div className='inside2explore'>
            <p className='exploretext'> Explore Our <span style={{color:"rgba(98, 240, 254, 1)"}}>dApp</span></p>
            <p className='texteathai'>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
            </div>
            <div style={{margin:"auto"}}>
            <button className='explorebutton'>Open dApp</button>

            </div>
        </div>
    </div>
  )
}

export default Explore