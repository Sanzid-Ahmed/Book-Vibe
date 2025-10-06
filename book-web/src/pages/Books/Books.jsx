import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

// const Books = () => {
const Books = ({ data }) => {

    const [allBooks, setAllBooks] = useState([]);


    /*
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json()).then(data =>{
            setAllBooks(data)
        })
    })
    */

    /*
    const bookPromise = fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json())
    */

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <div className='grid grid-cols-3 gap-10'>
                <Suspense fallback={<span>Loading ....</span>}>
                    {/* <Book bookPromise={bookPromise}></Book> */}
                    {
                        data.map((singleBook) => <Book key={singleBook.Id} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;