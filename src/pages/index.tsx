import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout/Layout"
import { 
  MagnifyingGlassCircleIcon,
  Bars3CenterLeftIcon,
  HomeIcon,
  RectangleStackIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  ArrowRightCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import logo from "../images/logo-full.png";
import logoWhite from "../images/logo-white.png";
import logoIso from "../images/iso.png";
import banner from "../images/banner.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import cyber from "../images/cyber.png";
import data from "../images/data.png";
import machine from "../images/machine.png";
import software from "../images/software.png";
import entre from "../images/entre.png";
import industrial from "../images/industrial.png";
import imgLarge from "../images/img-large.png";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const IndexPage = () => {

  const pagination = {
		clickable: true,
		// renderBullet: function (index:string , className:string) {
		//   return '<span class="w-3 h-3 mx-[6px] bg-black rounded-full cursor-pointer ' + className + '"></span>'
		// },
	};

  const [modalOpen,setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  }


  return (
    <Layout>
      <div className="bg-slate-50">
        {/* header */}
        <section className="bg-white shadow-lg">
          <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
            <div className="flex items-center justify-between">
              <div className="lg:hidden">
                <a className="flex flex-col items-center" href="">
                  <Bars3CenterLeftIcon className="h-12 w-12"/>
                </a>
              </div>
              <div className="">
                <h1>
                  <img className="object-cover hidden lg:block lg:min-w-[332px] lg:h-[60px]" src={ logo } alt="" />
                  <img className="object-cover lg:hidden w-[50px] h-[50px]" src={ logoIso } alt="" />
                </h1>
              </div>
              <div className="hidden lg:block w-full mx-[20px]">
                <div className="shadow-lg flex items-center px-[14px] py-[7px] rounded-2xl border solid w-full cursor-pointer">
                  <MagnifyingGlassCircleIcon className="h-6 w-6 text-[#da1a32] mr-[15px]"/>
                  <input className="w-full ff-cg--semibold placeholder:text-[#000000] p-[10px] focus:outline-none" type="text" placeholder="What skills do you want to lean today?" />
                </div>
              </div>
              <div className="hidden lg:block">
                <nav>
                  <ul className="flex items-center">
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <HomeIcon className="h-6 w-6"/>
                        <p className="ff-cg--semibold">Home</p>
                      </a>
                    </li>
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <RectangleStackIcon className="h-6 w-6"/>
                        <p className="ff-cg--semibold">Catalog</p>
                      </a>
                    </li>
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <MagnifyingGlassCircleIcon className="h-6 w-6"/>
                        <p className="ff-cg--semibold">About</p>
                      </a>
                    </li>
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <ShoppingCartIcon className="h-8 w-8"/>
                      </a>
                    </li>
                    <li className="ml-[15px]">
                      <a className="flex flex-col items-center cursor-pointer" onClick={handleModal}>
                        <UserCircleIcon className="h-8 w-8"/>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="lg:hidden">
                <a className="flex flex-col items-center" href="">
                  <MagnifyingGlassCircleIcon className="h-12 w-12"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* banner */}
        <section className="container px-[15px] mx-auto py-[40px] lg:pt-[80px] lg:pb-[40px]">
          <div className="relative h-[580px] lg:h-[400px] rounded-2xl overflow-hidden">
            <div className="swiper-pagination hidden">
              <div className="swiper-pagination-bullet swiper-pagination-bullet-active"></div>
            </div>
            {/* item */}
            <Swiper
											modules={[Pagination]}
											pagination={pagination}
											breakpoints={{
												640: {
													slidesPerView: 1,
													spaceBetween: 0,
												},
												768: {
													slidesPerView: 1,
													spaceBetween: 0,
												},
												1024: {
													slidesPerView: 1,
													spaceBetween: 0,
												},
											}}
											spaceBetween={0}
											slidesPerView={1}
											onSlideChange={() => console.log('slide change')}
											onSwiper={(swiper) => console.log(swiper)}
										>
              <SwiperSlide className="bg-[#222222] rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-[40%] h-full lg:mt-[40px]">
                    <div>
                      <h2 className="ff-cg--semibold text-white text-[26px] lg:text-[44px]">Find Your Next <span className="text-[#fdbf38]">Success</span></h2>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Face the future with confidence.</p>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Earn certificates and badge in high-demand fields.</p>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold mr-[20px]">Explore Our Offerings</span>
                      <ArrowRightCircleIcon className="h-6 w-6"/>
                    </button>
                  </div>
                  <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                    <div className="relative">
                      <img className="object-cover w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src={ banner } alt="" />
                      <div className="hidden lg:block bg-[#da1a32] text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                        <h3 className="ff-cg--semibold">You Unlocked a New Skill!</h3>
                        <p className="ff-cg--light text-[13px]">Business Analytics</p>
                        <img className="w-[90px] absolute right-[-42px] top-[37px]" src={ icon1 } alt="" />
                      </div>
                      <div className="bg-[#fdbf38] pl-[43px] pr-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                        <h3 className="ff-cg--semibold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                        <p className="ff-cg--light text-[10px] lg:text-[13px]">Cybersecurity</p>
                        <img className="w-[70px] absolute left-[-42px] top-0" src={ icon2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#222222] rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-[40%] h-full lg:mt-[40px]">
                    <div>
                      <h2 className="ff-cg--semibold text-white text-[26px] lg:text-[44px]">Find Your Next <span className="text-[#fdbf38]">Success</span></h2>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Face the future with confidence.</p>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Earn certificates and badge in high-demand fields.</p>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold mr-[20px]">Explore Our Offerings</span>
                      <ArrowRightCircleIcon className="h-6 w-6"/>
                    </button>
                  </div>
                  <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                    <div className="relative">
                      <img className="object-cover w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src={ banner } alt="" />
                      <div className="hidden lg:block bg-[#da1a32] text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                        <h3 className="ff-cg--semibold">You Unlocked a New Skill!</h3>
                        <p className="ff-cg--light text-[13px]">Business Analytics</p>
                        <img className="w-[90px] absolute right-[-42px] top-[37px]" src={ icon1 } alt="" />
                      </div>
                      <div className="bg-[#fdbf38] pl-[43px] pr-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                        <h3 className="ff-cg--semibold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                        <p className="ff-cg--light text-[10px] lg:text-[13px]">Cybersecurity</p>
                        <img className="w-[70px] absolute left-[-42px] top-0" src={ icon2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#222222] rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-[40%] h-full lg:mt-[40px]">
                    <div>
                      <h2 className="ff-cg--semibold text-white text-[26px] lg:text-[44px]">Find Your Next <span className="text-[#fdbf38]">Success</span></h2>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Face the future with confidence.</p>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Earn certificates and badge in high-demand fields.</p>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold mr-[20px]">Explore Our Offerings</span>
                      <ArrowRightCircleIcon className="h-6 w-6"/>
                    </button>
                  </div>
                  <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                    <div className="relative">
                      <img className="object-cover w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src={ banner } alt="" />
                      <div className="hidden lg:block bg-[#da1a32] text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                        <h3 className="ff-cg--semibold">You Unlocked a New Skill!</h3>
                        <p className="ff-cg--light text-[13px]">Business Analytics</p>
                        <img className="w-[90px] absolute right-[-42px] top-[37px]" src={ icon1 } alt="" />
                      </div>
                      <div className="bg-[#fdbf38] pl-[43px] pr-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                        <h3 className="ff-cg--semibold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                        <p className="ff-cg--light text-[10px] lg:text-[13px]">Cybersecurity</p>
                        <img className="w-[70px] absolute left-[-42px] top-0" src={ icon2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#222222] rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-[40%] h-full lg:mt-[40px]">
                    <div>
                      <h2 className="ff-cg--semibold text-white text-[26px] lg:text-[44px]">Find Your Next <span className="text-[#fdbf38]">Success</span></h2>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Face the future with confidence.</p>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Earn certificates and badge in high-demand fields.</p>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold mr-[20px]">Explore Our Offerings</span>
                      <ArrowRightCircleIcon className="h-6 w-6"/>
                    </button>
                  </div>
                  <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                    <div className="relative">
                      <img className="object-cover w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src={ banner } alt="" />
                      <div className="hidden lg:block bg-[#da1a32] text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                        <h3 className="ff-cg--semibold">You Unlocked a New Skill!</h3>
                        <p className="ff-cg--light text-[13px]">Business Analytics</p>
                        <img className="w-[90px] absolute right-[-42px] top-[37px]" src={ icon1 } alt="" />
                      </div>
                      <div className="bg-[#fdbf38] pl-[43px] pr-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                        <h3 className="ff-cg--semibold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                        <p className="ff-cg--light text-[10px] lg:text-[13px]">Cybersecurity</p>
                        <img className="w-[70px] absolute left-[-42px] top-0" src={ icon2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#222222] rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-[40%] h-full lg:mt-[40px]">
                    <div>
                      <h2 className="ff-cg--semibold text-white text-[26px] lg:text-[44px]">Find Your Next <span className="text-[#fdbf38]">Success</span></h2>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Face the future with confidence.</p>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Earn certificates and badge in high-demand fields.</p>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold mr-[20px]">Explore Our Offerings</span>
                      <ArrowRightCircleIcon className="h-6 w-6"/>
                    </button>
                  </div>
                  <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                    <div className="relative">
                      <img className="object-cover w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src={ banner } alt="" />
                      <div className="hidden lg:block bg-[#da1a32] text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                        <h3 className="ff-cg--semibold">You Unlocked a New Skill!</h3>
                        <p className="ff-cg--light text-[13px]">Business Analytics</p>
                        <img className="w-[90px] absolute right-[-42px] top-[37px]" src={ icon1 } alt="" />
                      </div>
                      <div className="bg-[#fdbf38] pl-[43px] pr-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                        <h3 className="ff-cg--semibold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                        <p className="ff-cg--light text-[10px] lg:text-[13px]">Cybersecurity</p>
                        <img className="w-[70px] absolute left-[-42px] top-0" src={ icon2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#222222] rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-[40%] h-full lg:mt-[40px]">
                    <div>
                      <h2 className="ff-cg--semibold text-white text-[26px] lg:text-[44px]">Find Your Next <span className="text-[#fdbf38]">Success</span></h2>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Face the future with confidence.</p>
                      <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Earn certificates and badge in high-demand fields.</p>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                      <span className="ff-cg--semibold mr-[20px]">Explore Our Offerings</span>
                      <ArrowRightCircleIcon className="h-6 w-6"/>
                    </button>
                  </div>
                  <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                    <div className="relative">
                      <img className="object-cover w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src={ banner } alt="" />
                      <div className="hidden lg:block bg-[#da1a32] text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                        <h3 className="ff-cg--semibold">You Unlocked a New Skill!</h3>
                        <p className="ff-cg--light text-[13px]">Business Analytics</p>
                        <img className="w-[90px] absolute right-[-42px] top-[37px]" src={ icon1 } alt="" />
                      </div>
                      <div className="bg-[#fdbf38] pl-[43px] pr-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                        <h3 className="ff-cg--semibold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                        <p className="ff-cg--light text-[10px] lg:text-[13px]">Cybersecurity</p>
                        <img className="w-[70px] absolute left-[-42px] top-0" src={ icon2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* title button */}
        <section className="container px-[15px] mx-auto py-[30px] lg:py-[50px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[20px] lg:text-[40px] ff-cg--semibold">What are your Goals Today?</h3>
              <p className="font-light lg:text-[30px]">Choose from world-class online courses and start your new future today.</p>
            </div>
            <div className="hidden lg:block">
              <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                <span className="ff-cg--semibold mr-[20px]">Go to All Courses</span>
                <ArrowRightCircleIcon className="h-6 w-6"/>
              </button>
            </div>
          </div>
        </section>

        {/* list products */}
        <section className="container px-[15px] mx-auto pt-[20px]">
          <div>
            <div className="flex lg:grid gap-4 lg:gap-10 lg:grid-cols-12 overflow-x-auto">
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
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
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
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
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
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
            </div>
          </div>
        </section>

        <section className="bg-[#222222] mt-[-80px]">
          {/* title button */}
          <section className="container px-[15px] mx-auto pb-[20px] lg:pb-[50px] pt-[160px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-light lg:text-[30px] text-white">Find the skills you need to advance in your career</p>
              </div>
              <div className="hidden lg:block">
                <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px] lg:mt-0">
                  <span className="ff-cg--semibold mr-[20px]">Go to All Paths</span>
                  <ArrowRightCircleIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </section>

          {/* list products */}
          <section className="container px-[15px] mx-auto pt-[20px]">
            <div className="pb-[40px] lg:pb-[100px]">
              <div className="grid gap-6 lg:gap-10 lg:grid-cols-12">
                <div className="lg:min-w-fit lg:col-span-4">
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between min-h-[220px] relative">
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mt-[20px]">CyberSecurity</h4>
                    <button className="w-fit flex items-center justify-between bg-[#fdbf38] py-[6px] px-[16px] rounded-full mt-[30px]">
                      <span className="ff-cg--semibold">Learn More</span>
                    </button>
                    <img className="w-[200px] bottom-0 right-0 absolute" src={ cyber } alt="" />
                  </div>
                </div>
                <div className="lg:min-w-fit lg:col-span-4">
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between min-h-[220px] relative">
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mt-[20px]">Data Analyticas</h4>
                    <button className="w-fit flex items-center justify-between bg-[#fdbf38] py-[6px] px-[16px] rounded-full mt-[30px]">
                      <span className="ff-cg--semibold">Learn More</span>
                    </button>
                    <img className="w-[200px] bottom-0 right-0 absolute" src={ data } alt="" />
                  </div>
                </div>
                <div className="lg:min-w-fit lg:col-span-4">
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between min-h-[220px] relative">
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mt-[20px]">Machine Learning</h4>
                    <button className="w-fit flex items-center justify-between bg-[#fdbf38] py-[6px] px-[16px] rounded-full mt-[30px]">
                      <span className="ff-cg--semibold">Learn More</span>
                    </button>
                    <img className="w-[140px] bottom-0 right-0 absolute" src={ machine } alt="" />
                  </div>
                </div>
                <div className="lg:min-w-fit lg:col-span-4 hidden lg:block">
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between min-h-[220px] relative">
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mt-[20px]">Software Dev</h4>
                    <button className="w-fit flex items-center justify-between bg-[#fdbf38] py-[6px] px-[16px] rounded-full mt-[30px]">
                      <span className="ff-cg--semibold">Learn More</span>
                    </button>
                    <img className="w-[360px] bottom-0 right-0 absolute" src={ software } alt="" />
                  </div>
                </div>
                <div className="lg:min-w-fit lg:col-span-4 hidden lg:block">
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between min-h-[220px] relative">
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mt-[20px]">Entreoreneurship</h4>
                    <button className="w-fit flex items-center justify-between bg-[#fdbf38] py-[6px] px-[16px] rounded-full mt-[30px]">
                      <span className="ff-cg--semibold">Learn More</span>
                    </button>
                    <img className="w-[200px] bottom-0 right-0 absolute" src={ entre } alt="" />
                  </div>
                </div>
                <div className="lg:min-w-fit lg:col-span-4 hidden lg:block">
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between min-h-[220px] relative">
                    <h4 className="text-[20px] lg:text-[40px] ff-cg--semibold leading-none mt-[20px]">Industrial Eng</h4>
                    <button className="w-fit flex items-center justify-between bg-[#fdbf38] py-[6px] px-[16px] rounded-full mt-[30px]">
                      <span className="ff-cg--semibold">Learn More</span>
                    </button>
                    <img className="w-[150px] bottom-0 right-0 absolute" src={ industrial } alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="container px-[15px] mx-auto py-[40px] lg:py-[80px]">
          <div className="">
            <div className="grid gap-6 lg:gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 order-2 lg:order-1 flex items-center flex-col text-center lg:text-left">
                <h3 className="text-[20px] lg:text-[70px] ff-cg--semibold leading-none mb-[10px] lg:mb-[20px]">Learning With Experts</h3>
                <p className="text-[16px] lg:text-[50px] ff-cg--light">Meet faculty from UMGC who'll share their experience through videos, articles, quizzes and discussions.</p>
              </div>
              <div className="lg:col-span-8 order-1">
                <img className="object-cover w-full" src={ imgLarge } alt="" />
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
      {
        (modalOpen) ?
        <Modal handleModal={handleModal} /> : ""
      }
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
