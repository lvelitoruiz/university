import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { 
  XMarkIcon,
  ClockIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

import logoIso from "../images/iso.png";
import logo from "../images/logo-full.png";
import bannerCourse from "../images/banner-course.png";

  const Payment = () => {

  return (
    <Layout>
      <div className="bg-slate-50">
        <section className="bg-white shadow-lg">
          <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
            <div className="flex items-center justify-between">
              <div className="">
                <h1>
                  <img className="object-cover hidden lg:block min-w-[332px] h-[60px]" src={ logo } alt="" />
                  <img className="object-cover lg:hidden w-[50px] h-[50px]" src={ logoIso } alt="" />
                </h1>
              </div>
              <div >
                <a className="flex items-center" href="">
                  <span className="text-[#da1a32] ff-cg--semibold mr-3 underline">Close and Return</span>
                  <XMarkIcon className="h-8 w-8 border border-solid border-[#222222] p-1 rounded-md"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[60px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-white p-3 lg:p-[30px] shadow-lg h-full mb-5 md:mb-0">
                <div className="flex items-center border-b solid pb-3 justify-between">
                  <h3 className="text-[20px] lg:text-[30px] ff-cg--semibold">Choose your Payment Method</h3>
                  <div className="flex items-center">
                    <LockClosedIcon className="h-6 w-6 mr-[6px]"/>
                    <p>Secured Connection</p>
                  </div>
                </div>
                <div className="rounded-md bg-white p-3 md:p-[30px] shadow-lg mt-6">
                  <div>
                    <div className="flex items-center">
                      <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                      <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                        <span className="flex items-center">
                          <span className="ff-cg--semibold">Credit Card</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mt-8">
                      <div className="md:col-span-12">
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold">Cardholder Name</p>
                        </div>
                        <input placeholder="Your Name" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                      </div>
                      <div className="md:col-span-12">
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold">Card Number</p>
                        </div>
                        <input placeholder="0000 0000 0000 0000" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                      </div>
                      <div className="md:col-span-6">
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold">CVC/CVV</p>
                        </div>
                        <input placeholder="CVC" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                      </div>
                      <div className="md:col-span-6">
                        <div className="flex items-center justify-between">
                          <p className="ff-cg--semibold">Expiry Date</p>
                        </div>
                        <input placeholder="MM/YY" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded-xl border-gray-300 focus:ring-white focus:ring-2"/>
                      <label form="default-checkbox" className="ml-2 text-sm">Securely save this card for my later purchases</label>
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-white p-3 md:p-[30px] shadow-lg mt-6">
                  <div>
                    <div className="flex items-center">
                      <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                      <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                        <span className="flex items-center">
                          <span className="ff-cg--semibold">PayPal</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-white p-3 lg:p-[30px] shadow-lg h-full">
                <div className="flex items-center border-b solid pb-3">
                  <h3 className="text-[20px] lg:text-[30px] ff-cg--semibold">Summary</h3>
                </div>
                <div className="overflow-y-auto">
                  <div className="lg:flex flex-col border-b solid py-8">
                    <div className="flex items-center">
                      <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[70px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                      <div className="mx-[10px]">
                        <p className="ff-cg--semibold text-sm mb-2 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-wrap">
                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                          <span className="ff-cg--bold leading-none text-[20px]">$199</span>
                          <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex flex-col border-b solid py-8">
                    <div className="flex items-center">
                      <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[70px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                      <div className="mx-[10px]">
                        <p className="ff-cg--semibold text-sm mb-2 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-wrap">
                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                          <span className="ff-cg--bold leading-none text-[20px]">$199</span>
                          <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex flex-col border-b solid py-8">
                    <div className="flex items-center">
                      <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[70px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                      <div className="mx-[10px]">
                        <p className="ff-cg--semibold text-sm mb-2 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-wrap">
                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]"/>
                              <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                          <span className="ff-cg--bold leading-none text-[20px]">$199</span>
                          <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-5 pt-5 border-b solid">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm lg:text-base ff-cg--semibold">Total</p>
                    <p className="text-sm lg:text-base ff-cg--semibold">$5,322.87</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm lg:text-base">Tax</p>
                    <p className="text-sm lg:text-base">$322.87</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-5 pt-5">
                  <p className="text-[16px] lg:text-[26px] ff-cg--semibold">Total</p>
                  <p className="text-[16px] lg:text-[26px] ff-cg--semibold">$5,322.87</p>
                </div>
                <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mr-[20px] w-full">
                  <span className="ff-cg--semibold mr-[20px]">Complete Checkout</span>                
                </button>
                <div className="flex items-center mt-5">
                  <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded-xl border-gray-300 focus:ring-white focus:ring-2"/>
                  <label form="default-checkbox" className="ml-2 text-sm">I have read and agree to the current <a className="text-[#da1a32]" href="">Terms of Service</a> </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Payment;