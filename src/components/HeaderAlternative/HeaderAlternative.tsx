import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon, HomeIcon, RectangleStackIcon, ShoppingCartIcon, UserCircleIcon, ComputerDesktopIcon, ClockIcon, BellIcon, BookOpenIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import logo from "../../images/logo-full.png";
import logoIso from "../../images/iso.png";
import Modal from '../Modal/Modal';
import SearchInput from '../SearchInput/SearchInput';
import { Link, navigate } from 'gatsby';
import { CheckoutModal } from '../CheckoutModal/CheckoutModal';

type HeaderProps = {
  isSignIn: boolean,
  handleTerm?: (newTerm: string) => void
};

export const HeaderAlternative = ({ isSignIn, handleTerm }: HeaderProps) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);

  const [optionsOpen, setOptionsOpen] = useState(false);

  const signed = isSignIn;

  const userName = typeof window !== 'undefined' && localStorage.getItem('name');

  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}');

  const handleModal = () => {
    setModalOpen(!modalOpen);
  }

  const handleCheck = () => {
    setCheckOpen(!checkOpen);
  }

  const logOut = () => {
    typeof window !== 'undefined' && localStorage.clear();
    setOptionsOpen(false);
    navigate("/");
  }


  return (
    <div className="bg-path mb-[40px]">
      {
        (!isSignIn) ?
          <section className="">
            <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
              <div className="flex items-center justify-between">
                <div className="lg:hidden">
                  <a className="flex flex-col items-center text-white" href="">
                    <Bars3CenterLeftIcon className="h-12 w-12" />
                  </a>
                </div>
                <div className="">
                  <h1>
                    <Link to='/'>
                      <img className="object-cover hidden lg:block lg:min-w-[332px] lg:h-[60px]" src={logo} alt="" />
                      <img className="object-cover lg:hidden w-[50px] h-[50px]" src={logoIso} alt="" />
                    </Link>
                  </h1>
                </div>
                <div className="hidden lg:block w-full mx-[20px]">
                  <SearchInput handleTerm={handleTerm} />
                </div>
                <div className="hidden lg:block">
                  <nav>
                    <ul className="flex items-center">
                      <li className="mx-[15px]">
                        <Link className="flex flex-col items-center text-white" to="/">
                          <HomeIcon className="h-6 w-6" />
                          <p className="ff-cg--semibold">Home</p>
                        </Link>
                      </li>
                      <li className="mx-[15px]">
                        <Link className="flex flex-col items-center text-white" to="/search">
                          <RectangleStackIcon className="h-6 w-6" />
                          <p className="ff-cg--semibold">Catalog</p>
                        </Link>
                      </li>
                      <li className="mx-[15px]">
                        <Link className="flex flex-col items-center text-white" to="/">
                          <MagnifyingGlassCircleIcon className="h-6 w-6" />
                          <p className="ff-cg--semibold">About</p>
                        </Link>
                      </li>
                      <li className="mx-[15px]">
                        <a className="flex flex-col items-center text-white"  onClick={handleCheck}>
                          <ShoppingCartIcon className="h-8 w-8" />
                        </a>
                      </li>
                      <li className="ml-[15px]">
                        <a className="flex flex-col items-center text-white" href="" onClick={handleModal}>
                          <UserCircleIcon className="h-8 w-8" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="lg:hidden">
                  <a className="flex flex-col items-center text-white" href="">
                    <MagnifyingGlassCircleIcon className="h-12 w-12" />
                  </a>
                </div>
              </div>
            </div>
            {
              (modalOpen) ?
                <Modal handleModal={handleModal} /> : ""
            }
            {
              (checkOpen) ?
                <CheckoutModal handleCheck={handleCheck} /> : ""
            }
          </section> :
          <section className="">
            <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
              <div className="flex items-center justify-between">
                <div className="lg:hidden">
                  <a className="flex flex-col items-center text-white" href="">
                    <Bars3CenterLeftIcon className="h-12 w-12" />
                  </a>
                </div>
                <div className="">
                  <h1>
                    <Link to='/'>
                      <img className="object-cover hidden lg:block lg:min-w-[332px] lg:h-[60px]" src={logo} alt="" />
                      <img className="object-cover lg:hidden w-[50px] h-[50px]" src={logoIso} alt="" />
                    </Link>
                  </h1>
                </div>
                <div className="hidden lg:block w-full mx-[20px]">
                  <SearchInput handleTerm={handleTerm} />
                </div>
                <div className="hidden lg:block">
                  <nav className="w-max">
                    <ul className="flex items-center">
                      <li className="mx-[15px] text-white">
                        <Link className="flex flex-col items-center" to="/learning">
                          <BookOpenIcon className="h-6 w-6" />
                          <p className="ff-cg--semibold whitespace-nowrap">Your Learning</p>
                        </Link>
                      </li>
                      <li className="mx-[15px] text-white">
                        <Link className="flex flex-col items-center" to="/search">
                          <RectangleStackIcon className="h-6 w-6" />
                          <p className="ff-cg--semibold">Catalog</p>
                        </Link>
                      </li>
                      <li className="mx-[15px] text-white">
                        <a className="flex flex-col items-center"  onClick={handleCheck}>
                          <ShoppingCartIcon className="h-8 w-8" />
                        </a>
                      </li>
                      <li className="mx-[15px] text-white">
                        <a className="flex flex-col items-center cursor-pointer">
                          <BellIcon className="h-8 w-8" />
                        </a>
                      </li>
                      <li className="ml-[15px] flex items-center border-2 border-white border-solid rounded-2xl px-4 py-3 cursor-pointer relative">
                        <img className="object-cover w-[30px] h-[30px]" src={logoIso} alt="" onClick={() => { setOptionsOpen(true) }} />
                        <span className="ff-cg--semibold px-2  text-white" onClick={() => { setOptionsOpen(true) }}>{userName}</span>
                        <ChevronDownIcon className="min-h-[24px] min-w-[24px]  text-white" onClick={() => { setOptionsOpen(true) }} />
                        {
                          (optionsOpen) &&
                          <div className='bg-white shadow-xl w-72 absolute h-[362px] top-[100%] right-0 border-2 border-[#222222] border-solid rounded-2xl mt-2' style={{ zIndex: 9999 }}>
                            <div className='flex py-4 px-8 border-b-2 border-[#222222] border-solid'>
                              <img className="object-cover w-[30px] h-[30px]" src={logoIso} alt="" />
                              <div className="ff-cg--semibold px-2">
                                <p>{userName}</p>
                                <p className='text-xs text-gray-400'>{user?.profile.login}</p>
                              </div>
                            </div>
                            <div className='flex py-4 px-8 border-b-2 border-[#222222] border-solid' onClick={() => { setOptionsOpen(false) }}>
                              <span className='ff-cg--semibold'>Edit Profile</span>
                            </div>
                            <div className='flex py-4 px-8 border-b-2 border-[#222222] border-solid' onClick={() => { setOptionsOpen(false) }}>
                              <span className='ff-cg--semibold'>Change Password</span>
                            </div>
                            <div className='flex py-4 px-8 border-b-2 border-[#222222] border-solid' onClick={() => { setOptionsOpen(false) }}>
                              <span className='ff-cg--semibold'>Manage Applications</span>
                            </div>
                            <div className='flex py-4 px-8 border-b-2 border-[#222222] border-solid' onClick={() => { setOptionsOpen(false) }}>
                              <span className='ff-cg--semibold'>Manage Notifications</span>
                            </div>
                            <div className='flex py-4 px-8' onClick={() => logOut()}>
                              <span className='ff-cg--semibold'>Logout</span>
                            </div>
                          </div>

                        }
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="lg:hidden">
                  <a className="flex flex-col items-center text-white" href="">
                    <MagnifyingGlassCircleIcon className="h-12 w-12" />
                  </a>
                </div>
              </div>
            </div>
            {
              (modalOpen) ?
                <Modal handleModal={handleModal} /> : ""
            }
            {
              (checkOpen) ?
                <CheckoutModal handleCheck={handleCheck} /> : ""
            }
          </section>
      }

    </div>
  )
}