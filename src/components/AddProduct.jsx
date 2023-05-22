import React, { useState } from 'react';

const AddProduct = ( {setAddModal, addNew} ) => {
    const [isOn, setIsOn] = useState(false)
    const [goodTitle, setGoodTitle] = useState("")
    const [goodCategory, setGoodCategory] = useState('Men\'s clothing')
    const [goodPrice, setGoodPrice] = useState("")
    const [goodDesc, setGoodDesc] = useState("")

    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Add new product</h1>

                <input  
                    value={goodTitle} 
                    onChange={(e)=>{setGoodTitle(e.target.value)}} 
                    placeholder="title" 
                    className='border-[1px] mb-2 rounded px-2 outline-none'
                />

                <div className={selectCategory}>
                    <h2 onClick={()=>setIsOn(!isOn)} className=' px-4'>{goodCategory}</h2>
                    <ul className={isOn? submenu: 'hidden'} onClick={()=>setIsOn(false)}>
                        <li onClick={()=>{setGoodCategory('Mens clothing')}} className={menuItem}>Mens clothing</li>
                        <li  onClick={()=>{setGoodCategory('Jewelry')}}  className={menuItem}> Jewelry</li>
                        <li onClick={()=>{setGoodCategory('Electronics')}}  className={menuItem}>Electronics</li>
                        <li  onClick={()=>{setGoodCategory('Women\'s Clothing')}}  className={menuItem}>Women's Clothing</li>
                    </ul>
                </div>

                <input value={goodPrice} onChange={(e)=>{setGoodPrice(e.target.value)}} className={setPrice} type="text" placeholder="set price" />
                <textarea value={goodDesc} onChange={(e)=>{setGoodDesc(e.target.value)}} className={textarea} placeholder="set description" name="description-text" id="description-text"></textarea>
                
                <div className={buttons}>
                    <button 
                        onClick={()=>{
                            setAddModal(false)
                            addNew({goodTitle, goodCategory, goodPrice, goodDesc})
                        }}
                        className={btn}
                    >Submit</button>
                    <button onClick={()=>setAddModal(false)} className={btn2}>Cancel</button>
                </div>
                
            </div>
        </div>
    );
};

export default AddProduct;

//styles 
const btn = 'bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg'
const btn2 = 'bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg'
const buttons ='  flex space-x-4'
const setPrice = 'border-[1px] rounded mb-2 px-2'
const textarea = 'border-[1px] rounded mb-2 px-2'
const selectCategory = 'mb-2 text-sm border-[1px] cursor-pointer relative rounded'
const menuItem = 'cursor-pointer hover:opacity-50'
const submenu = 'text-sm px-4 rounded-b-lg py-2 absolute bg-white border-[1px] w-full border-t-none'
const title = 'text-xl mb-3 text-gray-800'
const content = 'bg-white rounded-lg p-10 flex flex-col'
const container = ' bg-black bg-opacity-70 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen w-screen z-50'