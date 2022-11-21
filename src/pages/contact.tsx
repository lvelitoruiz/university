import React from "react";
import Layout from "../components/Layout/Layout";

import { Header } from "../components/Header/Header";
import { HomeIcon } from '@heroicons/react/24/outline';
import logoWhite from "../images/logo-white.png";

const Contact = () => {
  
  return (
    <Layout>
      <div className="bg-[#f2f2f2]">
        <div className="mb-[40px]">
          <Header/>

          <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[40px] lg:pb-0">
            <div className="mb-8">
              <h3 className="text-[20px] lg:text-[70px] ff-cg--semibold leading-none mb-[10px] lg:mb-[20px]">Contact Us</h3>
              <p className="text-base lg:text-[20px] leading-none ff-cg--light mb-2">If you have questions about purchasing our training courses or other services, you're in the right place.</p>
              <p className="text-base lg:text-[20px] leading-none ff-cg--light">Send us an inquiry and we will get back to you as soon as we can!</p>
            </div>
            <div className="grid gap-6 lg:gap-10 lg:grid-cols-12">
              <div className="col-span-8">
                <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10">
                  <div className="md:col-span-12 mb-5">
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold">First Name*</p>
                    </div>
                    <input 
                      className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                      name="firstName"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-12 mb-5">
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold">Company*</p>
                    </div>
                    <input 
                      className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                      name="firstName"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-12 mb-5">
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold">Your Email Address*</p>
                    </div>
                    <input 
                      className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                      name="firstName"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-12 mb-5">
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold">Phone Number*</p>
                    </div>
                    <input 
                      className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                      name="firstName"
                      type="text"
                    />
                  </div>
                  <div className="md:col-span-12 mb-5">
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold">How can we help?</p>
                    </div>
                    <textarea 
                      className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                      name="firstName"
                    />
                  </div>
                  <div className="md:col-span-12">
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold px-10">Send</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col mb-10">
                    <HomeIcon className="w-10 h-10 lg:h-32 lg:w-32 lg:mb-10" />
                    <p className="text-base lg:text-[26px] lg:leading-[40px] ff-cg--light mb-2">If you are an existing customer and need help, please contact our</p>
                    <a className="text-base lg:text-[26px] text-[#da1a32] underline" href="">Support Team</a>
                  </div>
                  <div className="flex flex-col">
                    <HomeIcon className="w-10 h-10 lg:h-32 lg:w-32 lg:mb-10" />
                    <p className="text-base lg:text-[26px] lg:leading-[40px] ff-cg--light mb-2">If you are an existing customer and need help, please contact our</p>
                    <a className="text-base lg:text-[26px] text-[#da1a32] underline" href="">Support Team</a>
                  </div>
                  </div>
              </div>
            </div>
          </section>

          {/* footer */}
          <section className="container px-[15px] mx-auto pt-[50px] pb-[20px]">
            <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
              <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
              <div className="flex flex-col items-end">
                <div className="hidden md:flex items-center mb-1">
                  <a className="text-white ff-cg--medium mr-3" href="">Home</a>
                  <span className="h-[10px] w-[2px] bg-white"></span>
                  <a className="text-white ff-cg--medium mx-3" href="">Catalog</a>
                  <span className="h-[10px] w-[2px] bg-white"></span>
                  <a className="text-white ff-cg--medium mx-3" href="">About</a>
                  <span className="h-[10px] w-[2px] bg-white"></span>
                  <a className="text-white ff-cg--medium mx-3" href="">Business</a>
                  <span className="h-[10px] w-[2px] bg-white"></span>
                  <a className="text-white ff-cg--medium mx-3" href="">Cobtact Us</a>
                  <span className="h-[10px] w-[2px] bg-white"></span>
                  <a className="text-white ff-cg--medium ml-3" href="">FAQs</a>
                </div>
                <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;