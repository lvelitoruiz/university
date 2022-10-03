import React from "react"
import Layout from "../components/Layout/Layout"
import { 
  ClockIcon,
  ArrowRightCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

import logoWhite from "../images/logo-white.png";
import Header from "../components/Header/Header";
import product1 from "../images/product-1.png";

const Learning = () => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');

  return (
    <Layout>
      <div className="bg-slate-50">
        <Header isSignIn={true} />

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

        <section className="container px-[15px] mx-auto mb-20">
          <div className="rounded-md bg-white shadow-lg p-[30px] pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Upcoming Courses</h3>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center">
              <div className="relative w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-[200px] object-cover h-[50px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="pl-8 p-5 flex items-center justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
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
                <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-3 px-[16px] rounded-2xl ml-[20px]">
                  <span className="leading-none text-[12px]">Status</span>
                  <span className="ff-cg--semibold text-[12px] leading-none">Pending</span>
                </button>
              </div>
            </div>
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
  