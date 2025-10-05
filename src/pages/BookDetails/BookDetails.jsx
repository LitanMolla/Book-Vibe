import React, { useContext } from 'react'
import Container from '../../components/Container/Container'
import { Link, useLoaderData, useParams } from 'react-router'
import ListContex from '../../provider/ListContex';
import Swal from 'sweetalert2';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const currentBook = books.find(book => book.bookId === Number(id));
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing, review } = currentBook;

    const { reads, setReads, wishlist, setWishlist } = useContext(ListContex);

    const handleRead = () => {
        const isExit = reads.find(item => item.bookId === Number(id));
        if (isExit) {
            Swal.fire({
                icon: "warning",
                title: "Already Listed",
                text: "This book alredy listed",
            });
            return;
        }
        setReads(prv => [...prv, currentBook]);
        Swal.fire({
            title: "Success!",
            text: `${bookName} Mark as listed!`,
            icon: "success",
            confirmButtonText: "OK"
        });
    }
    const handleWishlist = () => {
        const isExit = wishlist.find(item => item.bookId === Number(id));
        if (isExit) {
            Swal.fire({
                icon: "warning",
                title: "Already Listed",
                text: "This book alredy Wishlist",
            });
            return;
        }
        setWishlist(prv => [...prv, currentBook]);
        Swal.fire({
            title: "Success!",
            text: `${bookName} Mark as Wishlist!`,
            icon: "success",
            confirmButtonText: "OK"
        });
    }
    return (
        <>
            <div className="my-10 md:my-20">
                <Container>
                    <div className="flex gap-6 justify-between items-center flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <div className="p-6 bg-gray-100 border border-gray-200 rounded-lg">
                                <img className='rounded-md w-full' src={image} alt={bookName} />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-2">
                            <h2 className='text-3xl font-semibold'>{bookName}</h2>
                            <h4 className='text-xl'>By : {author}</h4>
                            <hr className='border-gray-300' />
                            <p>{category}</p>
                            <hr className='border-gray-300' />
                            <p><b>Review :</b> {review}</p>
                            <div className="flex gap-3 items-center">
                                <p className='font-bold'>Tag</p>
                                {tags.map((item, index) => (
                                    <p key={index} className='text-green-500 bg-gray-100 rounded-lg px-2 py-1'>#{item}</p>
                                ))}
                            </div>
                            <hr className='border-gray-300' />
                            <div className="flex">
                                <div className="w-1/2">
                                    <p>Number of Pages:</p>
                                    <p>Publisher:</p>
                                    <p>Year of Publishing:</p>
                                    <p>Rating:</p>
                                </div>
                                <div className="w-1/2 font-bold">
                                    <p>{totalPages}</p>
                                    <p>{publisher}</p>
                                    <p>{yearOfPublishing}</p>
                                    <p>{rating}</p>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-5">
                                <Link onClick={handleRead} className='font-semibold border rounded-md px-5 py-2 duration-300 hover:bg-black hover:text-gray-100 bg-gray-100'>Mark as Read</Link>
                                <Link onClick={handleWishlist} className='font-semibold border rounded-md px-5 py-2 duration-300 text-gray-100 border-cyan-500 bg-cyan-500 hover:text-cyan-500 hover:bg-gray-100'>Mark as Wishlist</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BookDetails