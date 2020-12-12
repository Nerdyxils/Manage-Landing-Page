import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
    lightBg, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
            
            <div className="container">
                <div className="row hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col main-text">
                        <div className="hero__text">
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <Link to="/sign-up">
                                <Button buttonSize='btn--wide' buttonColor='pink'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col hero-img">
                        <div className="hero__img-wrapper">
                            <img src={img} alt={alt} className="wrapper-img"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HeroSection