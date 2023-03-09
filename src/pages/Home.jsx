import React from 'react';
import Card from './Card';


const Home = () => {

    return (
        <div className={box}>
            <section className={main}>
                <h1 className={header}>You put here your cash and i give you back another cash. And we made deal.</h1>
                <p className={quote}>The best exchange site in the world and of course in ukraine we have no one partner because we are the best of the best of the best.so we need best people in clients. So be best, be beast!</p>

                <Card/>
                <section className={about}>
                    <div className={container}>
                        <div className={content}>
                            <h1 className={contentHeader}>
                                Use Binance for best transfers for best peoples
                            </h1>
                            <h3>Thank you for watching and attention it is just simple api app about currency rates!</h3>
                        </div>
                        
                        <div className={photos}>
                            <img className={photo} src="https://usercontent.one/wp/www.kryptodeals.se/wp-content/uploads/2022/06/Binance-kort.png?media=1659880178" alt="card poster" />
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Home;

//styles
const about = 'py-24 bg-zinc-800 w-full flex justify-center text-white'
const container = 'max-w-[1280px] flex'
const content = 'w-1/2 flex flex-col px-12 justify-center'
const contentHeader = 'text-yellow-400 text-5xl mb-12'
const photos = 'w-1/2 '
const photo = 'scale-[1.5]'

const box = 'flex flex-col flex-auto ma-w-[1280px]'
const main = 'pt-[100px] flex flex-col items-center'
const header = ' text-5xl   mb-3 w-4/5 text-center mb-3'
const quote = 'w-3/5 text-neutral-400 text-center mb-12'

