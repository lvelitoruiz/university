import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon, HomeIcon, RectangleStackIcon, ShoppingCartIcon, UserCircleIcon, BellIcon, BookOpenIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import logo from "../../images/logo-full.png";
import logoIso from "../../images/iso.png";
import Modal from '../Modal/Modal';
import SearchInput from '../SearchInput/SearchInput';

export const Header = ({ isSignIn }: { isSignIn: boolean }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const signed = isSignIn;

    const userName = typeof window !== 'undefined' && localStorage.getItem('name');

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <section className="bg-white shadow-lg">
            {
                (!signed) ?
                    <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
                        <div className="flex items-center justify-between">
                            <div className="lg:hidden">
                                <a className="flex flex-col items-center" href="">
                                    <Bars3CenterLeftIcon className="h-12 w-12" />
                                </a>
                            </div>
                            <div className="">
                                <h1>
                                    <img className="object-cover hidden lg:block lg:min-w-[332px] lg:h-[60px]" src={logo} alt="" />
                                    <img className="object-cover lg:hidden w-[50px] h-[50px]" src={logoIso} alt="" />
                                </h1>
                            </div>
                            <div className="hidden lg:block w-full mx-[20px]">
                                <SearchInput />
                            </div>
                            <div className="hidden lg:block">
                                <nav>
                                    <ul className="flex items-center">
                                        <li className="mx-[15px]">
                                            <a className="flex flex-col items-center" href="">
                                                <HomeIcon className="h-6 w-6" />
                                                <p className="ff-cg--semibold">Home</p>
                                            </a>
                                        </li>
                                        <li className="mx-[15px]">
                                            <a className="flex flex-col items-center" href="">
                                                <RectangleStackIcon className="h-6 w-6" />
                                                <p className="ff-cg--semibold">Catalog</p>
                                            </a>
                                        </li>
                                        <li className="mx-[15px]">
                                            <a className="flex flex-col items-center" href="">
                                                <MagnifyingGlassCircleIcon className="h-6 w-6" />
                                                <p className="ff-cg--semibold">About</p>
                                            </a>
                                        </li>
                                        <li className="mx-[15px]">
                                            <a className="flex flex-col items-center" href="">
                                                <ShoppingCartIcon className="h-8 w-8" />
                                            </a>
                                        </li>
                                        <li className="ml-[15px]">
                                            <a className="flex flex-col items-center cursor-pointer" onClick={handleModal}>
                                                <UserCircleIcon className="h-8 w-8" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="lg:hidden">
                                <a className="flex flex-col items-center" href="">
                                    <MagnifyingGlassCircleIcon className="h-12 w-12" />
                                </a>
                            </div>
                        </div>
                        {
                            (modalOpen) ?
                                <Modal handleModal={handleModal} /> : ""
                        }
                    </div> :
                    <section className="bg-white shadow-lg">
                        <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
                            <div className="flex items-center justify-between">
                                <div className="lg:hidden">
                                    <a className="flex flex-col items-center" href="">
                                        <Bars3CenterLeftIcon className="h-12 w-12" />
                                    </a>
                                </div>
                                <div className="">
                                    <h1>
                                        <img className="object-cover hidden lg:block min-w-[60px] min-h-[60px]" src={logoIso} alt="" />
                                        <img className="object-cover lg:hidden w-[50px] h-[50px]" src={logoIso} alt="" />
                                    </h1>
                                </div>
                                <div className="hidden lg:block pr-5 pl-10 w-full">
                                    <SearchInput />
                                </div>
                                <div className="hidden lg:block">
                                    <nav className="w-max">
                                        <ul className="flex items-center">
                                            <li className="mx-[15px]">
                                                <a className="flex flex-col items-center" href="">
                                                    <BookOpenIcon className="h-6 w-6" />
                                                    <p className="ff-cg--semibold whitespace-nowrap">Your Learning</p>
                                                </a>
                                            </li>
                                            <li className="mx-[15px]">
                                                <a className="flex flex-col items-center" href="">
                                                    <RectangleStackIcon className="h-6 w-6" />
                                                    <p className="ff-cg--semibold">Catalog</p>
                                                </a>
                                            </li>
                                            <li className="mx-[15px]">
                                                <a className="flex flex-col items-center" href="">
                                                    <ShoppingCartIcon className="h-8 w-8" />
                                                </a>
                                            </li>
                                            <li className="mx-[15px]">
                                                <a className="flex flex-col items-center cursor-pointer">
                                                    <BellIcon className="h-8 w-8" />
                                                </a>
                                            </li>
                                            <li className="ml-[15px] flex items-center border-2 border-[#222222] border-solid rounded-2xl px-4 py-3 cursor-pointer">
                                                <img className="object-cover w-[30px] h-[30px]" src={logoIso} alt="" />
                                                <span className="ff-cg--semibold px-2">{userName}</span>
                                                <ChevronDownIcon className="min-h-[24px] min-w-[24px]" />
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="lg:hidden">
                                    <a className="flex flex-col items-center" href="">
                                        <MagnifyingGlassCircleIcon className="h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </section>
    )
}


export default Header;