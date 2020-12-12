import React from 'react'
import './GridText.css'

function GridText({ headlineOne, descriptionOne, headlineTwo, descriptionTwo, headlineThree, descriptionThree, headlineFour, descriptionFour,}) {
    return (
        <>
            <div className="container grid-text-main">
                <div className="row main-row">
                    <div className="col main__text-grid">
                        <h1 className="main-grid-head">{headlineOne}</h1>
                        <p>{descriptionOne}</p>
                    </div>
                    <div className="col right__text-row">
                        <div className="text-row-one">
                            <div className="col-head">
                                <span className="num num_one">01</span>
                                <h3>{headlineTwo}</h3>
                            </div>
                            <p>{descriptionTwo}</p>
                        </div>
                        <div className="text-row-two">
                            <div className="col-head">
                                <span className="num num_two">02</span>
                                <h3>{headlineThree}</h3>
                            </div>
                            <p>{descriptionThree}</p>
                        </div>
                        <div className="text-row-three">
                            <div className="col-head">
                                <span className="num num_three">03</span>
                                <h3>{headlineFour}</h3>
                            </div>
                            <p>{descriptionFour}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridText
