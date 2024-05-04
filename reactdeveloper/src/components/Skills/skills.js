import React from 'react'
import './skills.css'
import WebDeveloper from '../../assets/webicon2.jpeg'
import WebDesgin from '../../assets/webicon.jpeg'
import Uiux from '../../assets/Udegin.png'
import Appdegin from '../../assets/appicon.png'



const Skills = () => {
    return (
        <div>
            <section id='skills'>
                <span className="skillsTitle">What I do</span>
                <span className="skilldesc">
        
                    "I am a versatile professional with a strong foundation in web development, web design, and app design. 
                    Proficient in HTML, CSS, and JavaScript, 
                     Additionally, I specialize in designing sleek and intuitive mobile 
                     applications for both iOS and Android platforms, prioritizing user experience and interaction. With a commitment to delivering
                      high-quality digital solutions,
                       </span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={WebDeveloper} alt="WebDeveloper" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2> Web Development</h2>
                            <p> Building dynamic and responsive websites using HTML, CSS, and JavaScript. 
                                You're skilled in both front-end and back-end development .
                                
                            </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={WebDesgin} alt="WebDesgin" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2> Web Design</h2>
                            <p> Crafting visually captivating website layouts that effectively communicate your clients' brand identities.
                                
                                 
                                 
                                </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={Uiux} alt="Uiux" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Degin</h2>
                            <p> "I excel in UI/UX design, seamlessly merging creativity with user-centric principles to craft intuitive 
                                digital experiences.  
                                </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={Appdegin} alt="appDesgin" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>App Desgin</h2>
                            <p>Designing sleek and user-friendly mobile applications for both iOS and Android platforms.
                             </p>
                        </div>
                    </div>



                </div>

            </section>
        </div>
    )
}

export default Skills;
