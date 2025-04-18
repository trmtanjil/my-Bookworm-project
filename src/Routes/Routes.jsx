import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErronPage/ErrorPage';
import Hoom from '../Pages/Hoom/Hoom';
  

 export const router = createBrowserRouter([
   {
     path: "/",
     Component:Root,
    errorElement:ErrorPage,
    children:[
        {
            index:true,
            path: '/',
            loader:()=>fetch('./BookData.json'),
            Component:Hoom,
        },
        
    ],
   },
 ]);
 
 