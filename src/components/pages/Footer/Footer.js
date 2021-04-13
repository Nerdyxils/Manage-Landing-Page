import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram  } from 'react-icons/fa'
import { Button } from '../Button'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer row">
                    <div className="footer__logo">
                        <div className="foot-logo">
                            <img src='images/logo.svg' alt="logo" />
                        </div>
                    </div>
                    <div className="footer_links_justify">
                        <div className="footer-links">
                            <Link to='/sign-up'>Home</Link>
                            <Link to='/'>Pricing</Link>
                            <Link to='/'>Products</Link>
                            <Link to='/'>About Us</Link>
                        </div>
                        <div className="footer-links links_grid_two">
                            <Link to='/sign-up'>Careers</Link>
                            <Link to='/'>Community</Link>
                            <Link to='/'>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="email__newsletter">
                        <div className="email__input">
                            <form>
                                <input
                                    className='footer-input'
                                    name='email'
                                    type='email'
                                    placeholder='Updates in your inbox... '
                                    />
                                <Button buttonStyle='btn--small'>Go</Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row soc-copy">
                    <div className="social-icons">
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                            >
                            <FaFacebook />
                            </Link>
                            <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                            >
                            <FaYoutube />
                            </Link>
                            <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                            >
                            <FaTwitter />
                            </Link>
                            <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <FaInstagram />
                            </Link>
                            <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Pinterest'
                            >
                            <FaPinterest />
                        </Link>
                    </div>
                        <div className="copyright">
                            <p>Copyright 2020. All Rights Reserved</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer

