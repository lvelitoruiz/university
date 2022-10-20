import { ClockIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../const';

type pinObject = {
    uuid: string
}

export const Pinneds = ( {uuid}: pinObject ) => {

    const [item,setItem] = useState<any>()

    useEffect( () => {
          axios
          .get(API_URL + `api/info/algolia/search?query=${uuid}&limit=12&page=0`)
            .then((response) => {
              console.log('***** got the data ***', response?.data?.data);
              setItem(response?.data?.data?.hits[0]);
            }).catch(function (error) {
              console.log('[DEBUG]', error);
            });
      }, []);

      useEffect( () => {
        console.log('from component: ***** ',item);
      },[item])

    return(
        <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
          {
            (item !== undefined) &&
            <Link to={`/courses/${item.slug}`} state={{id: item.title, course: item}}>
                <div className="relative">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                <img className="object-cover w-full h-[250px] rounded-3xl bg-slate-300" src={ item.imgUrl } alt="" />
                <div className="absolute w-full h-full z-100 flex items-center justify-center top-0 flex-col">
                    <p className="text-white">In partnership with:</p>
                    <img className="w-12 object-cover h-12 bg-slate-300" src={item.sponsor.imgUrl} alt="" />
                </div>
                </div>
                <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                <div>
                    <div className="flex items-center gap-4 mb-[10px]">
                    {
                        item.categories.map((category: any, index: number) => {
                        return (
                            <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px] mr-2" key={index}>
                            <span className="ff-cg--semibold text-[12px]">{category.name}</span>
                            </span>
                            )
                        })
                    }
                    </div>
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mb-[10px]">{item.title}</h4>
                    <p>{item.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold text-[20px]">$199.00</p>
                    <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                    <ClockIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                    </span>
                </div>
                </div>
            </Link>
          }
        </div>
      )
}
