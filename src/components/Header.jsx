import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



const Header = () => {
    const dispatch = useDispatch()


    


    return (
        <div className={box}>
            <nav className={container}>
                <NavLink to='/'  className={logo}>
                    Online shop
                </NavLink>

                <ul className={menu}>
                    
                    <NavLink to='/' className={menuItem} >
                        goods
                    </NavLink>
                    <NavLink to='/' className={menuItem} >
                        contacts
                    </NavLink>
                    <NavLink to='/' className={menuItem} >
                        information
                    </NavLink>
                </ul>


                <ul className={menu}>
                    <NavLink to='/' className={menuItem} >
                        account
                    </NavLink>
                    <NavLink to='/' className={menuItem+' cursor-help'} >
                        help
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

const box = 'flex w-screen justify-center items-center bg-white'
const container = 'w-[1280px] flex justify-between h-auto items-center'
const menu = ' flex'
const menuItem = 'hover:underline px-[22px]'
const logo = 'text-[32px] px-[34px] py-[16px]'