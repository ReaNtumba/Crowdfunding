import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';

const HeaderLayout= () => {
  return (
    <div> 
      <Nav/>
      <Outlet/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    element: <HeaderLayout/>,
    children:[
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path:'/project/:id',
        element: <ProjectPage/>,
      },
      {
        path:'/Login',
        element: <LoginPage/>,
      }
    ]
  }
])

function App() {


  return (
   <RouterProvider router={router}/>
  )
};

export default App
