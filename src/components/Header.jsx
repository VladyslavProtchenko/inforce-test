import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetSwapDataQuery } from '../redux/swapApi';
import { sortData } from '../redux/swapSlice';


const Header = () => {
    const dispatch = useDispatch()
    const {data} = useGetSwapDataQuery()
    const res = useSelector((state) => state.currency.currency)
    dispatch(sortData(data))
    


    return (
        <div className={box}>
            <nav className={container}>
                <NavLink to='/'  className={logo}>
                    swap cash
                </NavLink>

                <ul className={menu}>
                    
                    <NavLink to='/' className={menuItem} >
                        exchange
                    </NavLink>
                    <NavLink to='/' className={menuItem} >
                        about
                    </NavLink>
                </ul>

                <ul  className={menu}>
                    <li className={currItem}>
                        {res ? `$ ${res[2].rate.toFixed(2)}` : '$'}
                    </li>
                    <li className={currItem}>
                    {res ? `€ ${res[1].rate.toFixed(2)}` : '€'}
                    </li>
                    <li className={currItem}>
                    {res? `₤ ${res[0].rate.toFixed(2)}`: '₤'}
                    </li>
                </ul>

                <ul className={menu}>
                    <NavLink to='/' className={menuItem} >
                        account
                    </NavLink>
                    <NavLink to='/' className={menuItem} >
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
const currItem = 'px-3 mx-1 border rounded-full cursor-pointer'
const logo = 'text-[32px] px-[34px] py-[16px]'