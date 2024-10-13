"use client"
import React from 'react';
import MarketCompo from './component/marketinsight/MarketCompo';
import About from './component/about/About';
import Tockenomics from './component/Tockenomics/Tockenomics';
import Roadmap from './component/roadmap/Roadmap';
import AOS from 'aos';
import { useEffect } from 'react';
import Askedquestion from './component/askedquestion/Askedquestion';
import Explore from './component/explore/Explore';
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
     

    <div data-aos="zoom-in" className="mx-auto max-w-[1440px] h-[300px]  text-white flex flex-col justify-center items-center p-4">
     
      <h1 className="font-medium text-4xl sm:text-[72px] sm:leading-[76px] text-center">
        When Innovation
      </h1>
      <h1 className="font-medium text-4xl sm:text-[72px] sm:leading-[76px] text-center">
        Meets{" "}
        <span
          className="rounded-full bg-[#B0F9FF] text-black px-5 py-1 font-semibold"
        >
          Investments
        </span>
      </h1>
     
      <p className="font-normal w-full sm:w-[500px] h-7 text-[#B0FAFFB2] text-center mt-5">
        Empowering Trading Through Advanced Technology
      </p>
      
      <button className="mt-4 w-[131px] h-[44px] rounded-[12px] bg-[#101D17] text-white">
        Open App
      </button>
     
    </div>
    <div style={{marginTop:"200px"}}>
       <MarketCompo/>
       <About/>
       <Tockenomics/>
       <Roadmap/>
       <Askedquestion/>
       <Explore/>
       
      </div>
    </>
  );
};

export default Home;
