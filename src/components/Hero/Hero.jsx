import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experience That Inspires</h2>
                <p>passionate frontend developer | Transforming Idea into Seamless and Visually Stunning Web Solution</p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/logo.svg" />
                    </div>
                    <img src="./assets/images/logo.svg" />
                </div>

            
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/logo.svg" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/logo.svg" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/logo.svg" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/logo.svg" />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero