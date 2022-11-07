import { MagnifyingGlassCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Results from '../../Results/Results';
import axios from 'axios';
import { API_URL } from '../../const';

type SearchProps = {
    handleTerm?: (newTerm: string) => void
};

const SearchInput = ({handleTerm}: SearchProps) => {

    const [drop, setDrop] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    const dropDownUse = (event: any) => {
        setValue(event.target.value);
        if(handleTerm !== undefined) {
            handleTerm(event.target.value);
        }
    }

    const handleDropDown = (status: boolean) => {
        setDrop(status);
    }

    useEffect( () => {
        if(items.length) {
            setDrop(true);
        }
    },[items]);

    useEffect( () => {
        const delayDebounceFn = setTimeout(() => {
            if( value !== null) {
                axios
                .get(process.env.API_URL + `api/info/algolia/search?query=${value}&limit=12&page=0`)
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
            <div className="shadow-lg flex items-center px-[14px] py-[7px] rounded-2xl border-rose-500 border-2 solid w-full cursor-pointer bg-white">
                <MagnifyingGlassCircleIcon className="h-6 w-6 text-[#da1a32] mr-[15px]" />
                <input className="w-full ff-cg--semibold placeholder:text-[#000000] p-[10px] focus:outline-none" onChange={dropDownUse} type="search" placeholder="What skills do you want to lean today?" />
            </div>
            {/* dropdown */}
            {
                (drop) ? <Results items={items} handleDropDown={handleDropDown} searchTerm={value} /> : ""
            }
        </div>
    )
}

export default SearchInput;