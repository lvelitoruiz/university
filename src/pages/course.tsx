import React from "react"
import Layout from "../components/Layout/Layout"
import { 
  MagnifyingGlassCircleIcon,
  Bars3CenterLeftIcon,
  HomeIcon,
  RectangleStackIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

const Course = () => {
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
                  <img className="w-[50px] h-[50px] lg:w-[340px] lg:h-[60px] bg-slate-300" src="" alt="" />
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

export default Course;