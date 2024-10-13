import React from 'react'
import "./tocken.css"
const Tockenomics = () => {
  return (
    <div className='tockencontainer'>
        <video 
        autoPlay
        loop
        muted
        playsInline
        style={{
            maxWidth:"100%",
            // Keeps the video fixed in the background
            position:"absolute",
             // Fixed height in pixels
             margin: "auto", // Centers the video horizontally
             objectFit: "cover", // Ensures the video covers the defined dimensions
             zIndex: "-1", // Places the video behind all content
             right: 0, // These ensure the video is centered both vertically and horizontally
            
           }}
        src="../tockenvideo.mov" >
       
        </video>
        <div className='tocken2container'>
           <p className='tockntext'>Tokenomics</p>
           <div className='insidetocken'>
            <div className='inside2tocken'>
                <div className='lefttocken'>
                <div className="chart">
  <div className="slice slice1"></div>
  <div className="slice slice2"></div>
  <div className="slice slice3"></div>
</div>

            <div className='arrow'></div>
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
                        
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Tockenomics