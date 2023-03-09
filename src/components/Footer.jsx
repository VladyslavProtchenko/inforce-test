import React from 'react';

const Footer = () => {
    return (
        <div className={box}>
            <nav className={footer}>
                <div>Thank you for watching!!!</div>
                <div>5375 2352 0431 1540</div>
                <div>Vladyslav25cm@gmail.com</div>
                <div>+380 96 61 00 913</div>
            </nav>
        </div>
    );
};

export default Footer;

const footer = 'py-3 flex space-x-5'
const box = 'flex w-screen justify-center items-center'