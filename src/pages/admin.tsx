import React from "react";
import Layout from "../components/Layout/Layout";

import logo from "../images/logo-full.png";
import logoIso from "../images/iso.png";

const Admin = () => {
  return (
    <Layout>
      <div className="bg-slate-50 h-screen">
        <div className="container px-[15px] mx-auto h-full">
          <div className="flex items-center justify-center h-full flex-col">
            <img className="hidden lg:block lg:min-w-[332px] lg:h-[60px]" src={ logo } alt="" />
            <img className="lg:hidden w-[50px] h-[50px]" src={ logoIso } alt="" />
            <div className="px-[30px] pb-[30px] pt-[100px] shadow-2xl rounded-2xl lg:w-[60%] flex items-center text-center justify-center flex-col mt-[90px]">
              <h2 className="text-[30px] lg:text-[50px] ff-cg--semibold">Administrator Flow!</h2>
              <p className="text-[18px] lg:text-[26px] ff-cg--semibold mb-[20px]">Your are here because you're a group admin</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
