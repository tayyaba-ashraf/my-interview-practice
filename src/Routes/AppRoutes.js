import React from 'react'
import Header from '../Components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/HomePage/Home';
import { Toaster } from 'react-hot-toast';


const AppRoutes = () => {
    const routes = [
        { path: '/', element: <Home /> },
      
      ];
  return (
    <>
       <Header />
       <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
        <Toaster />
    </>
  )
}

export default AppRoutes