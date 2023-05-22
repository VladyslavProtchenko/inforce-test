import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const GoodsView = () => {
    const { id } = useParams();
    const {image, title, description, category, price, rating, deleteItem  } = JSON.parse(localStorage.getItem('good')?? '')
    const [isDelete, setIsDelete] = useState(false)


    return (
        <div className={container} style={{backgroundImage:`url(${image})`}}>
            <div className={content}>
                <h2 className={header}>{title}</h2>
                <h3 className={cat}>{category}</h3>
                <p className={desc}>{description}</p>
                <h4 className={pr}>${price}</h4>

                <div className={rate}>
                    <span>Reting: {rating?.rate}</span>
                    <span>&#10084;	 {rating?.count}</span>
                </div>

                <button onClick={()=>setIsDelete(true)} className={del}>X</button>
            </div>

            <div className={isDelete? deleteModal: 'hidden'}>
                <div className=" bg-gray-100 p-6 rounded-lg">
                    <h2>are ypu sure? </h2>

                    <button onClick={()=>deleteItem(id)} className={btn}>
                        accept
                    </button>
                    <button onClick={()=>setIsDelete(false)} className={btn2}>
                        decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsView;

//styles
const deleteModal = "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
const btn = 'mr-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg'
const btn2 = 'bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg'
const del = 'absolute top-3 right-6'
const rate = ' self-end text-white space-x-2' 
const pr = 'text-teal-400 self-start'
const desc = 'text-zinc-200 italic text-start mb-6'
const cat = 'self-end text-zinc-200'
const header = "text-4xl"
const content = "w-full bg-black p-16 bg-opacity-50 text-white text-center flex flex-col"
const container = 'my-6 bg-contain bg-no-repeat bg-center relative bg-white w-full h-full flex flex-col justify-center items-center'