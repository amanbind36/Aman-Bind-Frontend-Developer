import React from 'react'
import { FaTelegramPlane,FaInstagram,FaFacebookF ,FaDiscord} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css"
const Footer = () => {
  return (
    <div className='footercontainer'>
        <div className='insidefooter'> 
            <div className='leftfooter'>
                <div className='brandname'>
                <div className="text-2xl flex font-bold text-gray-800 ">
            <div>
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="12.3428" width="11.3143" height="11.3143" fill="#1ADEF5"/>
<path d="M0.5 0C6.7487 0 11.8143 5.06558 11.8143 11.3143H0.5V0Z" fill="#1E808C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8143 7.05628V0C10.0746 0 8.4265 0.392677 6.95395 1.09424C9.15929 2.48982 10.8818 4.57953 11.8143 7.05628Z" fill="#1E808C"/>
<rect x="12.8429" width="11.3143" height="11.3143" fill="#1ADEF5"/>
<path d="M25.1857 0C31.4344 0 36.5 5.06558 36.5 11.3143H25.1857V0Z" fill="#1ADEF5"/>
<rect x="25.1857" y="12.3428" width="11.3143" height="11.3143" fill="#1ADEF5"/>
<path d="M25.1857 24.6858H36.5V36.0001C30.2513 36.0001 25.1857 30.9345 25.1857 24.6858Z" fill="#1ADEF5"/>
<path d="M0.5 24.6858H11.8143V36.0001C5.56558 36.0001 0.5 30.9345 0.5 24.6858Z" fill="#1ADEF5"/>
<path d="M12.8429 24.6858H24.1572C24.1572 30.9345 19.0916 36.0001 12.8429 36.0001V24.6858Z" fill="#1E808C"/>
</svg>
            </div>
            <div style={{color:"white"}}>
            EathAi
            </div>
          
            </div>
                </div>
            
            <div className='icons'>
            <FaTelegramPlane />
            <FaInstagram />
            <FaXTwitter />
            <FaFacebookF />
            <FaDiscord />
            </div>
            </div>
            <div className='rightfooter'>
                <div className='footerbootom'>
                    <p className='textfooter'>“Designed for traders of today, just like you."</p>
                  
                </div>
                <div className='searchcontainer'>
                    <input type="text" placeholder='write your working email' />
                    <button className='searchbutton'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer