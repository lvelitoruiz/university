import React from "react";
import Layout from "../components/Layout/Layout";

import logo from "../images/logo-full.png";
import logoIso from "../images/iso.png";

const Confirmation = () => {
  return (
    <Layout>
      <div className="bg-slate-50 h-screen">
        <div className="container px-[15px] mx-auto h-full">
          <div className="flex items-center justify-center h-full flex-col">
            <img className="hidden lg:block lg:min-w-[332px] lg:h-[60px]" src={ logo } alt="" />
            <img className="lg:hidden w-[50px] h-[50px]" src={ logoIso } alt="" />
            <div className="px-[30px] pb-[30px] pt-[100px] shadow-2xl rounded-2xl lg:w-[60%] flex items-center text-center justify-center flex-col mt-[90px]">
              <h2 className="text-[30px] lg:text-[50px] ff-cg--semibold">Thank You!</h2>
              <p className="text-[18px] lg:text-[26px] ff-cg--semibold mb-[20px]">Your order is complete</p>
              <p className="font-light lg:text-[30px] leading-none mb-1">A confirmation as been sent to your email.</p>
              <p className="font-light lg:text-[30px] leading-none">Meanwhile, you can access to your course in your Dashboard</p>
              <button className="w-full lg:w-fit flex items-center justify-center bg-[#fdbf38] py-[14px] px-[40px] rounded-2xl mt-[60px]">
                <span className="ff-cg--semibold">Go to Your Courses</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
