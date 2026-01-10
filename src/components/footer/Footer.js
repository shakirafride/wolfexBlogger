import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer" style={{backgroundColor: '#1a1a2e', color: '#ffffff'}}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title" style={{marginBottom: '20px'}}>
                                    <Logo />
                                </div>
                                <p style={{color: '#b8b8b8', lineHeight: '1.6'}}>
                                    There are many variations of passages of Lorem Ipsum available, 
                                    but the majority have suffered alteration in some form, by injected 
                                    humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3 style={{color: '#ffffff', marginBottom: '20px'}}>Important Link</h3>
                                </div>
                                <ul style={{listStyle: 'none', padding: 0}}>
                                    <li style={{marginBottom: '8px'}}><Link to="/blog" style={{color: '#b8b8b8', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>News</Link></li>
                                    <li style={{marginBottom: '8px'}}><Link to="/blog" style={{color: '#b8b8b8', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>Career</Link></li>
                                    <li style={{marginBottom: '8px'}}><Link to="/blog" style={{color: '#b8b8b8', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>Technology</Link></li>
                                    <li style={{marginBottom: '8px'}}><Link to="/blog" style={{color: '#b8b8b8', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>Startups</Link></li>
                                    <li style={{marginBottom: '8px'}}><Link to="/blog" style={{color: '#b8b8b8', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>Gadgets</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget tag-widget">
                                <div className="widget-title">
                                    <h3 style={{color: '#ffffff', marginBottom: '20px'}}>Browse by Tag</h3>
                                </div>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                                    <Link to="/travels" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Travel</Link>
                                    <Link to="/business" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Business</Link>
                                    <Link to="/lifestyle" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Lifestyle</Link>
                                    <Link to="/blog" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Marketing</Link>
                                    <Link to="/blog" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Medical</Link>
                                    <Link to="/blog" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Sports</Link>
                                    <Link to="/blog" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Career</Link>
                                    <Link to="/foods" style={{backgroundColor: '#2a2a3e', color: '#b8b8b8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px'}} onMouseOver={(e) => e.target.style.backgroundColor = '#e94560'} onMouseOut={(e) => e.target.style.backgroundColor = '#2a2a3e'}>Foods</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="widget-title">
                                    <h3 style={{color: '#ffffff', marginBottom: '20px'}}>Social Media</h3>
                                </div>
                                <ul style={{listStyle: 'none', padding: 0}}>
                                    <li style={{marginBottom: '12px'}}>
                                        <Link onClick={ClickHandler} to="/" style={{color: '#b8b8b8', textDecoration: 'none', display: 'flex', alignItems: 'center'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>
                                            <span style={{width: '20px', height: '20px', backgroundColor: '#4267B2', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px'}}>f</span>
                                            Facebook
                                        </Link>
                                    </li>
                                    <li style={{marginBottom: '12px'}}>
                                        <Link onClick={ClickHandler} to="/" style={{color: '#b8b8b8', textDecoration: 'none', display: 'flex', alignItems: 'center'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>
                                            <span style={{width: '20px', height: '20px', backgroundColor: '#1DA1F2', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px'}}>t</span>
                                            Twitter
                                        </Link>
                                    </li>
                                    <li style={{marginBottom: '12px'}}>
                                        <Link onClick={ClickHandler} to="/" style={{color: '#b8b8b8', textDecoration: 'none', display: 'flex', alignItems: 'center'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>
                                            <span style={{width: '20px', height: '20px', backgroundColor: '#E4405F', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px'}}>i</span>
                                            Instagram
                                        </Link>
                                    </li>
                                    <li style={{marginBottom: '12px'}}>
                                        <Link onClick={ClickHandler} to="/" style={{color: '#b8b8b8', textDecoration: 'none', display: 'flex', alignItems: 'center'}} onMouseOver={(e) => e.target.style.color = '#e94560'} onMouseOut={(e) => e.target.style.color = '#b8b8b8'}>
                                            <span style={{width: '20px', height: '20px', backgroundColor: '#FF0000', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px'}}>y</span>
                                            Youtube
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer" style={{borderTop: '1px solid #2a2a3e', paddingTop: '20px', marginTop: '40px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright" style={{color: '#b8b8b8', textAlign: 'center', margin: 0}}>
                                Copyright &copy; 2023 ModernMag by <Link to="/" style={{color: '#e94560', textDecoration: 'none'}}>wpOceans</Link>. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;