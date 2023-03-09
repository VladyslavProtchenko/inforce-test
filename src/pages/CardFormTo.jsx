import React, { useEffect, useState } from 'react';
import Select from './Select';


const CardFormTo = ({getData, res, amount}) => {
    const [formLabel, setFormLabel] = useState('')
    const [value, setValue] =  useState('')
    const [currency, setCurrency] =  useState('USD')
    const [focus, setFocus] =  useState(false);
    const [am, setAm] =  useState('')


    useEffect(()=>{
        getData({label:currency, value:value})
        setAm(amount)
    },[currency,amount])
    
    return (
        <div className={cardFrom}>
        <label className={label}>
            From
            <Select options={res} label={setFormLabel} setValue={setValue} setCurrency={setCurrency}/>
        </label>
        
        <label className={label} >
            Amount:
            <input 
                onFocus={()=>{
                    setFocus(true)
                    setValue(amount)
                }}
                onBlur={()=>{
                    setFocus(false)
                    setAm(value)

                }}
                value={formLabel?
                    `${formLabel} ${focus?value:am}`: 
                    `$ ${focus?value:am}`} 

                onChange={(e)=>{
                    setValue(e.target.value.slice(2).replace(/[^0-9.]/g, ''))
                    getData({label:currency, value:e.target.value.slice(2).replace(/[^0-9.]/g, '')})
                }}
                type="text"
                placeholder="amount"
                className={cardInput}
            />
        </label>

    </div>
    );
};

export default CardFormTo;

const cardFrom = 'flex flex-col space-y-4'
const label = 'flex flex-col'
const cardInput = 'border-[.5px] rounded px-5 py-2 outline-none'
