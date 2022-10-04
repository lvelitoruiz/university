import { MagnifyingGlassCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, SearchBox } from 'react-instantsearch-hooks-web';
import Results from '../../Results/Results';

const SearchInput = () => {
    const [drop, setDrop] = useState(false);
    const dropDownUse = () => {
        setDrop(!drop)
    }

    const searchClient = algoliasearch('LWAY339BKH', '03e5404ae50a4f677fe04dab85d0b2ed');

    return (
        <InstantSearch searchClient={searchClient} indexName="index_courses">
            <div className="relative">
                <div className="shadow-lg flex items-center px-[14px] py-[7px] rounded-2xl border-rose-500 border-2 solid w-full cursor-pointer">
                    {/* <MagnifyingGlassCircleIcon className="h-6 w-6 text-[#da1a32] mr-[15px]" /> */}
                    {/* <input className="w-full ff-cg--semibold placeholder:text-[#000000] p-[10px] focus:outline-none" onFocus={() => dropDownUse()} onBlur={() => dropDownUse()} type="search" placeholder="What skills do you want to lean today?" /> */}
                    <SearchBox classNames={{
                        root: 'flex w-full',
                        form: 'flex w-full flex-row-reverse',
                        input: 'w-full ff-cg--semibold placeholder:text-[#000000] p-[10px] focus:outline-none',
                        submitIcon: 'h-4 w-4 fill-[#da1a32] mr-[15px]',
                        resetIcon: 'h-3 w-3 fill-[#da1a32] mr-[15px]'}} />
                    <RefinementList attribute="id" />
                </div>
                {/* dropdown */}
                <Results />
                <div className={`absolute left-0 right-0 top-[70px] rounded-2xl z-10 max-h-0 overflow-hidden ${drop ? "max-h-[1200px] shadow-lg" : ""}`}>
                    <div className="rounded-2xl bg-white w-full p-4">
                        <div className="border-b mb-4">
                            <div className="mb-4">
                                <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Suggestions</p>
                            </div>
                            <div className="flex flex-col">
                                <a href="" className="mb-3">CompTIA Security+ (SY-601)</a>
                                <a href="" className="mb-3">Network Security</a>
                                <a href="" className="mb-3">OT Cybersecurity</a>
                            </div>
                        </div>
                        <div className="border-b mb-4">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Courses</p>
                                <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                    <span>See All</span>
                                    <ChevronRightIcon className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="" className="mb-3">Network Security</a>
                                <a href="" className="mb-3">OT Cybersecurity</a>
                            </div>
                        </div>
                        <div className="border-b mb-4">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Certificates</p>
                                <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                    <span>See All</span>
                                    <ChevronRightIcon className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="" className="mb-3">Network Security</a>
                                <a href="" className="mb-3">OT Cybersecurity</a>
                            </div>
                        </div>
                        <div className="border-b mb-4">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Learning Path</p>
                                <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                    <span>See All</span>
                                    <ChevronRightIcon className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a href="" className="mb-3">Network Security</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a className="text-base lg:text-[20px] flex items-center justify-center text-red-500 ff-cg--semibold" href="">
                                <span>See All Results</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </InstantSearch>
    )
}

export default SearchInput;