import React from 'react'
import BookCard from '../BookCard/BookCard';

const Books = ({books}) => {
  return (
    <>
        <div className="my-10 md:my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book=>(
                        <BookCard key={book.bookId} book={book}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Books;