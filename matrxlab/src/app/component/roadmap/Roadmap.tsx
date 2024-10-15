"use client"

import React from 'react';
import './roadmap.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Roadmap = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const data = [
    {
      imageUrl: 'https://via.placeholder.com/300',
      name: "Kicking Off",
      bulletPoints: ['Launch of EthAi: Officially', 'Development of Core AI Agents', 'User Onboarding Campaign', 'Community Engagement Initiatives'],
      buttonText: 'PHASE 1',
      video: "../roadmap1.mp4",
      isLeft: true,
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      name: "Bigger Insights",
      bulletPoints: ['Introduction of Advanced AI Agents', 'Strategic Partnerships', 'User Interface Optimization', 'Comprehensive Marketing Campaign'],
      buttonText: 'PHASE 2',
      video: "../roadmap3.mp4",
      isLeft: false,
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      bulletPoints: ['Introduction of Enhanced Features', 'API Integration for Data Access', 'Launch of Community-Driven Initiatives', 'Continuous Improvement and Updates'],
      name: "Full Power",
      buttonText: 'PHASE 3',
      video: "../roadmap2.mp4",
      isLeft: true,
    },
  ];

  return (
    <div className='roadmapcontainer'>
      <p className='roadmaptext' data-aos="fade-up">Roadmap</p>

      {data.map((item, index) => (
        <div key={index} className='insideroadmap' data-aos="fade-up">
          <div className='inside2roadmap'>
          

            {item.isLeft?<div className='leftroadmap'>
              <button className='phasebutton'>{item.buttonText}</button>
                  <h3 className='name'>{item.name}</h3>
                  <ul>
                    {item.bulletPoints.map((el, i) => (
                      <li className='list' key={i}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.333 10C18.333 5.398 14.603 1.667 10 1.667C5.39801 1.667 1.66701 5.398 1.66701 10C1.66701 14.603 5.39801 18.333 10 18.333C14.603 18.333 18.333 14.603 18.333 10Z" stroke="#A3F0FE" stroke-width="1.25" stroke-miterlimit="8.33333"/>
                      <path d="M6.66699 10.417L8.74999 12.5L13.333 7.5" stroke="#A3F0FE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                       {el}</li>
                    ))}
                  </ul>
            </div>
            :
            <div className='rightroadmap'>
               <video
                autoPlay
                loop
               muted
               className='roadmapvideo'
                playsInline width="512px" height="100%" >
                    <source src={item.video} type="video/mp4" />
               
                  </video>
              </div>}

              {!item.isLeft?<div className='leftroadmap'>
              <button className='phasebutton'>{item.buttonText}</button>
                  <h3 className='name'>{item.name}</h3>
                  <ul>
                    {item.bulletPoints.map((el, i) => (
                      <li className='list' key={i}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.333 10C18.333 5.398 14.603 1.667 10 1.667C5.39801 1.667 1.66701 5.398 1.66701 10C1.66701 14.603 5.39801 18.333 10 18.333C14.603 18.333 18.333 14.603 18.333 10Z" stroke="#A3F0FE" stroke-width="1.25" stroke-miterlimit="8.33333"/>
                      <path d="M6.66699 10.417L8.74999 12.5L13.333 7.5" stroke="#A3F0FE" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                       {el}</li>
                    ))}
                  </ul>
            </div>
            :
            <div className='rightroadmap'>
               <video  
               autoPlay
               loop
              muted
              
              className='roadmapvideo'width="512px" height="100%"
                 >
                    <source  src={item.video} type="video/mp4" />
               
                  </video>
              </div>}



          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
