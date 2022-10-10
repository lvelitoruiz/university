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

const Account = () => {

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
            <h3 className="text-[20px] lg:text-[40px] mb-6 lg:mb-0">My <span className="ff-cg--semibold">Account</span></h3>
            <div className="flex items-center overflow-x-auto">
              <div className="flex items-center flex-col cursor-pointer">
                <p className="ff-cg--semibold pb-3 px-10 whitespace-nowrap">Edit Profile</p>
                <span className="border-b border-solid w-full border-[#da1a32] border-2"></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer">
                <p className="pb-3 px-10 whitespace-nowrap">Change Password</p>
                <span className="border-b border-solid w-full border-black"></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer">
                <p className="pb-3 px-10 whitespace-nowrap">Manage Applications</p>
                <span className="border-b border-solid w-full border-black"></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer">
                <p className="pb-3 px-10 whitespace-nowrap">Manage Notifications</p>
                <span className="border-b border-solid w-full border-black"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Edit Profile */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Edit Profile</h3>
            <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mb-10">
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">First Name</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
              </div>
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">Last Name</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
              </div>
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">Email Address</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
              </div>
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">Phone Number</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
              </div>
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">Group</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
              </div>
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">Time Zone</p>
                </div>
                <select className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 px-4 py-[18px] mt-2 rounded-2xl ff-cg--medium">
                  <option value="">United States (UT)</option>
                </select>
              </div>
            </div>
            <div className="md:flex items-center justify-center gap-4 lg:gap-10">
              <button className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                <span className="ff-cg--semibold">Return</span>
              </button>              
              <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                <span className="ff-cg--semibold">Save Change</span>
              </button>
            </div>
          </div>
        </section>

        {/* Change Password */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Change Password</h3>
            <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mb-10">
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">New Password</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="password" />
              </div>
              <div className="md:col-span-6 lg:col-span-6">
                <div className="flex items-center justify-between">
                  <p className="ff-cg--semibold">New Password</p>
                </div>
                <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="password" />
              </div>
            </div>
            <div className="md:flex items-center justify-center gap-4 lg:gap-10">
              <button className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                <span className="ff-cg--semibold">Return</span>
              </button>              
              <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                <span className="ff-cg--semibold">Save Change</span>
              </button>
            </div>
          </div>
        </section>

        {/* Your Applications */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Your Applications</h3>
            <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
              <div className="relative w-full md:w-[200px]">
                <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
              </div>
              <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                <div>
                  <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                </div>
                <div className="md:flex md:items-center">
                  <div className="w-full lg:w-fit flex flex-col items-start justify-between py-3 lg:px-[16px] rounded-2xl md:ml-[20px] mt-4 md:mt-0">
                    <span className="ff-cg--semibold text-base leading-none">Application Date</span>
                    <span className="leading-none text-base">September 26, 2022</span>
                  </div>
                  <button className="w-full lg:w-fit flex flex-col items-center justify-between border solid border-black py-3 px-[16px] rounded-2xl md:ml-[20px] mt-4 md:mt-0">
                    <span className="leading-none text-[12px]">Status</span>
                    <span className="ff-cg--semibold text-[12px] leading-none">Application Received</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manage Notifications */}
        <section className="container px-[15px] mx-auto md:mb-20 mb-10">
          <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
            <h3 className="text-[20px] lg:text-[30px] mb-6">Manage Notifications</h3>
            <h4 className="ff-cg--semibold text-base lg:text-[26px]">Iwant to receive:</h4>
            <div className="mt-6">
              <div className="flex items-center mb-5">
                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                <label form="default-checkbox" className="ml-2 text-xl">Promotions, course recommendations, and helpful resources from Udemy.</label>
              </div>
              <div className="flex items-center mb-5">
                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                <label form="default-checkbox" className="ml-2 text-xl">Account activity, and legal info, like our Terms of Servicee.</label>
              </div>
              <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                <label form="default-checkbox" className="ml-2 text-xl">Reminders about your applications status, and general uodates about courses you are enrolled in</label>
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

export default Account;
  