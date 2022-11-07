import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { navigate } from "gatsby";
import { Header } from "../components/Header/Header";
import logoWhite from "../images/logo-white.png";
import { MuiTelInput } from 'mui-tel-input';

import { 
  ArrowLeftCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

const Students = () => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const [signed,setSigned] = useState(false);

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    }else {
      navigate("/");
    }
  },[userName]);
  
  return (
    <Layout>
      <div className="bg-slate-50">
        <div>
          {/* header */}
          <Header isSignIn={signed} />

          <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[40px] lg:pb-0">
            <div className="lg:flex lg:items-center lg:justify-between pb-10">
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <a className="flex items-center" href="">
                      <ArrowLeftCircleIcon className="h-6 w-6"/>
                      <span className="ff-cg--medium ml-2">BACK TO COURSES</span>
                    </a>
                  </div>
                  <h2 className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">Assign Seats</h2>
                  <p className="text-[18px] lg:text-[30px] ff-cg--semibold">Course: Intro to Cybersecurity</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 gap-5 lg:gap-10 lg:grid-cols-12">
              <div className="col-span-12">
                <div className="rounded-xl bg-white shadow-lg h-full p-[30px]">
                  <p className="text-2xl mb-4">Enter user’s email addresses to add them to this course. You have <span className="ff-cg--semibold">90</span> remaining seats available</p>
                  <div className="mb-6">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold">Enter email address</p>
                      </div>
                      <input 
                        className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                        name="firstName"
                        type="search"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="bg-white shadow-lg border-l-4 border-solid border-[#da1a32] mb-5">
                      <div className="grid gap-4 gap-5 lg:gap-10 lg:grid-cols-12 p-4">
                        <div className="col-span-3">
                          <p className="ff-cg--semibold text-[18px]">Name</p>
                          <p>John Doe</p>
                        </div>
                        <div className="col-span-4">
                          <p className="ff-cg--semibold text-[18px]">Email</p>
                          <p>johndoe@microsoft.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow-lg border-l-4 border-solid border-[#da1a32] mb-5">
                      <div className="grid gap-4 gap-5 lg:gap-10 lg:grid-cols-12 p-4">
                        <div className="col-span-3">
                          <p className="ff-cg--semibold text-[18px]">Name</p>
                          <p>John Doe</p>
                        </div>
                        <div className="col-span-4">
                          <p className="ff-cg--semibold text-[18px]">Email</p>
                          <p>johndoe@microsoft.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold mb-2">Assigned Seats</p>
                    </div>
                    <div className="bg-white shadow-lg border-l-4 border-solid border-[#da1a32] mb-5">
                      <div className="grid gap-4 gap-5 lg:gap-10 lg:grid-cols-12 p-4 items-center">
                        <div className="col-span-3">
                          <p className="ff-cg--semibold text-[18px]">Name</p>
                          <p>John Doe</p>
                        </div>
                        <div className="col-span-6">
                          <p className="ff-cg--semibold text-[18px]">Email</p>
                          <p>johndoe@microsoft.com</p>
                        </div>
                        <div className="col-span-3">
                          <div className="flex items-center justify-end">
                            <a className="flex items-center" href="">
                              <XCircleIcon className="h-6 w-6"/>
                              <span className="ff-cg--semibold ml-2">Remove</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex items-center justify-center gap-4 lg:gap-10 mt-10">
                    <button className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                      <span className="ff-cg--semibold">Cancel and Return</span>
                    </button>              
                    <button type="submit" className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                      <span className="ff-cg--semibold">Assign Seats</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* footer */}
          <section className="container px-[15px] mx-auto pt-[50px] pb-[20px]">
            <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
              <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
              <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Students;