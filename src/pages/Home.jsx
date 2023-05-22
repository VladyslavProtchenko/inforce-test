import React, { useEffect, useState } from 'react';
import { useGetGoodsQuery } from '../redux/goodsApi';
import Loader from '../components/Loader';
import GoodsCard from './GoodsCard';
import AddProduct from '../components/AddProduct';



const Home = () => {
    const { data } = useGetGoodsQuery()
    const [goods, setGoods] = useState(null);
    const [addModal, setAddModal ] = useState(false);
    const [nameSort, setNameSort ] = useState(true);
    const [rateSort, setRateSort ] = useState(false);

    function deleteItem(id) {
        setGoods(goods.filter(item => item.id!== id));
    }

    function addNewGood(data) {
        const newEl = {
            id:goods.length + 1,
            title: data.goodTitle,
            description: data.goodDesc,
            price: data.goodPrice,
            image: data?.image,
            category: data.goodCategory
        }
        setGoods([...goods, newEl])
    }

    useEffect(() => {
        setGoods(data)
    },[data])

    return (
        goods
        ?
        <div className={box}>
            {addModal && <AddProduct setAddModal={setAddModal} addNew={addNewGood}/>}

            <div className={addMenu}>
                <div className="hover-menu">
                    Sort By:
                    <div className="hover-sub-menu">
                        <div 
                            onClick={()=>{
                                setNameSort(true);
                                setRateSort(false);
                            }} 
                            className={nameSort ? sortByName+ 'text-red-500' :sortByName }
                        > Name</div>
                        <div 
                            onClick={()=>{
                                setNameSort(false);
                                setRateSort(true);
                            }} 
                            className={rateSort ? sortByPrice+ 'text-red-500' :sortByPrice}
                        >Count</div>
                    </div>
                </div>
            </div>

            <div className={addMenu}>
                <h3>Add New Product:</h3>
                <button 
                    onClick={() => setAddModal(true)}
                    className='bg-blue-100 px-3 hover:bg-blue-200 cursor-pointer'
                >Add</button>
            </div>

            <section className={main}>
                {nameSort? [...goods].sort((a, b) => a.title.localeCompare(b.title)).map(item =>(
                    <GoodsCard id={item.id} deleteItem={deleteItem} key={item.id} title={item.title} category={item.category} description={item.description} image={item.image} price={item.price} rating={item.rating} />
                )):
                [...goods].sort((a,b)=>b.rating.count-a.rating.count).map(item =>(
                    <GoodsCard id={item.id} deleteItem={deleteItem} key={item.id} title={item.title} category={item.category} description={item.description} image={item.image} price={item.price} rating={item.rating} />
                ))}
            </section>
        </div>

        :<Loader/>
        
    );
};

export default Home;


//styles
const sortByName = ''
const sortByPrice = ''
const addMenu = 'flex space-x-4 border-b-2 pt-1'
const box = 'flex flex-col flex-auto max-w-[1280px] w-full'
const main = 'pt-[100px] flex flex-col items-center  '


