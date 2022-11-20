import React, { useState } from 'react';
import { changeQuantity } from '../../helpers/cart';

type Ilicense = {
    quantity: number,
    uuid: string
}

export const LicenseControl = ({quantity, uuid}: Ilicense) => {

    const [number,setNumber] = useState(quantity);

    const increaseNumber = async () => {
        setNumber(number + 1)
        await changeQuantity(number,uuid).then( response => {
            console.log('response: *** ', response);
        });
    }

    const decreaseNumber = async () => {
        if(number >= 1) {
            setNumber(number - 1);
            await changeQuantity(number,uuid).then( response => {
                console.log('response: *** ', response);
            });
        };
    }


    return (
        <div className='flex items-center'>
            <span className='flex bg-[#fdbf38] text-3xl font-bold mr-1 w-6 h-6 justify-center items-center rounded-full cursor-pointer select-none' onClick={() => decreaseNumber()}>-</span>
            <p className='flex text-2xl font-bold w-6 h-6 justify-center items-center'>{number}</p>
            <span className='flex bg-[#fdbf38] text-3xl font-bold ml-1 w-6 h-6 justify-center items-center rounded-full cursor-pointer select-none' onClick={() => increaseNumber()}>+</span>
        </div>
    )
}
