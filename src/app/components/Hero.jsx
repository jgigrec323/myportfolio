import React from 'react'

function Hero() {
    return (
        <div className='hero'>
            <p className='mainText'>Hey ! I'm <span className='myname'>Jean Galant .</span><br />
                Full stack <span className='myc'>Web & Mobile</span><br />
                Developer</p>
            <button className='btn'>Got a project ?</button>
            <div className="scrollIndicator">Scroll<br />Down</div>
        </div>
    )
}

export default Hero