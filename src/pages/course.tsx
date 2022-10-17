import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { 
  RectangleStackIcon,
  ShoppingCartIcon,
  PlayIcon,
  FolderIcon,
  DocumentIcon,
  CheckIcon,
  ClockIcon,
  ComputerDesktopIcon,
  XMarkIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import logoWhite from "../images/logo-white.png";
import bannerCourse from "../images/banner-course.png";
import Header from "../components/Header/Header";
import { navigate } from "gatsby";

const Course = () => {
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
        <section className="container px-[15px] mx-auto mt-[60px] lg:mb-[40px]">
          <div className="relative w-full min-h-[500px] lg:min-h-[420px]">
            <div className="relative min-h-[500px] lg:min-h-[420px]">
              <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
              <img className="w-full min-h-[500px] lg:min-h-[420px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
            </div>
            <div className="absolute top-[20px] lg:top-[30px] left-[20px] lg:left-[30px] w-[90%] lg:w-[40%]">
              <h2 className="ff-cg--semibold text-white text-[34px] lg:text-[40px] leading-none mb-[20px]">Introduction to Cybersecurity Tools & Cyber Attacks</h2>
              <p className="text-white text-[14px] mb-[50px]">This course gives you the background needed to understand basic Cybersecurity.  You will learn the types and motives of cyber attacks to further your knowledge of current threats.</p>
              <div className="flex items-center flex-wrap">
                <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                  <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                  <span className="ff-cg--semibold text-[12px]">Course</span>
                </span>
                <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                  <ClockIcon className="h-4 w-4 mr-[6px]"/>
                  <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                </span>
                <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                  <RectangleStackIcon className="h-4 w-4 mr-[6px]"/>
                  <span className="ff-cg--semibold text-[12px]">4 Modules</span>
                </span>
              </div>
              <div className="flex items-center">
                <button className="lg:w-fit flex flex-col items-center justify-between border solid border-[#fdbf38] py-[5px] px-[16px] rounded-2xl mt-[20px] mr-[20px]">
                  <span className="ff-cg--bold leading-none text-[28px] text-[#fdbf38]">$199</span>
                  <span className="ff-cg--semibold text-[12px] text-white leading-none">Price</span>
                </button>
                <button className="lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[20px] mr-[20px]">
                  <span className="ff-cg--semibold mr-[20px]">Buy this Course</span>
                  <ShoppingCartIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[60px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-[20px] lg:text-[30px] mb-[20px] ff-cg--semibold">What You Will Learn</h3>
              <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 mb-[20px] lg:mb-0">
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none">Discuss the evolution of security based on historical events.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none">List various types of malicious software.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none">Describe key cybersecurity concepts and common cybersecurity best practices.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none">Identify cybersecurity tools which include :  firewall, cryptography and digital forensics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 mb-[-40px]">
              <div className="bg-[#da1a32] rounded-2xl p-[20px]">
                <p className="text-white ff-cg--semibold mb-[10px]">Skills You Will Gain</p>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">Information Security Analyst</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">IT Security Analyst</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">Network Security</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">Malware</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                    <span className="ff-cg--semibold text-[12px]">Database</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-12 mt-[30px]">
              <h3 className="text-[20px] lg:text-[30px] mb-[20px] ff-cg--semibold">About the Course</h3>
              <p className="lg:text-[26px]">This course gives you the background needed to understand basic Cybersecurity.  You will learn the history of Cybersecurity, types and motives of cyber attacks to further your knowledge of current threats to organizations and individuals.  Key terminology, basic system concepts and tools will be examined as an introduction to the Cybersecurity field.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#222222]">
          <div className="container px-[15px] mx-auto pt-[20px] pb-[20px] lg:pb-[40px]">
            <h3 className="text-[#fdbf38] text-[20px] lg:text-[40px] mb-[20px] ff-cg--semibold text-center">What’s Included</h3>
            <div className="border solid rounded-2xl">
              <div className="flex flex-col p-[20px] border-b solid">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">History of Cybersecurity</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will give you a brief overview of the history of cybersecurity. You will also learn key terms and roles in cybersecurity.</p>
              </div>
              <div className="flex flex-col p-[20px] border-b solid">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">A brief overview of types of actors and their motives</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will provide you with a brief overview of types of actors and their motives. You will also understand different types of attacks and their impact on an organization and individuals.</p>
              </div>
              <div className="flex flex-col p-[20px] border-b solid">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">An overview of key security concepts</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will describe various key security concepts that are important in any cybersecurity position. The CIA Triad will be further explained.</p>
              </div>
              <div className="flex flex-col p-[20px]">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">An overview of key security concepts</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will describe various key security concepts that are important in any cybersecurity position. The CIA Triad will be further explained.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[20px]">
          <div className="bg-[#da1a32] text-center rounded-2xl p-[30px]">
            <div className="lg:w-[60%] mx-auto">
              <h3 className="text-[20px] lg:text-[40px] ff-cg--semibold text-white">Part of Cybersecurity Learning Path</h3>
              <p className="ff-cg--light lg:text-[30px] text-white">Completing this course will count towards your learning in the Cybersecurity Professioal Certificate</p>
              <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[20px] mx-auto">
                <span className="ff-cg--semibold mr-[20px]">Go to Learning Path</span>
                <RectangleStackIcon className="h-6 w-6"/>
              </button>
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

      <div className="bg-[#000000b3] fixed top-0 left-0 bottom-0 right-0 bg-red">
        <div className="absolute top-0 bottom-0 right-0 bg-white h-screen p-[15px] lg:p-[40px] w-full md:w-[60%] lg:w-[40%]">
          <div className="flex items-center justify-between border-b solid pb-[20px]">
            <div className="flex items-center">
              <h3 className="text-[20px] lg:text-[30px] ff-cg--semibold">Your Cart</h3>
              <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px] ml-[20px]">
                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#fdbf38] rounded-full p-[2px] mr-[10px] cursor-pointer">
              <XMarkIcon className="h-6 w-6"/>
            </div>
          </div>
          <div className="py-[20px] border-b solid overflow-y-auto" style={{height: "calc(100vh - 380px)"}}>
            <div className="lg:flex items-center justify-between border-b solid py-[15px]">
              <div className="lg:flex">
                <img className="w-full mb-[10px] lg:mb-0 h-[100px] lg:w-[190px] lg:h-[90px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                <div className="lg:ml-[10px] min-h-full flex flex-col justify-between lg:p-1 lg:w-[50%]">
                  <p className="ff-cg--semibold text-[20px] leading-none mb-2">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                  <div className="flex items-center flex-wrap">
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ff-cg--semibold mr-[10px]">$199</p>
                <TrashIcon className="h-6 w-6"/>
              </div>
            </div>
            <div className="lg:flex items-center justify-between border-b solid py-[15px]">
              <div className="lg:flex">
                <img className="w-full mb-[10px] lg:mb-0 h-[100px] lg:w-[190px] lg:h-[90px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                <div className="lg:ml-[10px] min-h-full flex flex-col justify-between lg:p-1 lg:w-[50%]">
                  <p className="ff-cg--semibold text-[20px] leading-none mb-2">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                  <div className="flex items-center flex-wrap">
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ff-cg--semibold mr-[10px]">$199</p>
                <TrashIcon className="h-6 w-6"/>
              </div>
            </div>
            <div className="lg:flex items-center justify-between border-b solid py-[15px]">
              <div className="lg:flex">
                <img className="w-full mb-[10px] lg:mb-0 h-[100px] lg:w-[190px] lg:h-[90px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                <div className="lg:ml-[10px] min-h-full flex flex-col justify-between lg:p-1 lg:w-[50%]">
                  <p className="ff-cg--semibold text-[20px] leading-none mb-2">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                  <div className="flex items-center flex-wrap">
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ff-cg--semibold mr-[10px]">$199</p>
                <TrashIcon className="h-6 w-6"/>
              </div>
            </div>
            <div className="lg:flex items-center justify-between border-b solid py-[15px]">
              <div className="lg:flex">
                <img className="w-full mb-[10px] lg:mb-0 h-[100px] lg:w-[190px] lg:h-[90px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                <div className="lg:ml-[10px] min-h-full flex flex-col justify-between lg:p-1 lg:w-[50%]">
                  <p className="ff-cg--semibold text-[20px] leading-none mb-2">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                  <div className="flex items-center flex-wrap">
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">Course</span>
                    </span>
                    <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                      <ClockIcon className="h-4 w-4 mr-[6px]"/>
                      <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="ff-cg--semibold mr-[10px]">$199</p>
                <TrashIcon className="h-6 w-6"/>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between py-[20px]">
              <p className="text-[16px] lg:text-[26px] ff-cg--semibold">Total</p>
              <p className="text-[16px] lg:text-[26px] ff-cg--semibold">$199</p>
            </div>
            <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mr-[20px] w-full">
              <span className="ff-cg--semibold mr-[20px]">Checkout</span>                
            </button>
            <p className="text-center mt-4 text-[13px]">Taxes, shipping, and delivery options calculated at checkout</p>
            <button className="flex items-center justify-center py-[14px] px-[16px] rounded-2xl mr-[20px] w-full mt-[20px]">
              <span className="ff-cg--semibold mr-[20px] underline decoration-1">Continue Shopping</span>                
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Course;