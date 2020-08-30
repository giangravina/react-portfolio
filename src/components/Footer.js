import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Footer(){

    return (
        <div className='footer-container'>
            {/* <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>

                    </div>
                </div>
            </div> */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to = "/" className="social-logo">
                            <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Gian 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to=''
                        target="_blank"
                        arial-label="facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram"
                        to=''
                        target="_blank"
                        arial-label="instagram"
                        >
                          <i className="fab fa-linkedin" />
                        </Link>
                        <Link className="social-icon-link facebook"
                        to=''
                        target="_blank"
                        arial-label="facebook"
                        >
                         <i className="fab fa-github" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Footer;