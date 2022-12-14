import React from "react";
import Layout from "../components/Layout/Layout";
import { 
  ClockIcon,
  CheckIcon,
  MagnifyingGlassCircleIcon,
  Bars3CenterLeftIcon,
  HomeIcon,
  RectangleStackIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import logoWhite from "../images/logo-white.png";
import logoIso from "../images/iso.png";
import logo from "../images/logo-full.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";

const Path = () => {
  return (
    <Layout>
      <div className="bg-slate-50">
        
        <div className="bg-path mb-[40px]">
          {/* header */}
          <section className="">
            <div className="container px-[15px] mx-auto py-[20px] lg:py-[24px]">
              <div className="flex items-center justify-between">
                <div className="lg:hidden">
                  <a className="flex flex-col items-center text-white" href="">
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
                  <div className="shadow-lg flex bg-white items-center px-[14px] py-[7px] rounded-2xl border solid w-full cursor-pointer">
                    <MagnifyingGlassCircleIcon className="h-6 w-6 text-[#da1a32] mr-[15px]"/>
                    <input className="w-full ff-cg--semibold placeholder:text-[#000000] p-[10px] focus:outline-none" type="text" placeholder="What skills do you want to lean today?" />
                  </div>
                </div>
                <div className="hidden lg:block">
                  <nav>
                    <ul className="flex items-center">
                      <li className="mx-[15px]">
                        <a className="flex flex-col items-center text-white" href="">
                          <HomeIcon className="h-6 w-6"/>
                          <p className="ff-cg--semibold">Home</p>
                        </a>
                      </li>
                      <li className="mx-[15px]">
                        <a className="flex flex-col items-center text-white" href="">
                          <RectangleStackIcon className="h-6 w-6"/>
                          <p className="ff-cg--semibold">Catalog</p>
                        </a>
                      </li>
                      <li className="mx-[15px]">
                        <a className="flex flex-col items-center text-white" href="">
                          <MagnifyingGlassCircleIcon className="h-6 w-6"/>
                          <p className="ff-cg--semibold">About</p>
                        </a>
                      </li>
                      <li className="mx-[15px]">
                        <a className="flex flex-col items-center text-white" href="">
                          <ShoppingCartIcon className="h-8 w-8"/>
                        </a>
                      </li>
                      <li className="ml-[15px]">
                        <a className="flex flex-col items-center text-white" href="">
                          <UserCircleIcon className="h-8 w-8"/>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="lg:hidden">
                  <a className="flex flex-col items-center text-white" href="">
                    <MagnifyingGlassCircleIcon className="h-12 w-12"/>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* banner */}
          <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[40px] lg:pb-0">
            <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="ff-cg--semibold text-white text-[34px] lg:text-[50px] leading-none mb-[10px]">Cybersecurity Professional Learning Path</h2>
                <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">Understand contemporary learning theories to develop online learning experiences.</p>
                <div className="flex items-center flex-wrap mt-[60px]">
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">Learning Path</span>
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
                <div className="flex items-center mt-[30px] mb-[60px]">
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
              <div className="lg:col-span-12 mb-[-40px] hidden lg:block">
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
            </div>
          </section>
        </div>

        <section className="container px-[15px] mx-auto lg:hidden">
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
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[60px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-12">
              <h3 className="text-[20px] lg:text-[30px] mb-[20px] ff-cg--semibold">What You Will Learn</h3>
              <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 mb-[20px] lg:mb-0">
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none text-[24px] ff-cg--light">Discuss the evolution of security based on historical events.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none text-[24px] ff-cg--light">List various types of malicious software.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none text-[24px] ff-cg--light">Describe key cybersecurity concepts and common cybersecurity best practices.</p>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                      <CheckIcon className="h-6 w-6 text-white"/>
                    </div>
                    <p className="leading-none text-[24px] ff-cg--light">Identify cybersecurity tools which include :  firewall, cryptography and digital forensics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 mt-[60px]">
            <div className="lg:col-span-6 mb-[20px] lg:mb-0">
              <h3 className="text-[20px] lg:w-[80%] lg:text-[70px] ff-cg--semibold leading-none mb-[10px] lg:mt-[20px]">Kickstart your Cybersecurity career today</h3>
            </div>
            <div className="lg:col-span-6 mb-[20px] lg:mb-0">
              <p className="text-[24px] ff-cg--light mb-[20px]">This 8-course Professional Certificate will give you the technical skills to become job-ready for a Cybersecurity Analyst role.</p>
              <p className="text-[24px] ff-cg--light mb-[50px]">This certificate will provide the foundational concepts for the cybersecurity field. We will look at the field as a whole, examine various types of attacks, and wrap up looking at more advanced topics.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#da1a32]">
          <div className="container px-[15px] mx-auto pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60px]">
            <h3 className="text-[20px] lg:text-[40px] mb-[40px] ff-cg--semibold text-white text-center">What???s Included</h3>
            <div className="flex lg:grid gap-4 lg:gap-10 lg:grid-cols-12 overflow-x-auto">
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[50px] pb-[20px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright ?? 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Path;
