import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout";
import { 
  MagnifyingGlassCircleIcon,
  Bars3CenterLeftIcon,
  HomeIcon,
  RectangleStackIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  BookOpenIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import logo from "../images/logo-full.png";
import logoWhite from "../images/logo-white.png";
import logoIso from "../images/iso.png";
import bannerCatalog from "../images/banner-catalog.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import product4 from "../images/product-4.png";
import product5 from "../images/product-5.png";
import Header from "../components/Header/Header";
import { navigate } from "gatsby";

const Catalog = () => {

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

        {/* banner img */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="relative w-full h-[140px] lg:h-[220px]">
            <div className="relative w-full h-[140px] lg:h-[220px]">
              <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
              <img className="w-full h-full rounded-2xl object-cover" src={ bannerCatalog } alt="" />
            </div>
            <div className="absolute top-[30px] lg:top-[50px] left-[30px]">
              <p className="ff-cg--semibold text-white text-[16px] lg:text-[16px] leading-none">The Skills You</p>
              <h2 className="ff-cg--semibold text-white text-[34px] lg:text-[50px] leading-none">Need to <span className="text-amber-400">Succeed</span></h2>
            </div>
          </div>
        </section>

        {/* content */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              {/* filter */}
              <div className="bg-amber-400 lg:bg-red-500 h-full p-[15px] rounded-2xl mb-[40px]">
                <p className="lg:text-white lg:text-[30px] ff-cg--semibold lg:px-[20px] lg:py-[10px]">Filters</p>
                <div className="hidden lg:block">
                  <div className="flex items-center border-b solid pb-[10px] border-red-300">
                    <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-5 w-5 text-white"/>
                    </div>
                    <p className="ff-cg--semibold text-white ml-[6px]">Ways to Learn</p>
                  </div>
                  <div className="flex pt-[14px] pb-[24px]">
                    <div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault1">
                          All
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault2">
                          Courses
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault3">
                          Certificates
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault4">
                          Learning Paths
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b solid pb-[10px] border-red-300">
                    <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-5 w-5 text-white"/>
                    </div>
                    <p className="ff-cg--semibold text-white ml-[6px]">Ways to Learn</p>
                  </div>
                  <div className="flex pt-[14px] pb-[24px]">
                    <div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault5" checked/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault5">
                          All
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault6"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault6">
                          Courses
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault7"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault7">
                          Certificates
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault8"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault8">
                          Learning Paths
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b solid pb-[10px] border-red-300">
                    <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-5 w-5 text-white"/>
                    </div>
                    <p className="ff-cg--semibold text-white ml-[6px]">Skill Level</p>
                  </div>
                  <div className="flex pt-[14px] pb-[24px]">
                    <div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault9" checked/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault9">
                          All
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault10"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault10">
                          Courses
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault11"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault11">
                          Certificates
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault12"/>
                        <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault12">
                          Learning Paths
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="grid gap-4 lg:gap-10 md:grid-cols-12">
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="relative">
                      <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                      <img className="w-full object-cover h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                    </div>
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                        <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold text-[20px]">$199.00</p>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="relative">
                      <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                      <img className="w-full object-cover h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                    </div>
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                        <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold text-[20px]">$199.00</p>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="relative">
                      <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                      <img className="w-full object-cover h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                    </div>
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                        <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold text-[20px]">$199.00</p>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="relative">
                      <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                      <img className="w-full object-cover h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                    </div>
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                        <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold text-[20px]">$199.00</p>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="relative">
                      <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                      <img className="w-full object-cover h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product4 } alt="" />
                    </div>
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                        <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold text-[20px]">$199.00</p>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="relative">
                      <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                      <img className="w-full object-cover h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product5 } alt="" />
                    </div>
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="ff-cg--semibold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                        <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold text-[20px]">$199.00</p>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                        </span>
                      </div>
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

export default Catalog;