import React, { useState } from 'react'
import { Container, Navbar } from 'reactstrap';
import './HeaderStyle.css';
import useHeaderHelper from './useHeaderHelper';
import ModalComponentSingup from '../ModalComponent/ModalComponentSingup';
import ModalComponentLogin from '../ModalComponent/ModalComponentLogin';



const Header = () => {
  // const {showModal,closeModal,showSignUpModalPopUp,showLoginModalPopUp}=useHeaderHelper();
  const { showLoginModal, showSignupModal, showLoginModalPopUp, showSignUpModalPopUp, closeModal } = useHeaderHelper();


  return (
    <Navbar className="site-header section fixed">
        <Container style={{ maxWidth: '1054px' }}>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3 ">
              <button className="menu-btn" type="button">
                 <span className="sr-only">Menu</span>
              </button>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 text-center site-logo">
              <a href="https://myinterviewpractice.com/">
                 <img
                     className="dark-logo"
                     src="/images/mipLogoNew.svg"
                     alt="myinterviewpractice.com"
                   />
              </a>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3 text-right m-hide">
          <div className="header-btn clearfix">
              <button className="log" onClick={showLoginModalPopUp}>
                Log In
              </button>
              <a className="signup-btn" onClick={showSignUpModalPopUp}>
                Sign Up
              </a>
              </div>
          </div>

        </div>
        </Container>
        
        <ModalComponentLogin showModal={showLoginModal} onHide={closeModal} />
        <ModalComponentSingup showModal={showSignupModal} onHide={closeModal} />
        
        

    </Navbar>
    
  )
}

export default Header