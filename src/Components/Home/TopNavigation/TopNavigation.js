import React, { useState } from 'react';
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import whole from '../../images/whole.png';
import illustration from '../../images/illustration.png';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TopNavigation.css';

const TopNavigation = () => {
  const [, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [signInShow, setSignInShow] = useState(false)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='web-logo'><img src={whole} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

          </Nav>
          <Nav className="nav-searchbar me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <input type="text" placeholder='Search for your favourite group in ATG' name="" value="" />
          </Nav>
          
          <p className='signup-text' onClick={() => setLgShow(true)}>Create Account.<span>It's free</span></p>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header className='modal-header-align' closeButton>
              <p className='text-center m-lg-3 text-success'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now <span/> <span className='text-warning'><FontAwesomeIcon icon={faHandPointUp} /></span></p>
            </Modal.Header>
            <div className='container'>
              <div className='signup-modal-align row'>
                <div className='col-md-6'>
                  <h4 className='my-2'>Create Account </h4>
                  <div className='signup-content-align'>


                      <div>
                      
                        <input type="text" placeholder='first name' name="" value="" />

                      
                        <input type="text" placeholder='Last name' name="" value="" />
                      
                      </div>

                    <div className='signup-up-align'>
                      
                        <input type="" placeholder='Email' name="" value="" />
                      
                     
                        <input type="" placeholder='Password' name="" value="" />
                      
                     
                        <input type="" placeholder='Confirm Password' name="" value="" />
                      
                    </div>
                  </div>
                  <br />
                  <div className='footer-align'>
                  <div className='signup-button1'>
                    <p>Create Account</p>
                    
                  </div>
                  <span className='signIn-btn' onClick={() => setSignInShow(true)}>or,Sign In</span>
                 
                    <div className='signup-button2'>

                    <span className="fb-btn">
                      <i class="fa fa-facebook fa-fw"></i> Sign up with Facebook
                    </span>

                  </div>

                  <div className='google-button'>
                    <span class="google-btn"><i class="fa fa-google fa-fw">
                    </i> Sign up with Google
                    </span>
                  </div>
                  </div>

                </div>
                <div className='col-md-6'>
                  <p className='signIn-text-align text-center' onClick={() => setSignInShow(true)}>Already have an account <span>Sign In</span></p>
                  <Modal
            size="lg"
            show={signInShow}
            onHide={() => setSignInShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header  className='modal-header-align' closeButton>
            <p className='text-center m-lg-3 text-success'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now <span/> <span className='text-warning'><FontAwesomeIcon icon={faHandPointUp} /></span></p>
            </Modal.Header>
            <div className='container'>
              <div className='signup-modal-align row'>
                <div className='col-md-6'>
                  <h4>Sign In </h4>
                  <br/>
                  <span className='signIn-btns' onClick={() => setSignInShow(true)}>or,Create Account</span>
                  <div className='signup-input-alignment'>                        
                        <input type="email" placeholder='Email' name="" value="" />                    
                        <input type="password" placeholder='password' name="" value="" />                   
                  </div>
                  <br />

                  <div className='signup-button1'>
                    <p>Sign In</p>
                  </div>

                  <div className='signup-button2'>

                    <span className="fb-btn">
                      <i class="fa fa-facebook fa-fw"></i> Sign in with Facebook
                    </span>

                  </div>

                  <div className='google-button'>
                    <span class="google-btn"><i class="fa fa-google fa-fw">
                    </i> Sign in with Google
                    </span>
                  </div>
                      <br/>
                      
                  <div className='text-center'>
                    <h5>Forget Password?</h5>
                  </div>

                </div>
                <div className='col-md-6'>
                  <p className='signIn-text-align text-center' onClick={() => setSignInShow(true)}>Don't have an account yet?  <span>Create new for free!</span></p>
                  
                  <div className='right-img-align'>
                    <img src={illustration} alt="" />
                    <br />
                    <br />
                    
                  </div>
                </div>
              </div>
              <br />
            </div>

          </Modal>
                  <div className='signUp-img-align'>
                    <img src={illustration} alt="" />
                    <br />
                    <br />
                    <p>By using up, you agree to our Terms & condition, Privacy policy</p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavigation;