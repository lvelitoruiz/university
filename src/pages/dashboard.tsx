import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import {
  ClockIcon,
  ArrowRightCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

import logoWhite from "../images/logo-white.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import Header from "../components/Header/Header";
import { navigate } from "gatsby";

const Dashboard = () => {
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
        <Header isSignIn={signed} />
        {/* Banner */}
        <section>
          <div className="container px-[15px] mx-auto">
            <div className="md:pt-20 pb-14">
              <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 justify-center">
                <div className="md:col-span-5 lg:col-span-4">
                  <div className="mt-10 lg:mt-20">
                    <h2 className="text-[30px] lg:text-[70px] leading-none mb-[10px] lg:mb-[20px]">Welcome back, <span className="ff-cg--semibold">{ userName }!</span></h2>
                    <p className="font-light lg:text-[30px]">Continue with your learning experience</p>
                    <a className="text-[#da1a32] ff-cg--semibold flex items-center lg:mt-5 my-4" href="">
                      <span className="underline">See all Content</span>
                      <PlayIcon className="h-4 w-4 ml-[6px]"/>
                    </a>
                  </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8">
                  <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
                    <div className="lg:min-w-fit lg:col-span-6 mb-5 lg:mb-0">
                      <div>
                        <div className="relative">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="object-cover w-full h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                        </div>
                        <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between mt-[-30px] shadow-lg relative">
                          <div>
                            <div className="flex items-center gap-4 mb-[10px]">
                              <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                            </div>
                            <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <button className="flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                              <span className="ff-cg--semibold mr-4">Go to Courses</span>
                              <ArrowRightCircleIcon className="h-6 w-6"/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:min-w-fit lg:col-span-6 mb-5 lg:mb-0">
                      <div>
                        <div className="relative">
                          <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                          <img className="object-cover w-full h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                        </div>
                        <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between mt-[-30px] shadow-lg relative">
                          <div>
                            <div className="flex items-center gap-4 mb-[10px]">
                              <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                              </span>
                              <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                                <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                <span className="ff-cg--semibold text-[12px]">4 Course</span>
                              </span>
                            </div>
                            <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                            <button className="flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                              <span className="ff-cg--semibold mr-4">Go to Courses</span>
                              <ArrowRightCircleIcon className="h-6 w-6"/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#222222] md:mt-[-100px]">
          <div className="container px-[15px] mx-auto pb-[20px] pt-16 lg:pb-[50px] lg:pt-[90px]">
            <div>
              <h3 className="text-[20px] lg:text-[40px] ff-cg--semibold text-white">Quick Links</h3>
              <p className="font-light lg:text-[30px] text-white">Curated colletions of most used sections four easy access</p>
            </div>
            <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 overflow-x-auto justify-end pt-10 lg:pt-20 pb-10">
              <div className="lg:col-span-3"></div>
              <div className="lg:col-span-3 mb-5 lg:mb-0">
                <div>
                  <div className="bg-white rounded-3xl p-5 lg:p-[30px] flex flex-col justify-center shadow-lg relative">
                    <div>
                      <div className="flex w-[70px] h-[70px] rounded-full bg-[#ffeef0] mb-3">

                      </div>
                      <h4 className="text-base lg:text-[30px] ff-cg--semibold mb-1">Take a Tour</h4>
                      <p className="text-base leading-none">Get the most out of your learning experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 mb-5 lg:mb-0">
                <div>
                  <div className="bg-white rounded-3xl p-5 lg:p-[30px] flex flex-col justify-center shadow-lg relative">
                    <div>     
                      <div className="flex w-[70px] h-[70px] rounded-full bg-[#ffeef0] mb-3">

                      </div>        
                      <h4 className="text-base lg:text-[30px] ff-cg--semibold mb-1">Take a Tour</h4>
                      <p className="text-base leading-none">Get the most out of your learning experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div>
                  <div className="bg-white rounded-3xl p-5 lg:p-[30px] flex flex-col justify-center shadow-lg relative">
                    <div>    
                      <div className="flex w-[70px] h-[70px] rounded-full bg-[#ffeef0] mb-3">

                      </div>         
                      <h4 className="text-base lg:text-[30px] ff-cg--semibold mb-1">Take a Tour</h4>
                      <p className="text-base leading-none">Get the most out of your learning experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* title */}
        <section className="container px-[15px] mx-auto py-[30px] lg:pt-[80px] lg:pb-[50px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[20px] lg:text-[40px] ff-cg--semibold">Recommended for You</h3>
              <p className="font-light lg:text-[30px]">Perzonalized and curated content to upgrade your learning with career-relevant skills</p>
            </div>
          </div>
        </section>

        {/* list products */}
        <section className="container px-[15px] mx-auto pb-5">
          <div>
            <div className="flex lg:grid gap-4 lg:gap-10 lg:grid-cols-12 overflow-x-auto pb-10">
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[10px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold text-[20px]">$199.00</p>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[10px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold text-[20px]">$199.00</p>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="bg-[#222222] rounded-3xl p-[30px] flex flex-col justify-center h-[520px] shadow-lg relative">
                    <div>             
                      <p className="text-base text-white leading-none ff-cg--semibold mb-2">Explore and Find</p>
                      <h4 className="text-[30px] lg:text-[60px] text-[#fdbf38] ff-cg--semibold leading-none mb-[10px]">New Paths</h4>
                      <p className="text-[20px] lg:text-[30px] leading-none text-white">Choose form world-class online courses and start your new future today.</p>
                      <button className="flex items-center justify-between bg-white py-[14px] px-[16px] rounded-2xl mt-[30px]">
                        <span className="ff-cg--semibold mr-4">Explore the Catalog</span>
                        <ArrowRightCircleIcon className="h-6 w-6"/>
                      </button>
                    </div>
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
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Dashboard;
  