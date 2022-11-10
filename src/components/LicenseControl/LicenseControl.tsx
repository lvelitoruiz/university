import React, { useState } from 'react'

type Ilicense = {
    quantity: number
}

export const LicenseControl = ({quantity}: Ilicense) => {

    const [number,setNumber] = useState(quantity);

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const decreaseNumber = () => {
        if(number >= 1) {
            setNumber(number - 1);
        }
    }


    return (
        <div className='flex items-center'>
            <span className='flex bg-[#fdbf38] text-3xl font-bold mr-1 w-6 h-6 justify-center items-center rounded-full cursor-pointer select-none' onClick={() => decreaseNumber()}>-</span>
            <p className='flex text-2xl font-bold w-6 h-6 justify-center items-center'>{number}</p>
            <span className='flex bg-[#fdbf38] text-3xl font-bold ml-1 w-6 h-6 justify-center items-center rounded-full cursor-pointer select-none' onClick={() => increaseNumber()}>+</span>
        </div>
    )
}
