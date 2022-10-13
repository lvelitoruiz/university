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

  const Success = () => {

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
          <div className="grid gap-4 gap-5 lg:gap-10 lg:grid-cols-12">
            <div className="col-span-12">
              <div className="lg:flex items-center justify-between p-4 lg:p-10 bg-[#222222] rounded-2xl">
                <div className="w-full">
                  <h3 className="ff-cg--semibold text-white text-[26px] lg:text-[60px] leading-none">Success!</h3>                  
                  <p className="text-white text-base lg:text-[24px]">You order in complete</p>
                </div>
                <div className="w-full mt-2 lg:mt-0">
                  <p className="text-white text-base lg:text-[20px] lg:text-right">If you need a receipt, you can print this page. You will also receive a confirmation message with this information to you email.</p>
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
            <div className="col-span-12">
              <div className="rounded-xl bg-white shadow-lg h-full p-6">
                <h3 className="ff-cg--semibold text-base lg:text-[20px] mb-6">Order Items</h3>
                <div className="overflow-x-auto">
                  <table className="lg:w-full rounded-2xl mb-5">
                    <thead className="bg-[#da1a32] text-white rounded-2xl border-l border-solid border-[#da1a32]">
                      <tr>
                        <th className="text-left ff-cg--semibold py-4 px-8">Title</th>
                        <th className="text-center ff-cg--semibold py-4 px-8">Type</th>
                        <th className="text-center ff-cg--semibold py-4 px-8">Price</th>
                        <th className="text-center ff-cg--semibold py-4 px-8">Seats</th>
                        <th className="text-right ff-cg--semibold py-4 px-8">Total</th>
                      </tr>
                    </thead>
                    <tbody className="border-l border-r border-solid">
                      <tr className="border-b border-solid">
                        <td className="text-left py-4 px-8">
                          <span className="flex flex-col">
                            <span className="underline decoration-solid">
                              Introduction to Cybersecurity Tools & Cyber Attacks
                            </span>
                            <span className="text-sm">MindEdge</span>
                          </span>
                        </td>
                        <td className="text-center py-4 px-8">Courses</td>
                        <td className="text-center py-4 px-8">$199</td>
                        <td className="text-center py-4 px-8">1</td>
                        <td className="text-right py-4 px-8">$199</td>
                      </tr>
                      <tr className="border-b border-solid">
                        <td className="text-left py-4 px-8">
                          <span className="flex flex-col">
                            <span className="underline decoration-solid">
                              Introduction to Cybersecurity Tools & Cyber Attacks
                            </span>
                            <span className="text-sm">MindEdge</span>
                          </span>
                        </td>
                        <td className="text-center py-4 px-8">Courses</td>
                        <td className="text-center py-4 px-8">$199</td>
                        <td className="text-center py-4 px-8">1</td>
                        <td className="text-right py-4 px-8">$199</td>
                      </tr>
                      <tr className="border-b border-solid">
                        <td className="text-left py-4 px-8">
                          <span className="flex flex-col">
                            <span className="underline decoration-solid">
                              Introduction to Cybersecurity Tools & Cyber Attacks
                            </span>
                            <span className="text-sm">MindEdge</span>
                          </span>
                        </td>
                        <td className="text-center py-4 px-8">Courses</td>
                        <td className="text-center py-4 px-8">$199</td>
                        <td className="text-center py-4 px-8">1</td>
                        <td className="text-right py-4 px-8">$199</td>
                      </tr>
                      <tr className="border-b border-solid">
                        <td colSpan={2} className="text-left py-4 px-8">
                          <span className="flex flex-col">
                            <span className="ff-cg--semibold mb-2">
                              Subtotal
                            </span>
                            <span className="text-sm">Tax</span>
                          </span>
                        </td>
                        <td colSpan={3} className="text-right py-4 px-8">
                          <span className="flex flex-col">
                            <span className="ff-cg--semibold mb-2">
                              $4,998,00
                            </span>
                            <span className="text-sm">$398,00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-solid">
                        <td colSpan={2} className="text-left py-6 px-8">
                          <span className="ff-cg--semibold text-[20px]">
                            Order Total
                          </span>
                        </td>
                        <td colSpan={3} className="text-right py-6 px-8">
                          <span className="ff-cg--semibold text-[20px]">
                            $5,998,00
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="lg:flex items-center justify-center w-full gap-4">
                <button className="w-full lg:w-[300px] bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                  <span className="ff-cg--semibold">Go to Account Page</span>
                </button>
                <button className="w-full lg:w-[300px] bg-white py-[14px] px-[16px] rounded-2xl mt-[30px] shadow-lg">
                  <span className="ff-cg--semibold">Print this Page</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Success;