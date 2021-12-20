import React from 'react';
import './Articles.css';
import Article4 from '../../images/Article4.png';
import Article5 from '../../images/Article5.png';
import Article6 from '../../images/Article6.png';
import { faBriefcase, faCalendar, faCalendarCheck, faEllipsisH, faExclamationCircle, faHandHoldingUsd, faLocationArrow, faMapMarker, faMapMarkerAlt, faMicroscope, faPen, faSearchLocation, faShareAltSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';
import profile3 from '../../images/profile3.png';
import profile4 from '../../images/profile4.png';

const Articles = () => {
    return (
        <section className='container'>
            <br/>
            <div className='left-side-align row'>


            <div className=' col-md-8'>
                <div className='first-article-align'>
                    <div>
                        <img src={Article4} alt="" style={{width:"100%", hight:"220px"}}/>
                        <p className='mx-3 my-3'><FontAwesomeIcon icon={faHandHoldingUsd}/> <span></span> Article</p>
                    </div>
                    <div className='card-footer-align'>
                        <div className='row'>
                            <div className='col-md-10'>
                            <h3>What if famous brands had regular fonts? Meet RegularBrands!</h3>
                                
                            </div>
                            <div className='col-md-2 text-end'>
                            <FontAwesomeIcon icon={faEllipsisH} />
                            </div>
                        </div>
                        
                        <p>I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                    </div>
                    
                    <div className='d-flex profile-align'>                        
                        <div className='profile1-align'>
                        <img src={profile1} alt=""/>                       
                        <span>Sarthak Kamra</span>               
                        </div>
                        <div className='profile1-align'>
                        <a>1.4k views</a>
                        <span><FontAwesomeIcon icon={faShareAltSquare} /></span>
                        </div>
                    </div>
                    <p className='mobile-view'>1.4k views</p>
                    <br/>
                </div>

                
                <br/>


                <div className='first-article-align'>
                    <div>
                        <img src={Article5} alt="" style={{width:"100%", hight:"220px"}}/>
                        <p className='mx-3 my-3'><FontAwesomeIcon icon={faMicroscope}/> <span></span> Education</p>
                    </div>
                    <div className='card-footer-align'>
                        <div className='row'>
                            <div className='col-md-10'>
                            <h3>Tax Benefits for Investment under National Pension Scheme launched by Government</h3>
                                
                            </div>
                            <div className='col-md-2 text-end'>
                            <FontAwesomeIcon icon={faEllipsisH} />
                            </div>
                        </div>
                        
                        <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    </div>
                    
                    <div className='d-flex profile-align'>                        
                        <div className='profile1-align'>
                        <img src={profile2} alt=""/>                       
                        <span>Sarthak Kamra</span>               
                        </div>
                        <div className='profile1-align'>
                        <a>1.4k views</a>
                        <span><FontAwesomeIcon icon={faShareAltSquare} /></span>
                        </div>
                    </div>
                    <p className='mobile-view'>4.8k views</p>
                    <br/>
                </div>


                <br/>


                <div className='first-article-align'>
                    <div>
                        <img src={Article6} alt="" style={{width:"100%", hight:"220px"}}/>
                        <p className='mx-3 my-3'><FontAwesomeIcon icon={faCalendar}/> <span></span> Meetup</p>
                    </div>
                    <div className='card-footer-align'>
                        <div className='row'>
                            <div className='col-md-10'>
                            <h3>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                                
                            </div>
                            <div className='col-md-2 text-end'>
                            <FontAwesomeIcon icon={faEllipsisH} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                            <p><FontAwesomeIcon icon={faCalendarCheck} /> <span></span> Fri, 12 Oct, 2018</p>
                            </div>
                            <div className='col-md-6'>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span/> Ahmedabad, India</p>
                            </div>
                        </div>
                        <div className='web-button'>
                        <button type="">Visit Website</button>
                        </div>
                    </div>
                    
                    <div className='d-flex profile-align'>                        
                        <div className='profile1-align'>
                        <img src={profile3} alt=""/>                       
                        <span>Sarthak Kamra</span>               
                        </div>
                        <div className='profile1-align'>
                        <a>1.4k views</a>
                        <span><FontAwesomeIcon icon={faShareAltSquare} /></span>
                        </div>
                    </div>
                    <p className='mobile-view'>800 views</p>
                    <br/>
                </div>
                <br/>



                <div className='first-article-align'>
                <div>
                    <br/>
                        <p className='mx-3 my-3'><FontAwesomeIcon icon={faBriefcase}/> <span></span> Job</p>
                    </div>
                    <div className='card-footer-align'>
                        <div className='row'>
                            <div className='col-md-10'>
                            <h3>Software Developer</h3>
                                
                            </div>
                            <div className='col-md-2 text-end'>
                            <FontAwesomeIcon icon={faEllipsisH} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                            <p><FontAwesomeIcon icon={faBriefcase} /> <span></span> Innovaccer Analytics Private Ltd.</p>
                            </div>
                            <div className='col-md-6'>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span/>Noida, India</p>
                            </div>
                        </div>
                        <div className='web-button'>
                        <button className="text-success" type="">Apply on Timesjobs</button>
                        </div>
                    </div>
                    
                    <div className='d-flex profile-align'>                        
                        <div className='profile1-align'>
                        <img src={profile4} alt=""/>                       
                        <span>Joseph Gray</span>               
                        </div>
                        <div className='profile1-align'>
                        <a>1.4k views</a>
                        <span><FontAwesomeIcon icon={faShareAltSquare} /></span>
                        </div>
                    </div>
                    <p className='mobile-view'>1.7k views</p>
                    <br/>
                </div>
            </div>


            <div className='article-right-align col-md-4'>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span/> Noida, India <span/><span/><span/><span/><span/><span/> <FontAwesomeIcon icon={faPen} /></p> 
                <br/>
                <br/>
                <br/>
                <span><FontAwesomeIcon icon={faExclamationCircle} /> <span/>Your location will help us serve better and extend a personalised experience.</span>
            </div>
        </div>
        </section>
    );
};

export default Articles;