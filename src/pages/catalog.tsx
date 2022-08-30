import React from "react"
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

const Catalog = () => {
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

        {/* banner img */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="relative w-full h-[140px] lg:h-[220px]">
            <img className="w-full h-full bg-slate-300 rounded-2xl" src="" alt="" />
            <div className="absolute top-[30px] lg:top-[50px] left-[30px]">
              <p className="font-bold text-white text-[16px] lg:text-[16px]">The Skills You</p>
              <h2 className="font-bold text-white text-[34px] lg:text-[50px]">Need to <span className="text-amber-400">Succeed</span></h2>
            </div>
          </div>
        </section>

        {/* content */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              {/* filter */}
              <div className="bg-amber-400 lg:bg-red-500 h-full p-[15px] rounded-2xl mb-[40px]">
                <p className="lg:text-white lg:text-[30px] font-bold lg:px-[20px] lg:py-[10px]">Filters</p>
                <div className="hidden lg:block">
                  <div className="flex items-center border-b solid pb-[10px] border-red-300">
                    <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-5 w-5 text-white"/>
                    </div>
                    <p className="font-bold text-white ml-[6px]">Ways to Learn</p>
                  </div>
                  <div className="flex pt-[14px] pb-[24px]">
                    <div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault1">
                          All
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault2">
                          Courses
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault3">
                          Certificates
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault4">
                          Learning Paths
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b solid pb-[10px] border-red-300">
                    <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-5 w-5 text-white"/>
                    </div>
                    <p className="font-bold text-white ml-[6px]">Ways to Learn</p>
                  </div>
                  <div className="flex pt-[14px] pb-[24px]">
                    <div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault5" checked/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault5">
                          All
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault6"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault6">
                          Courses
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault7"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault7">
                          Certificates
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio" id="flexRadioDefault8"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault8">
                          Learning Paths
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b solid pb-[10px] border-red-300">
                    <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-5 w-5 text-white"/>
                    </div>
                    <p className="font-bold text-white ml-[6px]">Skill Level</p>
                  </div>
                  <div className="flex pt-[14px] pb-[24px]">
                    <div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault9" checked/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault9">
                          All
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault10"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault10">
                          Courses
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault11"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault11">
                          Certificates
                        </label>
                      </div>
                      <div className="mb-[13px] flex items-center">
                        <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadio2" id="flexRadioDefault12"/>
                        <label className="inline-block text-white font-bold text-[13px]" htmlFor="flexRadioDefault12">
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
                    <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="font-bold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="font-bold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="font-bold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="font-bold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="font-bold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="font-bold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="font-bold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="font-bold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="font-bold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="font-bold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
                <div className="md:col-span-6 lg:col-span-4">
                  <div>
                    <img className="w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src="" alt="" />
                    <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                      <div>
                        <div className="flex items-center gap-4 mb-[16px]">
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[10px] pr-[10px]">
                            <span className="font-bold text-[12px]">Cybersecurity</span>
                          </span>
                          <span className="flex items-center text-red-500 border border-red-500 rounded-full pl-[3px] pr-[10px]">
                            <ClockIcon className="h-4 w-4 mr-[6px]"/>
                            <span className="font-bold text-[12px]">4 Course</span>
                          </span>
                        </div>
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
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
          </div>
        </section>

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px]">
          <div className="bg-neutral-800 rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="w-[50px] h-[50px] lg:w-[340px] lg:h-[60px] bg-slate-300" src="./images/logo.jpeg" alt="" />
            <p className="text-white font-bold">Copyright</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Catalog;