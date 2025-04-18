import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErronPage/ErrorPage';
import Hoom from '../Pages/Hoom/Hoom';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
  

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
        {
          path: 'about',
          Component: About,
        },
        {
          path: '/bookDetails/:id',
          Component:BookDetails,
        },
        
    ],
   },
 ]);
 
 