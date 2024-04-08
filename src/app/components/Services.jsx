import React from 'react'
import SectionTitle from './SectionTitle'

function Services() {
    return (
        <section className='services'>
            <SectionTitle title={"Services"}></SectionTitle>
            <div className="allServices">
                <div className="serviceDivider"></div>
                <div className="singleService">
                    <span className="serviceNo">01</span>
                    <div className="serviceInfos">
                        <h3>Web design</h3>
                        <div className="process">
                            <span>Landing Page</span>
                            <span>Business Website</span>
                            <span>Online Store</span>
                        </div>
                    </div>
                </div>

                <div className="serviceDivider"></div>
                <div className="singleService">
                    <span className="serviceNo">02</span>
                    <div className="serviceInfos">
                        <h3>Web development</h3>
                        <div className="process">
                            <span>Frontend Development</span>
                            <span>Backend Development</span>
                        </div>
                    </div>
                </div>
                <div className="serviceDivider"></div>
                <div className="singleService">
                    <span className="serviceNo">03</span>
                    <div className="serviceInfos">
                        <h3>Mobile apps</h3>
                        <div className="process">
                            <span>Android</span>
                            <span>Ios</span>
                            <span>Design & Development</span>
                        </div>
                    </div>
                </div>

                <div className="serviceDivider"></div>
            </div>
        </section>
    )
}

export default Services