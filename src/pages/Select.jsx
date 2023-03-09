import React, { useState } from 'react';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';

const Select = ({options, label,setCurrency}) => {

    const [index, setIndex] = useState('$ USD');
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={select}  onClick={()=>setIsOpen(prev => prev = !prev)}>

            <h1 className={main}>
                {index} { isOpen?<BiChevronDown />: <BiChevronUp /> }
            </h1>

            <ul className={isOpen?optionsBox:closed}>
                {options && options.map(item=> (
                    <li 
                        key={item.cc} 
                        className={option}
                        onClick={(e)=>{
                            e.stopPropagation()
                            setIsOpen(false)
                            setIndex(`${item.label} ${item.cc}`)
                            label(item.label)
                            setCurrency(item.cc)
                        }}
                    >
                    {`${item.label} ${item.cc}`}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Select;

const select = 'font-medium relative flex min-w-[100px] w-full self-start border-[1px] rounded'
const main = 'bg-white w-full p-2 px-4 flex items-center justify-between rounded-xl'
const optionsBox = ' shadow mt-[2px] top-[100%] absolute bg-white w-full rounded overflow-scroll max-h-[200px]'
const option = 'py-2 hover:bg-sky-50 px-4 cursor-pointer '

const closed = 'hidden'