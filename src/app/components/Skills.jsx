import React from 'react'
import Image from 'next/image'


function Skills() {
    return (
        <section className='skills'>
            <p className="text">
                I am skilled in the following <br /> technologies and disciplines.
            </p>
            <div className="mySkills">
                <div className="skillLogo">
                    <Image src="/images/next-js.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/react-js.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/html.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/css.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/js.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/sass.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/threejs.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/gsap.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/dart.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/flutter.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/java.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/nodejs.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/sql.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/mongodb.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/restapi.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/xd.png" width={80} height={80} alt='Skillset'></Image>
                </div>
            </div>
        </section>
    )
}

export default Skills