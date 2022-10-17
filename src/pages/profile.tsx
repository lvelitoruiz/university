import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { 
  ClockIcon,
} from '@heroicons/react/24/outline'
import logoWhite from "../images/logo-white.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import Header from "../components/Header/Header";
import { navigate } from "gatsby";

const Profile = () => {

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
        {/* header */}
        <Header isSignIn={signed} />

        {/* title button */}
        <section className="container px-[15px] mx-auto py-[30px] lg:py-[50px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mt-[60px]">
            <h3 className="text-[30px] lg:text-[50px] ff-cg--semibold">Good morning, { userName }!</h3>            
            <div className="flex flex-col lg:items-end">
              <p className="ff-cg--semibold text-[16px] lg:text-[28px]">It's a beautiful day!</p>
              <p>Let's see how we can help you today</p>
            </div>
          </div>
        </section>

        {/* product */}
        <section className="container px-[15px] mx-auto">
          <div className="bg-[#222222] rounded-2xl py-[25px] px-[15px] lg:py-[60px] lg:px-[30px]">
            <div className="text-white mb-[30px]">
              <h3 className="text-[20px] lg:text-[40px] ff-cg--semibold">Your Courses</h3>
              <p className="font-light lg:text-[30px]">Continue with your Learning experience</p>
            </div>
            <div className="flex lg:grid gap-4 lg:gap-10 lg:grid-cols-12 overflow-x-auto">
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[20px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-[10px]">
                        <p className="ff-cg--semibold">Your Progress</p>
                        <p className="ff-cg--semibold">75%</p>
                      </div>
                      <div className="w-full h-[20px] rounded-2xl bg-[#da1a32]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[20px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-[10px]">
                        <p className="ff-cg--semibold">Your Progress</p>
                        <p className="ff-cg--semibold">30%</p>
                      </div>
                      <div className="w-full h-[20px] rounded-2xl bg-[#da1a32]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[20px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-[10px]">
                        <p className="ff-cg--semibold">Your Progress</p>
                        <p className="ff-cg--semibold">50%</p>
                      </div>
                      <div className="w-full h-[20px] rounded-2xl bg-[#da1a32]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px] lg:mt-[60px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
