import React from 'react';
import bookimage from "../../assets/books.jpg";

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-10'>
            <div>
                <h1 className='text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                <button className='btn btn-primary mt-5'>test test</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;