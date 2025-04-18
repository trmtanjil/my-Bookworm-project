import React from 'react';
import Banner from '../../components/Banner/Banner';
 
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';
 
 

const Hoom = () => {
  const data = useLoaderData()
  console.log(data);
    return (
      <>
      <Banner></Banner>
     <Books data={data}></Books>
      </>
    );
};

export default Hoom;