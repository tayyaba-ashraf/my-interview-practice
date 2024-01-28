
// import React, { useState } from 'react';
// import api, { setAuthToken } from '../../Axios/Axios';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await api.post('users', { username, password });
//       const token = response.data.token; // Adjust this based on your API response structure
//       setAuthToken(token);
//       onLogin(); // Notify the parent component about the successful login
//       console.log('Login Successful:', response.data);
//       console.log("users data",response.data);
//     } catch (error) {
//       console.error('Login Failed:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
// Login.js
import React, { useState } from 'react';
import api from '../../Axios/Axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('users', { username, password });
      const token = response.data.token; 
      localStorage.setItem('token', token); // Store the token in localStorage
      onLogin();                           // Notify the parent component about the successful login
      console.log('Login Successful:', response.data);
      
    } catch (error) {
      console.error('Login Failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

