import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import ProjectCreate from './pages/ProjectCreate';

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
        path:'/project/:id',
        element: <ProjectPage/>,
      },
      {
        path:'/login',
        element: <LoginPage/>,
      },
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/projectCreate',
        element: <ProjectCreate/>,
      }
    ]
  }
])

function App() {


  return (
   <RouterProvider router={router}/>
  )
};

export default App;
