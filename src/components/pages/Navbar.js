import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true)
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)


    return (
        <div className="body_main bg-img main__bg">
        <IconContext.Provider value={{fontSize: 10}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src='images/logo.svg' alt="logo" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    { click ? <FaTimes /> : <FaBars/> }
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
                            Product
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Career
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/community" className="nav-links" onClick={closeMobileMenu}>
                            Community
                        </Link>
                    </li>
                </ul>
                <div className="nav-btn">
                    {button ? (
                        <Link to='/get-started' className="btn-link">
                            <Button buttonStyle="btn--outline" buttonSize="btn--medium">Get Started</Button>
                        </Link>
                    ) : (
                        <Link className="btn-link" onClick={closeMobileMenu}>
                            <Button buttonStyle="btn--outline"
                                    buttonSize="btn--mobile">
                                        Get Started
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
        </IconContext.Provider>
        </div>
    )
}

export default Navbar