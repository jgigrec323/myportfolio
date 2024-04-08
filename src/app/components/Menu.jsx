import React from 'react'

function Menu() {
    return (
        <div className='menu'>
            <div className="top">
                <div className="logo">
                    <svg id="Composant_1_2" data-name="Composant 1 – 2" xmlns="http://www.w3.org/2000/svg" width="99" height="96" viewBox="0 0 99 96">
                        <text id="JG." transform="translate(51 77)" fill="#a1baff" fontSize="80" fontFamily="FuturaBT-ExtraBlackCondItalic, Futura XBlkCnIt BT" fontWeight="900" fontStyle="italic"><tspan x="-47.09" y="0">JG.</tspan></text>
                    </svg>
                </div>
                <div className="closeBtn">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <ul className="middle">
                <li>Home</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className="bottom">
                <a href="#" className="active">En</a>
                <a href="#" className="">Fr</a>
            </div>
        </div>
    )
}

export default Menu