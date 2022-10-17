import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  ComputerDesktopIcon,
  ClockIcon,
  TrashIcon,
  ArrowLongLeftIcon
} from '@heroicons/react/24/outline'
import logoIso from "../images/iso.png";
import Header from "../components/Header/Header";
import { navigate } from "gatsby";

const Checkout = () => {

  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const cart = typeof window !== 'undefined' && localStorage.getItem('cart');
  const [fprice,setFprice] = useState(0);

  const [items, setItems] = useState<any>([]);

  const [signed, setSigned] = useState(false);

  useEffect(() => {
    if (userName !== null) {
      setSigned(true);
    } else {
      navigate("/");
    }
  }, [userName]);

  const removeItem = (index: number) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(newItems));
  }

  useEffect(() => {
    if (cart !== null) {
      setItems(JSON.parse(cart.toString()));
    } else {
      setItems([]);
    }
  }, [cart]);

  useEffect( () => {
    if(items.length) {
      let final = 0;
      items.map( (item:any) => {
        final = final + parseFloat(item.price)
      })
      setFprice(final);
    } else {
      setFprice(0);
    }
  },[items])


  return (
    <Layout>
      <div className="overflow-x-hidden">
        <Header isSignIn={signed} />
        <div className="relative before:bg-slate-50 before:absolute before:top-0 before:bottom-0 before:w-[5000px] before:z-0 before:right-[-4000px]">
          <div className="overflow-y-auto">
            <div className="container lg:px-[15px] mx-auto bg-white">
              <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 min-h-screen relative bg-white">
                <div className="lg:col-span-8">
                  <div className="p-[15px] lg:p-[40px]">
                    <div className="flex items-center">
                      <ArrowLongLeftIcon className="h-10 w-10 mr-[10px] cursor-pointer" />
                      <img className="object-cover w-[50px] h-[50px]" src={logoIso} alt="" />
                    </div>
                    <h3 className="text-[28px] lg:text-[40px] ff-cg--semibold my-[40px] border-b solid pb-[15px]">Checkout</h3>
                    <div className="border-b solid pb-[50px]">
                      <p className="text-[18px] lg:text-[26px] mb-[20px] ff-cg--semibold">Pay with your favorite app</p>
                      <div className="flex items-center flex-col lg:flex-row">
                        <button className="flex items-center justify-center bg-white shadow-lg py-[14px] px-[16px] rounded-2xl mt-[20px] mr-[20px] min-w-full lg:min-w-[200px]">
                          <p>PayPal</p>
                        </button>
                        <button className="flex items-center justify-center bg-white shadow-lg py-[14px] px-[16px] rounded-2xl mt-[20px] mr-[20px] min-w-full lg:min-w-[200px]">
                          <p>Pay</p>
                        </button>
                      </div>
                    </div>
                    <div className="py-[40px]">
                      <p className="text-[18px] lg:text-[26px] mb-[20px] ff-cg--semibold">Pay using a credit card</p>
                      <form className="grid gap-4 lg:gap-10 lg:grid-cols-12" action="">
                        <div className="col-span-12">
                          <div className="flex items-center justify-between">
                            <p className="ff-cg--semibold">Cardholder Name</p>
                            <p>img</p>
                          </div>
                          <input className="focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                          <div className="flex items-center justify-between">
                            <p className="ff-cg--semibold">Cardholder Number</p>
                          </div>
                          <input placeholder="1234 2345 2345 1234" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                        </div>
                        <div className="col-span-8 lg:col-span-3">
                          <div className="flex items-center justify-between">
                            <p className="ff-cg--semibold">Expiration</p>
                          </div>
                          <input placeholder="MM/YY" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                        </div>
                        <div className="col-span-4 lg:col-span-2">
                          <div className="flex items-center justify-between">
                            <p className="ff-cg--semibold">CVV</p>
                          </div>
                          <input placeholder="123" className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                        </div>
                        <div className="col-span-12">
                          <label className="inline-flex items-center mt-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                            <span className="ml-2 ff-cg--medium text-[13px]">By completing your purchase you agree to <span className="text-[#da1a32]">Terms of Service</span></span>
                          </label>
                        </div>
                        <div className="col-span-12">
                          <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mr-[20px] w-full">
                            <span className="ff-cg--semibold mr-[20px]">Complete Checkout</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-slate-50 relative">
                  <div className="h-full p-[15px] lg:p-[40px] w-full">
                    <div className="flex items-center justify-between border-b solid pb-[20px] mb-[40px]">
                      <h3 className="text-[20px] lg:text-[30px] ff-cg--semibold">Your Cart</h3>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px] ml-[20px]">
                        <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                      </span>
                    </div>
                    <div className="overflow-y-auto">
                      {
                        (items.length) ?
                          <>
                            {
                              items.map((item: any, index: number) => {
                                return (
                                  <div className="lg:flex flex-col border-b solid py-[15px]" key={index}>
                                    <div className="flex items-center mb-6">
                                      <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={item.imgUrl} alt="" />
                                      <p className="ff-cg--semibold ml-[10px] text-[20px] leading-none">{item.title}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center flex-wrap">
                                        <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                          <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                                          <span className="ff-cg--semibold text-[12px]">Course</span>
                                        </span>
                                        <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                          <ClockIcon className="h-4 w-4 mr-[6px]" />
                                          <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                                        </span>
                                      </div>
                                      <div className="flex items-center">
                                        <p className="ff-cg--semibold mr-[10px]">${item.price}</p>
                                        <TrashIcon className="h-6 w-6" onClick={() => removeItem(index)} />
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </> : <><p className='ff-cg--bold leading-none text-[20px] mt-6'>You have no courses on your cart</p></>
                      }
                      {/* <div className="lg:flex flex-col border-b solid py-[15px]">
                        <div className="flex items-center mb-6">
                          <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={bannerCourse} alt="" />
                          <p className="ff-cg--semibold ml-[10px] text-[20px] leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-wrap">
                            <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">Course</span>
                            </span>
                            <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                            </span>
                          </div>
                          <div className="flex items-center">
                            <p className="ff-cg--semibold mr-[10px]">$199</p>
                            <TrashIcon className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                      <div className="lg:flex flex-col border-b solid py-[15px]">
                        <div className="flex items-center mb-6">
                          <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={bannerCourse} alt="" />
                          <p className="ff-cg--semibold ml-[10px] text-[20px] leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-wrap">
                            <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">Course</span>
                            </span>
                            <span className="flex items-center border border-black rounded-full pl-[3px] pr-[10px] mr-[10px]">
                              <ClockIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                            </span>
                          </div>
                          <div className="flex items-center">
                            <p className="ff-cg--semibold mr-[10px]">$199</p>
                            <TrashIcon className="h-6 w-6" />
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="flex items-center justify-between py-[20px]">
                      <p className="text-[16px] lg:text-[26px] ff-cg--semibold">Total</p>
                      {
                        (items.length) ?
                          <p className="text-[16px] lg:text-[26px] ff-cg--semibold">${fprice}</p> : <p className="text-[16px] lg:text-[26px] ff-cg--semibold">$0</p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
