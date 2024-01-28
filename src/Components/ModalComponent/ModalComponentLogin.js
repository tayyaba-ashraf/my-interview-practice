// import React, { useState } from 'react';
// import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col } from 'reactstrap';
// import Login from '../../Pages/Login/Login';
// import { setAuthToken } from '../../Axios/Axios';



// const ModalComponentLogin = ({ showModal, onHide}) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = () => {
//       setIsLoggedIn(true);
//     };
  
//     const handleLogout = () => {
//       setAuthToken(null);
//       setIsLoggedIn(false);
//     };
   
  
           
//   return (
//     <Modal isOpen={showModal} toggle={onHide} >
//       <ModalHeader toggle={onHide} >
//         Please Fill Login Form with your credentials
//       </ModalHeader>
//       <ModalBody className='Productmodal-content' onClick={(e) => e.stopPropagation()}>
//       <div>
//       {isLoggedIn ? (
//         <div>
//           <h2>Welcome! You are logged in.</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
        
//           <Login onLogin={handleLogin} />
//         </div>
//       )}
//     </div>
       
        
//       </ModalBody>
//       <ModalFooter>
//        <h5>Login </h5>   
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default ModalComponentLogin;
import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from '../../Pages/Login/Login';


const ModalComponentLogin = ({ showModal, onHide }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Modal isOpen={showModal} toggle={onHide}>
      <ModalHeader toggle={onHide}>
        Please Fill Login Form with your credentials
      </ModalHeader>
      <ModalBody className="Productmodal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          {isLoggedIn ? (
            <div>
              <h2>Welcome! You are logged in.</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <Login onLogin={handleLogin} />
            </div>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <h5>Login </h5>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponentLogin;



