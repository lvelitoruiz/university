import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { 
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
  BookmarkSquareIcon
} from '@heroicons/react/24/outline'
import { navigate } from "gatsby";
import { Header } from "../components/Header/Header";
import logoWhite from "../images/logo-white.png";

const OrgAdmin = () => {
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
      <div className="bg-microsoft">
        <div className="mb-[40px]">
          {/* header */}
          <Header isSignIn={signed} />

          <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[40px] lg:pb-0">
            <div className="lg:flex lg:items-center lg:justify-between pb-10">
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="ml-4">
                  <p className="lg:text-[20px] ff-cg--semibold">Good morning, Jennifer!</p>
                  <h2 className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">Microsoft</h2>
                </div>
              </div>
              <div className="lg:text-right mt-3 lg:mt-0">
                <p className="ff-cg--semibold lg:text-[30px] leading-none">It's a beautiful day!</p>
                <p>Let’s see how we can help you today</p>
              </div>
            </div>
            <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3 flex items-center flex-col justify-center g-rectangle pt-5 pb-5 mb-10">
                <div className="text-center z-10">
                  <UserGroupIcon className="h-7 w-7 text-[#da1a32] mx-auto"/>
                  <p className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">100</p>
                  <p>STUDENTS</p>
                </div>
              </div>
              <div className="lg:col-span-3 flex items-center flex-col justify-center g-rectangle pt-5 pb-5 mb-10">
                <div className="text-center z-10">
                  <AcademicCapIcon className="h-7 w-7 text-[#463eda] mx-auto"/>
                  <p className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">10</p>
                  <p>STUDENTS</p>
                </div>
              </div>
              <div className="lg:col-span-3 flex items-center flex-col justify-center g-rectangle pt-5 pb-5 mb-10">
                <div className="text-center z-10">
                  <BookOpenIcon className="h-7 w-7 text-[#da1a32] mx-auto"/>
                  <p className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">300</p>
                  <p>STUDENTS</p>
                </div>
              </div>
              <div className="lg:col-span-3 flex items-center flex-col justify-center g-rectangle pt-5 pb-5 mb-10">
                <div className="text-center z-10">
                  <BookmarkSquareIcon className="h-7 w-7 mx-auto"/>
                  <p className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">200</p>
                  <p>STUDENTS</p>
                </div>
              </div>
            </div>
            <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6 mb-10">
                <div className="rounded-3xl bg-white shadow-lg">
                  <div className="border-b border-solid p-5 border-[#e8e8e8]">
                    <p className="ff-cg--semibold lg:text-[20px] leading-none">Categories Usage</p>
                  </div>
                  <div className="p-5"></div>
                </div>
              </div>
              <div className="lg:col-span-6 mb-10">
                <div className="rounded-3xl bg-white shadow-lg">
                  <div className="border-b border-solid p-5 border-[#e8e8e8]">
                    <p className="ff-cg--semibold lg:text-[20px] leading-none">Skills Analysis</p>
                  </div>
                  <div className="p-5"></div>
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

export default OrgAdmin;