"use client"

import React from 'react'
import "./tocken.css"
import AOS from 'aos';
import { useEffect } from 'react';
const Tockenomics = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
  return (
    <div className='tockencontainer'>
        <video 
        autoPlay
        loop
        muted
        playsInline
        style={{
            maxWidth:"100%",
            
            position:"absolute",
            
             margin: "auto", 
             objectFit: "cover", 
             zIndex: "-1", 
             right: 0, 
            
           }}
        src="../tockenvideo.mov" >
       
        </video>
        <div className='tocken2container' data-aos="fade-up">
           <p className='tockntext' data-aos="fade-up">Tokenomics</p>
           <div className='insidetocken'>
            <div className='inside2tocken' data-aos="fade-up">
                <div className='lefttocken'>
                    <p>Liquiditypool(90%)</p>
                <div className="chart">
  <div className="slice slice1"></div>
  <div className="slice slice2"></div>
  <div className="slice slice3"></div>
</div>
                <p className='market'>marketing(5%)</p>
                <p className='team'>Team</p>
            
                </div>
                <div className='righttocken'>
                    <div className='toptocken'>
                   
                       <table >

                      
                           <tbody >
            <tr >
                <td>Name</td>
                
                <td>:</td>
                <td>AuthAi</td>
            </tr>
            <tr>
                <td>Tocken Name</td>
                <td>:</td>
                <td>$AuthAi</td>
                
            </tr>
            <tr>
                <td>Token Standard</td>
                <td>:</td>
                <td>ERC20</td>
            </tr>
            <tr>
                <td>Blockchain</td>
                <td>:</td>
                <td>Ethereum</td>
            </tr>
            <tr>
                <td>Total Supply</td>
                <td>:</td>
                <td>100 Million</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>:</td>
                <td>5%/5%</td>
            </tr>
        </tbody>
        </table>
                    </div>
                    <div className='downtocken'>
                        <table>
                         
                        <tbody>
                            <tr>
                                <td>Team</td>
                                <td>:</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Marketing</td>
                                <td>:</td>
                                <td>5%</td>
                            </tr>
                            <tr>
                                <td>Liquidity Pool</td>
                                <td>:</td>
                                <td>90%</td>
                            </tr>
                        </tbody>
                           
                        </table>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Tockenomics