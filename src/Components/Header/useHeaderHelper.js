import React, { useState } from 'react'
import toast from 'react-hot-toast';


/**OffCanvas and Modal display controlling through this class */
const useHeaderHelper = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    
    const showSignUpModalPopUp = () => {
      console.log("inside Modal ");
      setShowSignupModal(true); 
      setShowLoginModal(false);
      
       
    };
    const showLoginModalPopUp = () => {
        console.log("inside Modal ");
        setShowLoginModal(true);
        setShowSignupModal(false);
         
      };
    
    const closeModal = () => {
        setShowLoginModal(false);
        setShowSignupModal(false);
      toast.success("Modal has been closed");  

    };
    return { showLoginModal, showSignupModal, showLoginModalPopUp, showSignUpModalPopUp, closeModal };
}

export default useHeaderHelper