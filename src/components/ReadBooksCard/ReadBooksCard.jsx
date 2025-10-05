import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdOutlineRestorePage } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { Link } from 'react-router'
import ListContex from '../../provider/ListContex'

const ReadBooksCard = ({book}) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing, review } = book;
    const { reads, setReads, wishlist, setWishlist } = useContext(ListContex);
    const handleRemove = () => {
        const index = reads.findIndex(item=>item.id==bookId)
        reads.splice(index,1);
        setReads([...reads]);
    }
  return (
    <>
        <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-3 space-y-2">
                <div className="bg-gray-100 p-4 rounded-md w-30 md:w-40">
                    <img className='w-full rounded-md' src={image} alt={bookName} />
                </div>
                <div className="space-y-2">
                    <h4 className='text-2xl font-medium'>{bookName}</h4>
                    <p>By : {author}</p>
                    <div className="flex gap-2 items-center">
                        <p><b>Tag</b></p>
                        {
                            tags.map((item,index)=>(<p key={index} className='text-green-500 bg-gray-100 rounded-md px-2 py-1 border border-gray-200'>#{item}</p>))
                        }
                    </div>
                    <p className='flex gap-2 items-center text-black/60'> <SlCalender/> Year of Publishing: {yearOfPublishing}</p>
                    <p className='flex gap-2 items-center text-black/60'> <FaUser/> Publisher: {publisher}</p>
                    <p className='flex gap-2 items-center text-black/60'> <MdOutlineRestorePage/> Page {totalPages}</p>
                    <hr className='border-gray-300' />
                    <div className="flex gap-3">
                        <p className='bg-blue-100 text-blue-500 px-3 py-1 rounded-xl'>Category: {category}</p>
                        <p className='bg-yellow-100 text-yellow-500 px-3 py-1 rounded-xl'>Rating: {rating}</p>
                        <Link to={`/book-details/${bookId}`} className='bg-green-500 text-gray-100 px-3 py-1 rounded-xl duration-300 hover:bg-green-600'>View Details</Link>
                        <Link onClick={handleRemove} className='bg-red-500 text-gray-100 px-3 py-1 rounded-xl duration-300 hover:bg-red-600'>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReadBooksCard