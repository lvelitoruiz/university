import { ComputerDesktopIcon, ClockIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react'
import { getCart, deleteCourseCart } from "../../helpers/cart";

export const CheckoutModal = ({ handleCheck, redirectLogin, setCoursesCircle }: any) => {

    const userName = typeof window !== 'undefined' && localStorage.getItem('name');

    const cartLocal = typeof window !== 'undefined' && localStorage.getItem('cart');

    const [signed, setSigned] = useState(false);

    const [cart, setCart] = useState<any>(null);
    const [fprice, setFprice] = useState(0);

    const [items, setItems] = useState<any>([]);

    const closeModal = () => {
        handleCheck();
    }

    useEffect(() => {
        console.log('established title',userName);
        if (userName !== null) {
            setSigned(true);
        }
    }, [userName]);

    useEffect( () => {
        setCoursesCircle();
    },[]);

    useEffect(() => {
        console.log('set local user',signed);
        if (userName !== null) {
            console.log('set signed now');
            getCartClient().then((response) => {
                console.log('this is the response',response)
                setCart(response.data);
            })
        } else {
            console.log('*** testing items: **** ',cartLocal);
            if (cartLocal !== null) {
                setItems(JSON.parse(cartLocal.toString()));
            } else {
                setItems([]);
            }
        }
    }, [cartLocal]);

    // useEffect(() => {
    //     getCartClient().then((response) => {
    //         setCart(response);
    //     })
    // }, []);

    const getCartClient = async () => {
        const gotCart = await getCart();
        return gotCart;
    }

    const removeItem = (index: number,uuid: string) => {
        if (signed) {
            deleteCourseCart(uuid);
            getCartClient().then((response) => {
                setCart(response.data);
            })
        } else {
            let newItems = [...items];
            newItems.splice(index, 1);
            setItems(newItems);
            typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(newItems));
        }

    }

    useEffect(() => {
        if(signed) {
            if (cart !== null) {
                console.log('getting the actual cart ***** ', cart);
                if (cart.courses !== undefined) {
                    setItems(cart.courses);
                } else {
                    setItems([]);
                }
                if (cart.total !== null) {
                    setFprice(cart.total);
                } else {
                    setFprice(0);
                }
            } else {
                setItems([]);
                setFprice(0);
            }
        }
        setCoursesCircle();
    }, [cart]);

    useEffect(() => {
        if (!signed) {
            if (items.length) {
                let final = 0;
                items.map((item: any) => {
                    final = final + parseFloat(item.price)
                })
                setFprice(final);
                setCoursesCircle();
            } else {
                setFprice(0);
                setCoursesCircle();
            }
        }
        setCoursesCircle();
    }, [items])

    const sentToLogin = () => {
        redirectLogin();
    }

    return (
        <div className="fixed left-0 top-0 h-screen w-screen z-50 flex items-start justify-end md:p-10">
            <div className="bg-opacity-40 bg-black z-10 absolute left-0 top-0 h-screen w-screen"></div>
            <div className="bg-white md:rounded-3xl w-[750px] p-3 pt-5 lg:p-6 lg:pt-[30px] lg:pb-[30px] relative z-50">
                <div className='absolute right-0 top-0 lg:top-[18px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 bg-[#fdbf38] rounded-md cursor-pointer my-4 mx-6" onClick={closeModal}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div>
                    <div className="flex items-center border-b solid pb-5">
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
                                                <div className="lg:flex flex-col border-b solid py-8" key={index}>
                                                    <div className="flex items-center justify-between">
                                                        <div className='flex items-center'>
                                                            <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={item.imgUrl} alt="" />
                                                            <div className="ml-[10px]">
                                                                <p className="ff-cg--semibold text-[20px] mb-1 leading-none">{item.title}</p>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center flex-wrap">
                                                                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                                            <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                                                                            <span className="ff-cg--semibold text-[12px]">Course</span>
                                                                        </span>
                                                                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                                            <ClockIcon className="h-4 w-4 mr-[6px]" />
                                                                            <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                                                                <span className="ff-cg--bold leading-none text-[20px]">${item.price}</span>
                                                                <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                                                            </div>
                                                            <button className="border solid border-[#fdbf38] rounded-xl p-2 ml-5" onClick={() => removeItem(index,item.uuid)}>
                                                                <TrashIcon className="h-6 w-6" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </> : <><p className='ff-cg--bold leading-none text-[20px] mt-6'>You have no courses on your cart</p></>
                        }
                        {/* <div className="lg:flex flex-col border-b solid py-8">
                            <div className="flex items-center">
                                <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={bannerCourse} alt="" />
                                <div className="ml-[10px]">
                                    <p className="ff-cg--semibold text-[20px] mb-1 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-wrap">
                                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                                                <span className="ff-cg--semibold text-[12px]">Course</span>
                                            </span>
                                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                <ClockIcon className="h-4 w-4 mr-[6px]" />
                                                <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                                        <span className="ff-cg--bold leading-none text-[20px]">$199</span>
                                        <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                                    </div>
                                    <button className="border solid border-[#fdbf38] rounded-xl p-2 ml-5">
                                        <TrashIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex flex-col border-b solid py-8">
                            <div className="flex items-center">
                                <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={bannerCourse} alt="" />
                                <div className="ml-[10px]">
                                    <p className="ff-cg--semibold text-[20px] mb-1 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-wrap">
                                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                                                <span className="ff-cg--semibold text-[12px]">Course</span>
                                            </span>
                                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                <ClockIcon className="h-4 w-4 mr-[6px]" />
                                                <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                                        <span className="ff-cg--bold leading-none text-[20px]">$199</span>
                                        <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                                    </div>
                                    <button className="border solid border-[#fdbf38] rounded-xl p-2 ml-5">
                                        <TrashIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex flex-col border-b solid py-8">
                            <div className="flex items-center">
                                <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={bannerCourse} alt="" />
                                <div className="ml-[10px]">
                                    <p className="ff-cg--semibold text-[20px] mb-1 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-wrap">
                                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                                                <span className="ff-cg--semibold text-[12px]">Course</span>
                                            </span>
                                            <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                                                <ClockIcon className="h-4 w-4 mr-[6px]" />
                                                <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="lg:w-fit flex flex-col items-center border-black justify-between border solid py-[5px] px-[16px] rounded-xl">
                                        <span className="ff-cg--bold leading-none text-[20px]">$199</span>
                                        <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                                    </div>
                                    <button className="border solid border-[#fdbf38] rounded-xl p-2 ml-5">
                                        <TrashIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex items-center justify-between pb-5 pt-10">
                        <p className="text-[16px] lg:text-[26px] ff-cg--semibold">Total</p>
                        {
                            (items.length) ?
                                <p className="text-[16px] lg:text-[26px] ff-cg--semibold">${fprice}</p> : <p className="text-[16px] lg:text-[26px] ff-cg--semibold">$0</p>
                        }
                    </div>
                    {
                        (items.length) ?
                        <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mr-[20px] w-full">
                            {
                                (signed) ?
                                <Link to="/checkout"><span className="ff-cg--semibold mr-[20px]">Checkout</span></Link> :
                                <a onClick={() => sentToLogin()}><span className="ff-cg--semibold mr-[20px]">Checkout</span></a>
                            }
                            
                        </button> : ""
                    }
                    
                    <p className="text-center mt-4 text-[13px]">Taxes, shipping, and delivery options calculated at checkout</p>
                </div>
            </div>
        </div>
    )
}

