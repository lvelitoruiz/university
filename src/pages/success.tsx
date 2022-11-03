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
import { navigate } from "gatsby";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import Tippy from '@tippyjs/react/headless';

const Success = () => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const [signed,setSigned] = useState(false);

  const [upcoming,setUpcoming] = useState(true);
  const [progress,setProgress] = useState(false);
  const [completed,setCompleted] = useState(false);
  const [achievements,setAchievements] = useState(false);

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    }else {
      navigate("/");
    }
  },[userName]);

  const handleChange = (status: string) => {
		if (status === 'upcoming') {
			setUpcoming(true);
			setProgress(false);
			setCompleted(false);
      setAchievements(false);
		} else if (status === 'progress') {
			setUpcoming(false);
			setProgress(true);
			setCompleted(false);
      setAchievements(false);
		} else if (status === 'completed') {
			setUpcoming(false);
			setProgress(false);
			setCompleted(true);
      setAchievements(false);
		} 
    else {
			setUpcoming(false);
			setProgress(false);
			setCompleted(false);
      setAchievements(true);
		}
	};

  return (
    <Layout>
      <div className="bg-[#f5f5f5] bg-slate-50 min-h-screen relative pb-[140px]">
        <Header isSignIn={signed} />

        <section className="w-full px-[15px] mx-auto pt-[20px] pb-[20px] flex justify-center">
            <div className="bg-[#222222] rounded-2xl py-[40px] px-[40px] flex items-center justify-between container">
               <div className="text-left">
                    <h2 className="text-white ff-cg--bold text-[80px] leading-none">Success!</h2>
                    <p className="text-white text-[24px]">Thanks for filling out your application!</p>
               </div>
               <div>
                    <p className="text-white text-[22px] text-right">You will also receive a confirmation message with this <br /> information to your email.</p>
               </div>
            </div>
        </section>

        <section className="w-full px-[15px] mx-auto pt-[20px] pb-[20px] flex justify-center">
            <div className="bg-white shadow-xl rounded-2xl flex items-center justify-between container">
                <div className="w-[30%] py-[40px] px-[40px] text-left">
                    <h3 className="text-black ff-cg--bold text-[18px] leading-none">Application Date</h3>
                    <p className="text-[26px]">September 26, 2022</p>
                </div>
                <div className="w-[40%] py-[40px] px-[40px] border-left border-r border-l text-left">
                    <h3 className="text-black ff-cg--bold text-[18px] leading-none">Course</h3>
                    <p className="text-[26px]">Machine Learning Introduction</p>
                </div>
                <div className="w-[30%] py-[40px] px-[40px] text-left">
                    <h3 className="text-black ff-cg--bold text-[18px] leading-none">Status</h3>
                    <p className="text-[26px]">Application Received</p>
                </div>
            </div>
        </section>

        <section className="w-full px-[15px] mx-auto pt-[10px] pb-[10px] flex justify-center">
            <div className="bg-white shadow-xl rounded-2xl py-[30px] px-[30px] text-left container">
                <h3 className="text-[#da1a33] ff-cg--bold text-[54px] leading-none mb-8">What's next?</h3>
                <h4 className="ff-cg--bold text-[28px] leading-none mb-2">1. Interview via phone with an Admissions Director</h4>
                <p className="ff-cg--light text-[22px] mb-8">If your application and profile meet certain standards, we'll soon reach out by phone for a fit interview - be ready for a call shortly from a number with either a local area code or a 240 area code. This interview is required to gain provisional acceptance into the program.</p>

                <h4 className="ff-cg--bold text-[28px] leading-none mb-2">2. Complete the technical skills survey</h4>
                <p className="ff-cg--light text-[22px] mb-8">In parallel with your fit interview, we'll send you a survey via email to assess any knowledge gaps you may have before the program begins. Plan to complete this within 24 hours - mosts applicants take between 20 minutes to one hour to do this.</p>

                <h4 className="ff-cg--bold text-[28px] leading-none mb-2">3. Reserve your seat</h4>
                <p className="ff-cg--light text-[22px] mb-8">Our programs are very selective. If you are accepted, we will send you a registration link via email to fill out within 24 hours. You will choose a start date and payment plan, and fill out your student profile to complete your enrollment and be eligible for mentor matching.</p>
            </div>
        </section>

        <section className="w-full px-[15px] mx-auto pt-[10px] pb-[10px] flex justify-center">
            <div className="bg-[#da1a33] rounded-2xl py-[30px] px-[30px] text-center container">
                <h4 className="text-white ff-cg--bold text-[34px] leading-none mb-4">Any questions about your application? Give us a call!</h4>
                <p className="text-white text-[28px]">You can reach us Monday to Friday from 8am - 6pm <br />
                240-410-0492</p>
            </div>
        </section>

            


            

        {/* footer */}
        <section className="w-full px-[15px] mx-auto pt-[20px] pb-[20px] absolute bottom-0 flex justify-center">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between container">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Success;
  