import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const GoodsCard = ({image, title, description, category, price, rating,id, deleteItem  }) => {
    const [isDelete, setIsDelete] = useState(false)

    const navigate = useNavigate()
    function showMore(id) {
        const shownGood={
            image:image,
            title:title,
            description:description,
            category:category,
            price:price,
            rating:rating,
            id:id
        }
        navigate(`/${id}`)
        localStorage.setItem('good', JSON.stringify(shownGood));
    }

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
                <button  onClick={()=>showMore(id)} className={showDetails}>Show Details</button>
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

export default GoodsCard;


//styles
const deleteModal = "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
const btn = 'mr-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg'
const btn2 = 'bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg'
const del = 'absolute top-3 right-6 text-white '
const showDetails = 'text-white '
const rate = ' self-end  space-x-2' 
const pr = 'text-teal-400 self-start'
const desc = 'italic text-white text-start mb-6'
const cat = 'self-end text-zinc-200'
const header = "text-4xl text-white"
const content = "w-full  p-16 py-24 bg-black bg-opacity-50  text-center flex flex-col"
const container = 'my-6 bg-contain bg-no-repeat bg-bottom relative bg-white w-full h-full flex flex-col justify-center items-center'