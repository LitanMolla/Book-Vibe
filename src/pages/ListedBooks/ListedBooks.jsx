import React, { useContext, useState } from 'react'
import Container from '../../components/Container/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooksCard from '../../components/ReadBooksCard/ReadBooksCard';
import ListContex from '../../provider/ListContex';
import WishlistBooksCard from '../../components/WishlistBooksCard/WishlistBooksCard';
const ListedBooks = () => {
  const [sort, setSort] = useState('');
  const { reads, setReads, wishlist, setWishlist } = useContext(ListContex);
  const handleSort = () => {
    if (sort==='pages') {
      const sortArr = reads.sort((a,b)=>a.totalPages-b.totalPages);
      setReads([...sortArr]);
      const sortWishlist = wishlist.sort((a,b)=>a.totalPages-b.totalPages);
      setWishlist([...sortWishlist]);
    } else if(sort==='year'){
      const sortArr = reads.sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing);
      setReads([...sortArr]);
      const sortWishlist = wishlist.sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing);
      setWishlist([...sortWishlist]);
    } else if(sort==='rating'){
      const sortArr = reads.sort((a,b)=>a.rating-b.rating);
      setReads([...sortArr]);
      const sortWishlist = wishlist.sort((a,b)=>a.rating-b.rating);
      setWishlist([...sortWishlist]);
    }
  }
  return (
    <>
      <div className="my-10 md:my-20">
        <Container>
          <h2 className='bg-gray-100 py-3 text-center text-2xl font-semibold rounded-md border border-gray-200'>Books</h2>
          <div className="text-center py-5">
            <select onChange={(event)=>setSort(event.target.value)} onClick={handleSort} className='bg-green-500 text-gray-100 px-5 py-2 rounded-md outline-0' name="" id="">
              <option value="">Sort by</option>
              <option value="pages">Sort by pages</option>
              <option value="year">Sort by year</option>
              <option value="rating">Sort by rating</option>
            </select>
          </div>
          <div className="">
            <Tabs>
              <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
              </TabList>

              <TabPanel>
                <div className="space-y-6">
                  {reads.map(book => (
                    <ReadBooksCard key={book.bookId} book={book} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="space-y-6">
                  {
                    wishlist.map(book=>(
                      <WishlistBooksCard 
                      key={book.bookId}
                      book={book}
                      />
                    ))
                  }
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ListedBooks