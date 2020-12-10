import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">

                <div className="row text-center d-flex justify-content-center pt-5 mb-3">

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to='/about'>About us</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to='/products'>Products</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to='/help'>Help</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to='/Contact'>Contact</Link>
                        </h6>
                    </div>
                </div>

                <hr />

                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                    <div className="col-md-8 col-12 mt-5">
                        <p className='footerInfo'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </div>
                </div>

                <hr />


                <div className="row pb-3">
                    <div className="col-md-12">
                        <div className="mb-5 flex-center text-center faIcons">

                            <a href='http://facebook.com'>
                                <FontAwesomeIcon icon={faFacebook} className='link-color' />
                            </a>

                            <a href='http://tweeter.com'>
                                <FontAwesomeIcon icon={faTwitter} className='link-color' />
                            </a>

                            <a href='http://google.com'>
                                <FontAwesomeIcon icon={faGoogle} className='link-color' />
                            </a>

                            <a href='http://linkedin.com'>
                                <FontAwesomeIcon icon={faLinkedin} className='link-color' />
                            </a>

                            <a href='http://instagram.com'>
                                <FontAwesomeIcon icon={faInstagram} className='link-color' />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center text-warning py-3">© {new Date().getFullYear()} Copyright:
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </div>
        </div >

    )
}

export default Footer