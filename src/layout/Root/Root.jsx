import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import ListContex from '../../provider/ListContex'
import Loading from '../../components/Loader/Loading'

const Root = () => {
  const [reads, setReads] = useState(JSON.parse(localStorage.getItem('reads')) || []);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  localStorage.setItem('reads', JSON.stringify(reads));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  const navigation = useNavigation();
  const isPending = Boolean(navigation.location);
  return (
    <ListContex.Provider value={{ reads, setReads, wishlist, setWishlist }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className='flex-1'>
          {isPending ? <Loading/> : <Outlet />}
        </main>
        <Footer />
      </div>
    </ListContex.Provider>
  )
}

export default Root;