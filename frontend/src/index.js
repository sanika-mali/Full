import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './page/Home'; // Assuming these components are in separate files
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Newproduct from './page/Newproduct';
import Login from './page/Login';
import Signup from './page/Signup';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='Menu' element={<Menu/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Newproduct' element={<Newproduct/>}/>
        <Route path='Signup' element={<Signup/>}/>

        
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
