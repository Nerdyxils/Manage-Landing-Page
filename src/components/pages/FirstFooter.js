import React from 'react'
import './FirstFooter.css'
import {Link} from 'react-router-dom'
import {Button} from './Button'


function FirstFooter({headlineOne, buttonLabel}) {
    return (
        <>
            <div className="container first-footer">
                <div className="first-footer-items">
                    <div className="foot-txt">
                        <h1 className="footer-text">{headlineOne}</h1>
                    </div>
                    <div className="foot-btn">
                        <Link to="/sign-up">
                            <Button buttonSize='btn--wide' buttonColor='white'>{buttonLabel}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstFooter
