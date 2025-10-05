import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import ListContex from '../../provider/ListContex'


const Root = () => {
  const [reads,setReads] = useState(JSON.parse(localStorage.getItem('reads'))||[]);
  const [wishlist,setWishlist] = useState([]);
  console.log(JSON.parse(localStorage.getItem('reads')));
  localStorage.setItem('reads',JSON.stringify(reads));
  return (
    <ListContex.Provider value={{reads,setReads,wishlist,setWishlist}}>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </ListContex.Provider>
  )
}

export default Root;