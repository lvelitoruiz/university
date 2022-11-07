import React, { useEffect, useRef, useState } from "react"
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"
import {
  XMarkIcon
} from '@heroicons/react/24/outline'

import logoIso from "../images/iso.png";
import logo from "../images/logo-full.png";
import { Link } from "gatsby";
import { useReactToPrint } from 'react-to-print';

const ApplicationSuccess = () => {
  const [signed, setSigned] = useState(false);

  const componentRef = useRef<any>(null);

  const toPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Layout>
      <div className="bg-[#f5f5f5] bg-slate-50 min-h-screen relative pb-[140px]">
        <Header isSignIn={signed} />

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[60px]">
          <div className="grid gap-5 lg:gap-10 lg:grid-cols-12">
            <div className="col-span-12">
              <div className="lg:flex items-center justify-between p-4 lg:py-14 lg:px-10 bg-[#222222] rounded-2xl">
                <div className="w-full">
                  <h3 className="ff-cg--semibold text-white text-[26px] lg:text-[80px] leading-none">Success!</h3>
                  <p className="text-white text-base lg:text-[24px]">Thanks for filling out your application!</p>
                </div>
                <div className="w-full mt-2 lg:mt-0">
                  <p className="text-white text-base lg:text-[20px] lg:text-right">You will also receive a confirmation message with this <br /> information to your email.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="rounded-xl bg-white shadow-lg h-full">
                <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
                  <div className="md:col-span-4 lg:col-span-4 p-6 border-r border-solid">
                    <p className="ff-cg--semibold mb-1">Order Number</p>
                    <p className="text-base lg:text-[20px]">3789-909390</p>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4 p-6 border-r border-solid">
                    <p className="ff-cg--semibold mb-1">Order Date</p>
                    <p className="text-base lg:text-[20px]">September 26, 2022</p>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4 p-6">
                    <div>
                      <p className="text-base lg:text-[20px] text-right">****** 0039</p>
                      <p className="ff-cg--semibold mt-1 text-right">Expires 09/2023</p>
                    </div>
                  </div>
                </div>
              </div>
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

            <div className="col-span-12">
              <div className="lg:flex items-center justify-center w-full gap-4">
                <Link to="/account">
                  <button className="w-full lg:w-[300px] bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                    <span className="ff-cg--semibold">Go to Account Page</span>
                  </button>
                </Link>
              </div>
            </div>


      </div>
    </Layout>
  )
}

export default ApplicationSuccess;
