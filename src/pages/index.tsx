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

const IndexPage = () => {
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
                  <img className="w-[50px] h-[50px] lg:w-[340px] lg:h-[60px] bg-slate-300" src="./images/logo.jpeg" alt="" />
                </h1>
              </div>
              <div className="hidden lg:block w-full mx-[20px]">
                <div className="shadow-lg flex items-center p-[14px] rounded-2xl border solid w-full cursor-pointer">
                  <MagnifyingGlassCircleIcon className="h-6 w-6 text-red-500 mr-[15px]"/>
                  <p className="font-bold">What skills do you want to lean today?</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <nav>
                  <ul className="flex items-center">
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <HomeIcon className="h-6 w-6"/>
                        <p className="font-bold">Home</p>
                      </a>
                    </li>
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <RectangleStackIcon className="h-6 w-6"/>
                        <p className="font-bold">Catalog</p>
                      </a>
                    </li>
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <MagnifyingGlassCircleIcon className="h-6 w-6"/>
                        <p className="font-bold">About</p>
                      </a>
                    </li>
                    <li className="mx-[15px]">
                      <a className="flex flex-col items-center" href="">
                        <ShoppingCartIcon className="h-8 w-8"/>
                      </a>
                    </li>
                    <li className="ml-[15px]">
                      <a className="flex flex-col items-center" href="">
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
        <section className="container px-[15px] mx-auto py-[40px] lg:py-[80px]">
          <div className="relative h-[580px] lg:h-[400px]">
            <div className="absolute top-[30px] left-[30px] z-10 flex items-center">
              <span className="text-white font-bold mr-[10px]">01</span>
              <div className="w-[100px] h-[12px] rounded-[12px] bg-red-500 mx-[8px] cursor-pointer"></div>
              <div className="w-[12px] h-[12px] solid border-white border-2 rounded-full mx-[8px] cursor-pointer"></div>
              <div className="w-[12px] h-[12px] solid border-white border-2 rounded-full mx-[8px] cursor-pointer"></div>
              <div className="w-[12px] h-[12px] solid border-white border-2 rounded-full mx-[8px] cursor-pointer"></div>
            </div>
            <div className="bg-neutral-800 rounded-2xl absolute left-0 right-0 top-0 bottom-0 p-[30px]">
              <div className="flex flex-col-reverse items-end lg:flex-row">
                <div className="w-full lg:w-[40%]">
                  <h2 className="font-bold text-white text-[26px] lg:text-[40px]">Find Your Next <span className="text-amber-400">Success</span></h2>
                  <p className="font-extralight text-white text-[16px] lg:text-[30px]">Face the future with confidence.</p>
                  <p className="font-extralight text-white text-[16px] lg:text-[30px]">Earn certificates and badge in high-demand fields.</p>
                  <button className="w-full lg:w-fit flex items-center justify-between bg-amber-400 py-[14px] px-[16px] rounded-2xl mt-[30px]">
                    <span className="font-bold mr-[20px]">Explore Our Offerings</span>
                    <ArrowRightCircleIcon className="h-6 w-6"/>
                  </button>
                </div>
                <div className="w-full lg:w-[60%] h-[300px] lg:h-[340px] flex items-center justify-start lg:justify-end">
                  <div className="relative">
                    <img className="w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] bg-slate-300 rounded-full lg:mr-[100px]" src="" alt="" />
                    <div className="hidden lg:block bg-red-500 text-white py-[15px] px-[18px] rounded-2xl w-[300px] absolute top-[50px] left-[-250px]">
                      <h3 className="font-bold">You Unlocked a New Skill!</h3>
                      <p className="font-extralight text-[13px]">Business Analytics</p>
                    </div>
                    <div className="bg-amber-400 py-[13px] lg:py-[18px] px-[15px] rounded-2xl w-[250px] lg:w-[300px] absolute right-[-100px] bottom-[20px] lg:bottom-0 lg:right-0">
                      <h3 className="font-bold text-[12px] lg:text-[16px]">You Unlocked a New Interview!</h3>
                      <p className="font-extralight text-[10px] lg:text-[13px]">Cybersecurity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* title button */}
        <section className="container px-[15px] mx-auto py-[30px] lg:py-[50px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[20px] lg:text-[40px] font-bold">What are your Goals Today?</h3>
              <p className="font-light lg:text-[30px]">Choose from world-class online courses and start your new future today.</p>
            </div>
            <div className="hidden lg:block">
              <button className="w-full lg:w-fit flex items-center justify-between bg-amber-400 py-[14px] px-[16px] rounded-2xl mt-[30px]">
                <span className="font-bold mr-[20px]">Go to All Courses</span>
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
                  <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[10px]">
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                          <span className="font-bold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="font-bold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[20px] lg:text-[40px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[20px]">$199.00</p>
                      <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="font-bold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[10px]">
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                          <span className="font-bold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="font-bold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[20px] lg:text-[40px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[20px]">$199.00</p>
                      <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="font-bold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-4">
                <div>
                  <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[10px]">
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                          <span className="font-bold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="font-bold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[20px] lg:text-[40px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[20px]">$199.00</p>
                      <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="font-bold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
