import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import CardForm from './CardForm';
import CardFormTo from './CardFormTo';
import { getAmount } from '../services/rateService';

const Card = () => {
    const [fromData, setFromData] = useState('')
    const [toData, setToData] = useState('')
    const [isConvert, setIsConvert] = useState(false)
    const res = useSelector((state) => state.currency.currency)

    let amount1
    let amount2
    if(isConvert) {
        amount1 = getAmount(fromData, toData.label, res)
        amount2 = getAmount(toData, fromData.label, res)
    }

    return (
        <div className={card}>

            <nav className={cardHeader}>
                <li onClick={()=>setIsConvert(p=>p=!p)} className={isConvert?cardNavItem:cardNavItemActive}>
                    convert
                </li>
                <li onClick={()=>setIsConvert(p=>p=!p)}  className={isConvert?cardNavItemActive:cardNavItem}>
                    send
                </li>
            </nav>

            <div className={cardContent}>

                {isConvert && 
                    <div className={cardForm}>
                        
                        <CardForm res={res} getData={setFromData} amount={amount2}/>

                        <div className={switchBox} >
                        <span class="material-symbols-outlined">swap_horiz</span>
                        </div>

                        <CardFormTo res={res} getData={setToData} amount={amount1}/>
                        
                    </div>
                }

                {!isConvert && 
                    <div className={sendForm}>
                        <nav className={inputs}>
                            <label><p>From:</p> 
                                <input type="text" placeholder='xxxx-xxxx-xxxx-xxxx' className={sendInput}/>
                            </label>
                            <label><p>To:</p>
                                <input type="text" placeholder='xxxx-xxxx-xxxx-xxxx' className={sendInput}/>
                            </label>
                            <label><p>Amount:</p>
                                <input type="text" placeholder='$' className={sendInput}/>
                            </label>
                        </nav>
                        <h1 className={sendDesc}>Transfers in 3-5 minutes</h1>
                    </div>
                }
            </div>

            <div className={cardInfo}>
                <div className={mainInfo}>
                    <div>
                        <h3 >The fast way convert your cash</h3>
                        <h3 className='mb-4'>You will get: {toData.label} {amount1}</h3>
                        <span className={visa}>Visa</span>
                        <span className={mc}>MasterCard</span>
                    </div>
                    
                    {isConvert && <button className={btn}>exchange</button>}
                    {!isConvert && <button className={btn}>send</button>}
                </div>
            </div>
        </div>
    );
};

export default Card;

const sendDesc = 'text-3xl w-1/2 font-bold px-6'
const sendForm ='flex space-y-5'
const inputs ='flex flex-col space-y-5 h-full w-1/2 items-end px-24'
const sendInput = 'border-[1px] border-black px-4 py-2 rounded-xl outline-none'

const visa = 'bg-rose-500 px-2 rounded-xl mx-2 text-white'
const mc = 'bg-blue-500 px-2 rounded-xl mx-2 text-white'

const cardInfo = 'px-12 py-6 flex justify-center'
const mainInfo = 'bg-sky-50 rounded w-4/5 px-5 py-2 text-zinc-600 flex justify-between w-4/6'
const btn = 'bg-zinc-700 px-3 py-2 rounded-xl text-white active:bg-zinc-900 self-end'

const cardForm = 'flex justify-center space-x-7'
const switchBox = ' flex items-center justify-center w-12 h-12 rounded-full border-[0.5px] border-zinc-500 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900 cursor-pointer self-end'

const card = `w-5/6 flex flex-col bg-white rounded-3xl shadow overflow-hidden mb-[200px]`
const cardHeader = 'flex list-none font-bold'
const cardNavItem ='py-2 w-1/2 text-center'
const cardNavItemActive = 'py-2 w-1/2 text-center bg-slate-200 shadow-inner text-zinc-400'
const cardContent = 'px-12 py-12'