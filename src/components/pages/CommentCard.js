import React from 'react'
import './CommentCard.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function CommentCard({imgOne, altOne, fnameOne, commentOne, imgTwo, altTwo, 
    fnameTwo, commentTwo, imgThree, altThree, fnameThree, commentThree, imgFour, altFour, fnameFour, commentFour, buttonLabel
}) {
    return (
        <>
            <div className="container card-design">
                <div className="card-main">
                    <div className="card-grid grid-one">
                        <img src={imgOne} alt={altOne}/>
                        <h3 className="grid-name">{fnameOne}</h3>
                        <p className="grid-comment">{commentOne}</p>
                    </div>
                    <div className="card-grid grid-two">
                        <img src={imgTwo} alt={altTwo}/>
                        <h3 className="grid-name">{fnameTwo}</h3>
                        <p className="grid-comment">{commentTwo}</p>
                    </div>
                    <div className="card-grid grid-three">
                        <img src={imgThree} alt={altThree}/>
                        <h3 className="grid-name">{fnameThree}</h3>
                        <p className="grid-comment">{commentThree}</p>
                    </div>
                    <div className="card-grid grid-four">
                        <img src={imgFour} alt={altFour}/>
                        <h3 className="grid-name">{fnameFour}</h3>
                        <p className="grid-comment">{commentFour}</p>
                    </div>
                </div>
                <div className="btn-start">
                    <Link to="/sign-up">
                        <Button buttonSize='btn--wide' buttonColor='pink'>{buttonLabel}</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CommentCard
