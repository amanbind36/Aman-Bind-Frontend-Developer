import React from 'react'
import "./asked.css"
const Askedquestion = () => {
  return (
    <div className='askcontainer'>
        <div className='leftask'>
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