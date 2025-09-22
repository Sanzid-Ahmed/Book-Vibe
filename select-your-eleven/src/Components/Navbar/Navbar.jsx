import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dolar-1.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar w-10/12 mx-auto">
                <div className="flex-1">
                    <a className="e-[60px] h-[60px]"><img src={navImg} alt="" /></a>
                </div>
                <div className='flex items-center gap-x-2'>
                    <span>0</span>
                    <span> Coin</span>
                    <img className="e-[30px] h-[30px]" src={dollarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;