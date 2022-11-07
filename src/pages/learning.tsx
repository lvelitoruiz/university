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
import axios from "axios";
// import Tippy from '@tippyjs/react/headless';

const Learning = () => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
  const [enrolls, setEnrolls] = useState([]);
  const [signed, setSigned] = useState(false);

  const [link, setLink] = useState("");

  const [upcoming, setUpcoming] = useState(true);
  const [progress, setProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [achievements, setAchievements] = useState(false);

  useEffect(() => {
    if (userName !== null) {
      setSigned(true);
    } else {
      navigate("/");
    }
  }, [userName]);

  const getEnrolls = async () => {
    var config = {
      method: 'get',
      url: process.env.GATSBY_ENDPOINT + '/api/enrollment',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };

    await axios(config)
      .then(function (response) {
        setEnrolls(response.data.data);
      })
      .catch(function (error) {
        console.log('****** this error: ', error);
      });
  }

  const getLink = async() => {

    const data = {
      "email": "luis.diaz@whiz.one",
      "firstName": "Luis",
      "lastName": "Diaz",
      "cid": 305
    };
    
    const config = {
      method: 'post',
      url: process.env.GATSBY_ENDPOINT + '/api/enrollment/sso',
      headers: { 
        'Authorization': 'Bearer ' + token, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    await axios(config)
    .then(function (response) {
      setLink(response.data.data.login_link);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  useEffect(() => {
    if (token !== null) {
      getEnrolls();
      getLink();
    }
  }, [token]);

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
      <div className="bg-slate-50 min-h-screen relative pb-[140px]">
        <Header isSignIn={signed} />

        {/* Title tab */}
        <section className="container px-[15px] mx-auto">
          <div className="mt-10  mb-10 flex lg:items-center justify-between flex-col lg:flex-row">
            <h3 className="text-[20px] lg:text-[40px] mb-6 lg:mb-0">Your <span className="ff-cg--semibold">Learning</span></h3>
            <div className="flex items-center overflow-x-auto">
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('upcoming')}>
                <p className={`pb-3 px-10 whitespace-nowrap duration-200 ${upcoming ? "ff-cg--semibold " : ""}`}>Upcoming</p>
                <span className={`border-b border-solid w-full duration-200 ${upcoming ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('progress')}>
                <p className={`pb-3 px-10 whitespace-nowrap duration-200 ${progress ? "ff-cg--semibold " : ""}`}>In Progress</p>
                <span className={`border-b border-solid w-full duration-200 ${progress ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('completed')}>
                <p className={`pb-3 px-10 whitespace-nowrap duration-200 ${completed ? "ff-cg--semibold " : ""}`}>Completed</p>
                <span className={`border-b border-solid w-full duration-200 ${completed ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('achievements')}>
                <p className={`pb-3 px-10 whitespace-nowrap duration-200 ${achievements ? "ff-cg--semibold " : ""}`}>Archievements</p>
                <span className={`border-b border-solid w-full duration-200 ${achievements ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming */}
        {
          (upcoming) &&
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Upcoming Courses</h3>
              <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
                <div className="relative w-full md:w-[200px]">
                  <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                  <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={product1} alt="" />
                </div>
                <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                  <div>
                    <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                    <div className="flex items-center lex-wrap">
                      <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                        <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                      </span>
                      <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                        <span className="ff-cg--semibold text-[12px]">4 Course</span>
                      </span>
                      <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                        <span className="ff-cg--semibold text-[12px]">Course</span>
                      </span>
                    </div>
                  </div>
                  <button className="w-full lg:w-fit flex flex-col items-center justify-between border solid border-black py-3 px-[16px] rounded-2xl md:ml-[20px] mt-4 md:mt-0 relative">
                    <Tippy content={<>
                      <h3 className="text-center font-bold mb-2 pt-1 text-sm text-gray-900">We're configurin the access to your courses</h3>
                      <p className="text-center pb-2 text-xs text-gray-900">We are currently working to have everything ready for you. You will start your learning path soon.</p>
                    </>} >
                      <span className="absolute text-xs top-0 right-0 bg-yellow-500 border-2 border-gray-800rounded-full w-4 h-4 flex justify-center items-center">i</span>
                    </Tippy>
                    <span className="leading-none text-[12px]">Status</span>
                    <span className="ff-cg--semibold text-[12px] leading-none">Pending</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        }

        {/* In progress */}
        {
          (progress) &&
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            {

              (false) &&
              <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-6">
                  <h3 className="text-[20px] lg:text-[30px]">From your Organization</h3>
                  <img className="object-cover h-[40px]" src={logo} alt="" />
                </div>
                {
                  (enrolls.length) && 
                  <>
                    {
                      enrolls.map( (item: any,index) => {
                        return(
                          <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row mb-8" key={index}>
                            <div className="relative w-full md:w-[200px]">
                              <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                              <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={item.course.imgUrl} alt="" />
                            </div>
                            <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                              <div>
                                <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">{item.course.title}</h4>
                                <div className="flex items-center lex-wrap">
                                  <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                                    <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                                  </span>
                                  <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                                    <ClockIcon className="h-4 w-4 mr-[6px]" />
                                    <span className="ff-cg--semibold text-[12px]">{item.course.duration}</span>
                                  </span>
                                  <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                                    <ClockIcon className="h-4 w-4 mr-[6px]" />
                                    <span className="ff-cg--semibold text-[12px]">Course</span>
                                  </span>
                                </div>
                              </div>
                              <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                                <span className="ff-cg--semibold mr-[20px]">Continue</span>
                                <ArrowRightCircleIcon className="h-6 w-6" />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    }
                  </>
                }
                {/* <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row mb-8">
                  <div className="relative w-full md:w-[200px]">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                    <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={product1} alt="" />
                  </div>
                  <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                    <div>
                      <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                      <div className="flex items-center lex-wrap">
                        <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                          <ClockIcon className="h-4 w-4 mr-[6px]" />
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                        <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                          <ClockIcon className="h-4 w-4 mr-[6px]" />
                          <span className="ff-cg--semibold text-[12px]">Course</span>
                        </span>
                      </div>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                      <span className="ff-cg--semibold mr-[20px]">Continue</span>
                      <ArrowRightCircleIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
                  <div className="relative w-full md:w-[200px]">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                    <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={product1} alt="" />
                  </div>
                  <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                    <div>
                      <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                      <div className="flex items-center lex-wrap">
                        <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                          <ClockIcon className="h-4 w-4 mr-[6px]" />
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                        <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                          <ClockIcon className="h-4 w-4 mr-[6px]" />
                          <span className="ff-cg--semibold text-[12px]">Course</span>
                        </span>
                      </div>
                    </div>
                    <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                      <span className="ff-cg--semibold mr-[20px]">Continue</span>
                      <ArrowRightCircleIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div> */}
              </div>
            }

            <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">From you</h3>
              {
                (enrolls.length) && 
                <>
                  {
                    enrolls.map( (item: any,index) => {
                      return(
                        <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row mb-8" key={index}>
                          <div className="relative w-full md:w-[200px]">
                            <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                            <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={item.course.imgUrl} alt="" />
                          </div>
                          <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                            <div>
                              <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">{item.course.title}</h4>
                              <div className="flex items-center lex-wrap">
                                <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                                  <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                                </span>
                                <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                                  <ClockIcon className="h-4 w-4 mr-[6px]" />
                                  <span className="ff-cg--semibold text-[12px]">{item.course.duration}</span>
                                </span>
                                <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                                  <ClockIcon className="h-4 w-4 mr-[6px]" />
                                  <span className="ff-cg--semibold text-[12px]">Course</span>
                                </span>
                              </div>
                            </div>
                            <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                              <a href={link} target="_blank" className="flex">
                                <span className="ff-cg--semibold mr-[20px]">Continue</span>
                                <ArrowRightCircleIcon className="h-6 w-6" />
                              </a>
                            </button>
                          </div>
                        </div>
                      )
                    })
                  }
                </>
              }
              {/* <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
                <div className="relative w-full md:w-[200px]">
                  <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                  <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={product1} alt="" />
                </div>
                <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                  <div>
                    <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                    <div className="flex items-center lex-wrap">
                      <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                        <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                      </span>
                      <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                        <span className="ff-cg--semibold text-[12px]">4 Course</span>
                      </span>
                      <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                        <span className="ff-cg--semibold text-[12px]">Course</span>
                      </span>
                    </div>
                  </div>
                  <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                    <span className="ff-cg--semibold mr-[20px]">Continue</span>
                    <ArrowRightCircleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div> */}
            </div>
          </section>
        }

        {/* Completed */}
        {
          (completed) &&
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Completed</h3>
              <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
                <div className="relative w-full md:w-[200px]">
                  <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                  <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={product1} alt="" />
                </div>
                <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                  <div>
                    <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                    <div className="flex items-center lex-wrap">
                      <span className="flex items-center border border-red-200 rounded-full px-[10px] mr-4 whitespace-nowrap">
                        <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                      </span>
                      <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                        <span className="ff-cg--semibold text-[12px]">4 Course</span>
                      </span>
                      <span className="flex items-center border border-red-200 rounded-full pl-[3px] pr-[10px] whitespace-nowrap mr-4">
                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                        <span className="ff-cg--semibold text-[12px]">Course</span>
                      </span>
                    </div>
                  </div>
                  <button className="w-full lg:w-fit flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-4 md:mt-0">
                    <span className="ff-cg--semibold mr-[20px]">See Certificate</span>
                    <ArrowRightCircleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        }

        {/* Archievements */}
        {
          (achievements) &&
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Certificates and Badges (TBD)</h3>
            </div>
          </section>
        }

        {/* footer */}
        <section className="w-full px-[15px] mx-auto pt-[20px] pb-[20px] absolute bottom-0 flex justify-center">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between container">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={logoWhite} alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Learning;
