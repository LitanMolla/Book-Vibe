
import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <>
            <Link to={`/book-details/${bookId}`}>
                <div className="border border-gray-200 rounded-xl p-4 space-y-2 duration-300 hover:shadow-2xl hover:shadow-gray-300">
                    <div className="bg-gray-100 py-4 rounded-md border border-gray-200">
                        <img className='w-1/3 mx-auto' src={image} alt={bookName} />
                    </div>
                    <div className="flex gap-3">
                        <p className='text-green-500 bg-gray-100 px-2 py-1 rounded-md inline-block border border-gray-200'>Pages: {totalPages}</p>
                        <p className='text-green-500 bg-gray-100 px-2 py-1 rounded-md inline-block border border-gray-200'>Published: {yearOfPublishing}</p>
                    </div>
                    <h4 className='text-xl font-medium'>{bookName}</h4>
                    <p>By: {author}</p>
                    <div className="border-dashed border-b border-b-gray-400"></div>
                    <div className="flex justify-between">
                        <p>{publisher}</p>
                        <div className='flex gap-1 items-center'><p>{rating}</p> <FaRegStar /></div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BookCard