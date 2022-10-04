import { MagnifyingGlassCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Results from '../../Results/Results';
import axios from 'axios';

const SearchInput = () => {

    const [drop, setDrop] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    const dropDownUse = (event: any) => {
        setValue(event.target.value);
        setDrop(!drop)
    }

    useEffect( () => {
        const delayDebounceFn = setTimeout(() => {
            if( value !== null) {
                axios
                .get(`https://accelered-api.whiz.pe/api/info/algolia/search?${value}`)
                .then((response) => {
                    // setUserInfo(response.data);
                    setItems(response.data.data.hits);
                }).catch(function (error) {
                    console.log(error);
                });
            }
          }, 500)
      
          return () => clearTimeout(delayDebounceFn)
    }, [value] );

    return (
        <div className="relative">
            <div className="shadow-lg flex items-center px-[14px] py-[7px] rounded-2xl border-rose-500 border-2 solid w-full cursor-pointer">
                <MagnifyingGlassCircleIcon className="h-6 w-6 text-[#da1a32] mr-[15px]" />
                <input className="w-full ff-cg--semibold placeholder:text-[#000000] p-[10px] focus:outline-none" onChange={dropDownUse} type="search" placeholder="What skills do you want to lean today?" />
            </div>
            {/* dropdown */}
            {
                (items.length) ? <Results items={items} /> : ""
            }
        </div>
    )
}

export default SearchInput;