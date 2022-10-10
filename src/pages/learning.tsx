import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { 
  ClockIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline'

import logo from "../images/logo-full.png";
import logoWhite from "../images/logo-white.png";
import Header from "../components/Header/Header";
import product1 from "../images/product-1.png";

const Learning = () => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const [signed,setSigned] = useState(false);

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    }
  },[userName]);

  return (
    <Layout>
      <div className="bg-slate-50">
        <Header isSignIn={signed} />

        {/* Title tab */}
        <section className="container px-[15px] mx-auto">
          <div className="mt-10  mb-10 flex lg:items-center justify-between flex-col lg:flex-row">
            <h3 className="text-[20px] lg:text-[40px] mb-6 lg:mb-0">Your <span className="ff-cg--semibold">Learning</span></h3>
            <div className="flex items-center overflow-x-auto">
              <div className="flex items-center flex-col cursor-pointer">
                <p className="ff-cg--semibold pb-3 px-10 whitespace-nowrap">Upcoming</p>
                <span className="border-b border-solid w-full border-[#da1a32] border-2"></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer">
                <p className="pb-3 px-10 whitespace-nowrap">In Progress</p>
                <span className="border-b border-solid w-full border-black"></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer">
                <p className="pb-3 px-10 whitespace-nowrap">Completed</p>
                <span className="border-b border-solid w-full border-black"></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer">
                <p className="pb-3 px-10 whitespace-nowrap">Archievements</p>
                <span className="border-b border-solid w-full border-black"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Upcoming Courses</h3>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  <div className="flex items-center lex-wrap">
                    <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4 whitespace-nowrap">
                      <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Course</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                  </div>
                </div>
                <button className="w-full lg:w-fit flex flex-col items-center justify-between border solid border-black py-3 px-[16px] rounded-2xl md:ml-[20px] mt-4 md:mt-0">
                  <span className="leading-none text-[12px]">Status</span>
                  <span className="ff-cg--semibold text-[12px] leading-none">Pending</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* In progress */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-6">
              <h3 className="text-[20px] lg:text-[30px]">From your Organization</h3>
              <img className="object-cover h-[40px]" src={logo} alt="" />
            </div>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row mb-8">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  <div className="flex items-center lex-wrap">
                    <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4 whitespace-nowrap">
                      <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Course</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                  </div>
                </div>
                <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                  <span className="ff-cg--semibold mr-[20px]">Continue</span>
                  <ArrowRightCircleIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  <div className="flex items-center lex-wrap">
                    <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4 whitespace-nowrap">
                      <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Course</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                  </div>
                </div>
                <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                  <span className="ff-cg--semibold mr-[20px]">Continue</span>
                  <ArrowRightCircleIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">From you</h3>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  <div className="flex items-center lex-wrap">
                    <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4 whitespace-nowrap">
                      <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Course</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                  </div>
                </div>
                <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                  <span className="ff-cg--semibold mr-[20px]">Continue</span>
                  <ArrowRightCircleIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Completed */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Completed</h3>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  <div className="flex items-center lex-wrap">
                    <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4 whitespace-nowrap">
                      <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Course</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                  </div>
                </div>
                <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                  <span className="ff-cg--semibold mr-[20px]">See Certificate</span>
                  <ArrowRightCircleIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Archievements */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Certificates and Badges (TBD)</h3>
            {/* <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  <div className="flex items-center lex-wrap">
                    <span className="flex items-center border border-red-500 rounded-full px-[10px] mr-4 whitespace-nowrap">
                      <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Course</span>
                    </span>
                    <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                  </div>
                </div>
                <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                  <span className="ff-cg--semibold mr-[20px]">See Certificate</span>
                  <ArrowRightCircleIcon className="h-6 w-6"/>
                </button>
              </div>
            </div> */}
          </div>
        </section>

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Learning;
  