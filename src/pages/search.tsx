import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { 
  MagnifyingGlassCircleIcon,
  Bars3CenterLeftIcon,
  HomeIcon,
  RectangleStackIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  BookOpenIcon,
  ClockIcon,
  ChevronRightIcon,
  AdjustmentsVerticalIcon,
  Bars3Icon,
  Squares2X2Icon,
  ArrowLeftCircleIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline'
import logo from "../images/logo-full.png";
import logoWhite from "../images/logo-white.png";
import logoIso from "../images/iso.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import product4 from "../images/product-4.png";
import product5 from "../images/product-5.png";
import Header from "../components/Header/Header";

const Search = () => {

  const [sidebar,setSidebar] = useState(true);
  const [grid,setGrid] = useState(false);

  // useEffect( () => {
  //   setDrop(true);
  // }, []);

  const sidebarShow = () => {
    setSidebar(true)
  }

  const sidebarHide = () => {
    setSidebar(false)
  }

  const showGrid = () => {
    setGrid(true);
  }

  const hideGrid = () => {
    setGrid(false);
  }

  return (
    <Layout>
      <div className="bg-slate-50">
        {/* header */}
        
        <Header isSignIn={false} />

        {/* title */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="lg:flex items-center justify-between">
            <div>
              <h2 className="text-[30px] leading-[30px] lg:leading-10 mb-3 lg:text-[40px] ff-cg--semibold">200 results for cybersecurity</h2>
              <p className="flex flex-wrap items-start items-center text-base ff-cg--semibold">
                <span className="mr-3">Topic related:</span>
                <p className="flex flex-wrap items-start items-center text-base ff-cg--semibold">
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Data Science</span>
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Machine Learning</span>
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Flask</span>
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Web Scraping</span>
                  <span className="text-red-500 pr-3 mr-3">Programming Fundamentals</span>
                </p>
              </p>
            </div>
            <div>
              <div className="flex items-center justify-end">
                <button className="hidden lg:flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[30px]" onClick={() => sidebarShow()}>
                  <AdjustmentsVerticalIcon className="h-6 w-6"/>
                  <span className="ff-cg--semibold ml-[20px]">Show Filters</span>
                </button>
                <button className={`hidden md:flex items-center justify-between border border-[#222222] py-2 px-2 rounded-xl mt-[30px] ml-8 ${ !grid ? "text-white bg-[#222222] " : ""}`} onClick={() => hideGrid()}>
                  <Bars3Icon className="h-6 w-6"/>
                </button>
                <button className={`hidden md:flex items-center justify-between border border-[#222222] py-2 px-2 rounded-xl mt-[30px] ml-8 ${ grid ? "text-white bg-[#222222] " : ""}`} onClick={() => showGrid()}>
                  <Squares2X2Icon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* content */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            {
              (sidebar) ?
              <div className="lg:col-span-3">
                {/* filter */}
                <div className="bg-amber-400 lg:bg-red-500 h-full p-[15px] rounded-2xl mb-[40px] relative">
                  <button className="bg-white shadow-lg py-2 px-2 rounded-lg absolute right-[-18px] top-[28px] hidden lg:inline-block" onClick={() => sidebarHide()}>
                    <ArrowLeftCircleIcon className="h-5 w-5"/>
                  </button>
                  <p className="lg:text-white lg:text-[30px] ff-cg--semibold lg:py-[10px]">Filters</p>
                  <div className="hidden lg:block">
                    <div className="flex items-center border-b solid pb-[10px] border-red-300">
                      <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                        <BookOpenIcon className="h-5 w-5 text-white"/>
                      </div>
                      <p className="ff-cg--semibold text-white ml-[6px]">Ways to Learn</p>
                    </div>
                    <div className="flex pt-[14px] pb-[24px]">
                      <div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault1">
                            All
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault2">
                            Courses
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault3">
                            Certificates
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault4">
                            Learning Paths
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center border-b solid pb-[10px] border-red-300">
                      <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                        <BookOpenIcon className="h-5 w-5 text-white"/>
                      </div>
                      <p className="ff-cg--semibold text-white ml-[6px]">Ways to Learn</p>
                    </div>
                    <div className="flex pt-[14px] pb-[24px]">
                      <div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault5" checked/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault5">
                            All
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault6"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault6">
                            Courses
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault7"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault7">
                            Certificates
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault8"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault8">
                            Learning Paths
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center border-b solid pb-[10px] border-red-300">
                      <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                        <BookOpenIcon className="h-5 w-5 text-white"/>
                      </div>
                      <p className="ff-cg--semibold text-white ml-[6px]">Skill Level</p>
                    </div>
                    <div className="flex pt-[14px] pb-[24px]">
                      <div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault9" checked/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault9">
                            All
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault10"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault10">
                            Courses
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault11"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault11">
                            Certificates
                          </label>
                        </div>
                        <div className="mb-[13px] flex items-center">
                          <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault12"/>
                          <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault12">
                            Learning Paths
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : ""
            }

            <div className={`${sidebar ? "lg:col-span-9" : "lg:col-span-12"}`}>
              {
                (grid) ?
                <div className="grid gap-4 lg:gap-10 md:grid-cols-12">
                  <div className="md:col-span-6 lg:col-span-4">
                    <div>
                      <div className="relative">
                        <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                        <img className="w-full object-cover h-[50px] h-[160px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                      </div>
                      <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                        <div>
                          <div className="flex items-center gap-4 mb-[16px]">
                            <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]">
                              <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                            </span>
                            <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Course</span>
                            </span>
                          </div>
                          <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                          <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold text-[20px]">$199.00</p>
                          <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-4">
                    <div>
                      <div className="relative">
                        <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                        <img className="w-full object-cover h-[50px] h-[160px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                      </div>
                      <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                        <div>
                          <div className="flex items-center gap-4 mb-[16px]">
                            <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]">
                              <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                            </span>
                            <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Course</span>
                            </span>
                          </div>
                          <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                          <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold text-[20px]">$199.00</p>
                          <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-4">
                    <div>
                      <div className="relative">
                        <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                        <img className="w-full object-cover h-[50px] h-[160px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                      </div>
                      <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                        <div>
                          <div className="flex items-center gap-4 mb-[16px]">
                            <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]">
                              <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                            </span>
                            <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Course</span>
                            </span>
                          </div>
                          <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                          <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold text-[20px]">$199.00</p>
                          <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-4">
                    <div>
                      <div className="relative">
                        <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                        <img className="w-full object-cover h-[50px] h-[160px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                      </div>
                      <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                        <div>
                          <div className="flex items-center gap-4 mb-[16px]">
                            <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]">
                              <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                            </span>
                            <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Course</span>
                            </span>
                          </div>
                          <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                          <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold text-[20px]">$199.00</p>
                          <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-4">
                    <div>
                      <div className="relative">
                        <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                        <img className="w-full object-cover h-[50px] h-[160px] rounded-3xl bg-slate-300" src={ product4 } alt="" />
                      </div>
                      <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                        <div>
                          <div className="flex items-center gap-4 mb-[16px]">
                            <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]">
                              <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                            </span>
                            <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Course</span>
                            </span>
                          </div>
                          <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                          <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold text-[20px]">$199.00</p>
                          <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-4">
                    <div>
                      <div className="relative">
                        <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                        <img className="w-full object-cover h-[50px] h-[160px] rounded-3xl bg-slate-300" src={ product5 } alt="" />
                      </div>
                      <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                        <div>
                          <div className="flex items-center gap-4 mb-[16px]">
                            <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]">
                              <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                            </span>
                            <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Course</span>
                            </span>
                          </div>
                          <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                          <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold text-[20px]">$199.00</p>
                          <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> :
                 <div className="hidden md:grid gap-4 lg:gap-10 md:grid-cols-12">
                    <div className="md:col-span-12 lg:col-span-12">
                      <div className="rounded-3xl bg-white flex shadow-lg relative items-center">
                        <div className="relative w-[200px]">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="w-[200px] object-cover h-[50px] h-[150px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                        </div>
                        <div className="pl-8 p-5 flex items-center justify-between w-full">
                          <div>
                            <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <p className="mb-[10px]">Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                            <div className="flex items-center">
                              <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">Course</span>
                              </span>
                            </div>
                          </div>
                          <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-[5px] px-[16px] rounded-2xl ml-[20px]">
                            <span className="ff-cg--bold leading-none text-[24px]">$199</span>
                            <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12 lg:col-span-12">
                      <div className="rounded-3xl bg-white flex shadow-lg relative items-center">
                        <div className="relative w-[200px]">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="w-[200px] object-cover h-[50px] h-[150px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                        </div>
                        <div className="pl-8 p-5 flex items-center justify-between w-full">
                          <div>
                            <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <p className="mb-[10px]">Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                            <div className="flex items-center">
                              <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">Course</span>
                              </span>
                            </div>
                          </div>
                          <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-[5px] px-[16px] rounded-2xl ml-[20px]">
                            <span className="ff-cg--bold leading-none text-[24px]">$199</span>
                            <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12 lg:col-span-12">
                      <div className="rounded-3xl bg-white flex shadow-lg relative items-center">
                        <div className="relative w-[200px]">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="w-[200px] object-cover h-[50px] h-[150px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                        </div>
                        <div className="pl-8 p-5 flex items-center justify-between w-full">
                          <div>
                            <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <p className="mb-[10px]">Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                            <div className="flex items-center">
                              <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">Course</span>
                              </span>
                            </div>
                          </div>
                          <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-[5px] px-[16px] rounded-2xl ml-[20px]">
                            <span className="ff-cg--bold leading-none text-[24px]">$199</span>
                            <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12 lg:col-span-12">
                      <div className="rounded-3xl bg-white flex shadow-lg relative items-center">
                        <div className="relative w-[200px]">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="w-[200px] object-cover h-[50px] h-[150px] rounded-3xl bg-slate-300" src={ product4 } alt="" />
                        </div>
                        <div className="pl-8 p-5 flex items-center justify-between w-full">
                          <div>
                            <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <p className="mb-[10px]">Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                            <div className="flex items-center">
                              <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">Course</span>
                              </span>
                            </div>
                          </div>
                          <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-[5px] px-[16px] rounded-2xl ml-[20px]">
                            <span className="ff-cg--bold leading-none text-[24px]">$199</span>
                            <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12 lg:col-span-12">
                      <div className="rounded-3xl bg-white flex shadow-lg relative items-center">
                        <div className="relative w-[200px]">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="w-[200px] object-cover h-[50px] h-[150px] rounded-3xl bg-slate-300" src={ product5 } alt="" />
                        </div>
                        <div className="pl-8 p-5 flex items-center justify-between w-full">
                          <div>
                            <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <p className="mb-[10px]">Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                            <div className="flex items-center">
                              <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                              <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">Course</span>
                              </span>
                            </div>
                          </div>
                          <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-[5px] px-[16px] rounded-2xl ml-[20px]">
                            <span className="ff-cg--bold leading-none text-[24px]">$199</span>
                            <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              }

              {/* pagination */}
              <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mt-10">
                <div className="md:col-span-12 lg:col-span-12">
                  <div className="flex items-center justify-center">
                    <a href="">
                      <ChevronLeftIcon className="h-6 w-6"/>
                    </a>
                    <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-white bg-[#222222] w-10 h-10 rounded-xl">
                      <span>1</span>
                    </button>
                    <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-white text-[#222222] w-10 h-10 rounded-xl">
                      <span>2</span>
                    </button>
                    <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-white text-[#222222] w-10 h-10 rounded-xl">
                      <span>3</span>
                    </button>
                    <a href="">
                      <ChevronRightIcon className="h-6 w-6"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright ?? 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Search;
