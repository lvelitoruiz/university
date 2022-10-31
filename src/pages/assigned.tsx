import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { navigate } from "gatsby";
import { Header } from "../components/Header/Header";
import logoWhite from "../images/logo-white.png";
import { MuiTelInput } from 'mui-tel-input';

import { 
  ArrowLeftCircleIcon,
  PencilSquareIcon
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
                  <h2 className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">Assigned Seats</h2>
                  <p className="text-[18px] lg:text-[30px] ff-cg--semibold">Course: Intro to Cybersecurity</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 gap-5 lg:gap-10 lg:grid-cols-12">
              <div className="col-span-12">
                <div className="rounded-xl bg-white shadow-lg h-full p-[3px]">
                  <div className="overflow-x-auto">
                    <table className="lg:w-full rounded-2xl">
                      <thead className="text-white rounded-2xl  border-[#da1a32]">
                        <tr>
                          <th className="bg-[#da1a32] rounded-tl-xl text-left ff-cg--semibold py-4 px-8">Name</th>
                          <th className="bg-[#da1a32] text-left ff-cg--semibold py-4 px-8">Email</th>
                          <th className="bg-[#da1a32] rounded-tr-xl text-right ff-cg--semibold py-4 px-8"></th>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr className="border-b border-solid">
                          <td className="py-4 px-8">John Doe</td>
                          <td className="py-4 px-8">john@microsoft.com</td>
                          <td className="py-4 px-8">
                            <button className="ml-auto w-full lg:w-fit flex items-center justify-between border border-solid border-black py-[14px] px-[16px] rounded-2xl">
                              <PencilSquareIcon className="h-6 w-6"/>
                              <span className="ff-cg--semibold ml-[20px] whitespace-nowrap">Remove Seat</span>
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b border-solid">
                          <td className="py-4 px-8">John Doe</td>
                          <td className="py-4 px-8">john@microsoft.com</td>
                          <td className="py-4 px-8">
                            <button className="ml-auto w-full lg:w-fit flex items-center justify-between border border-solid border-black py-[14px] px-[16px] rounded-2xl">
                              <PencilSquareIcon className="h-6 w-6"/>
                              <span className="ff-cg--semibold ml-[20px] whitespace-nowrap">Remove Seat</span>
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b border-solid">
                          <td className="py-4 px-8">John Doe</td>
                          <td className="py-4 px-8">john@microsoft.com</td>
                          <td className="py-4 px-8">
                            <button className="ml-auto w-full lg:w-fit flex items-center justify-between border border-solid border-black py-[14px] px-[16px] rounded-2xl">
                              <PencilSquareIcon className="h-6 w-6"/>
                              <span className="ff-cg--semibold ml-[20px] whitespace-nowrap">Remove Seat</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center justify-between py-4 px-8">
                    <p className="ff-cg--semibold">Showing 1 - 5 of 10 Items</p>
                    <div className="flex items-center gap-4">
                      <button className="rounded-md flex items-center justify-center text-[18px] bg-[#da1a32] text-white w-10 h-10">
                        <span className="ff-cg--semibold">1</span>
                      </button>
                      <button className="rounded-md flex items-center justify-center text-[18px] border-2 border-solid border-[#da1a32] text-[#da1a32] w-10 h-10">
                        <span className="ff-cg--semibold">2</span>
                      </button>
                    </div>
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