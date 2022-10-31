import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { navigate } from 'gatsby';
import { 
  AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'
import { UserInfo, API_URL } from '../../const';
import { createCart,getCart,addCourseToCart } from '../../helpers/cart';


const ModalApplication = ({handleModal, setCoursesCircle}: any) => {
  const [signIn,setSignIn] = useState<boolean>(true);
  const [isRegister,setRegister] = useState<boolean>(false);
  const [compare,setCompare] = useState<any>(null);
  const [errorLogin,setErrorLogin] = useState<boolean>(false);

  const changeSignIn = () => {
    setSignIn(!signIn);
    setRegister(!isRegister);
  }

  useEffect( () => {
    if (compare) {
      if (compare == UserInfo.USER_ADMIN_GROUP || compare == UserInfo.USER_ID || compare == UserInfo.USER_GROUP) {
        handleModal();
        setErrorLogin(false);
        if(typeof window !== 'undefined' && localStorage.getItem('cart')) {
          const coursesToSend: any = [];
          const cart = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cart') || '{}');
          cart.map( (item:any) => {
            const itemToPush = {'uuid': item.uuid, 'price': parseFloat(item.price)}
            coursesToSend.push(itemToPush)
          })
          console.log('**** these are the courses ***** ',coursesToSend);
          
          // const isCart = getCart().then( response => {
          //   if(!response.status) {
          //     console.log('groceries');
          //     createCart(coursesToSend);
          //   } else {
          //     coursesToSend.map( (item: any) => {
          //       addCourseToCart(item);
          //     })
          //   }
          // });
          firstCart(coursesToSend);
          typeof window !== 'undefined' && localStorage.removeItem('cart');
        }
        setCoursesCircle();
        const comesFromcart = typeof window !== 'undefined' && localStorage.getItem('fromCart');
        if(comesFromcart === "true") {
          navigate(( (compare == UserInfo.USER_ADMIN_GROUP) ? '/admin' : '/checkout' ));
        } else {
          navigate(( (compare == UserInfo.USER_ADMIN_GROUP) ? '/admin' : '/' ));
        }
        
      } else {
        setErrorLogin(true);
      }
    }
  },[compare]);

  useEffect(() => {
    setErrorLogin(false);
  },[]);

  const loginUser = (user: string, password: string) => {
    axios.post(
      API_URL + 'api/auth', { username: user, password: password })
		.then((response) => {
			typeof window !== 'undefined' && localStorage.setItem('access_token', response?.data?.access_token);
			typeof window !== 'undefined' && localStorage.setItem('user', JSON.stringify(response?.data?.data?._embedded?.user));
			typeof window !== 'undefined' && localStorage.setItem('name', response?.data?.data?._embedded?.user?.profile?.firstName);
			typeof window !== 'undefined' && localStorage.setItem('lastName', response?.data?.data?._embedded?.user?.profile?.lastName);
			const decoded: any = (jwt_decode(response.data.access_token));
      setCompare(decoded.role);
		}).catch(function(error) {
			console.log('[DEBUG]', error);
		});
  }

  const createUser = (
    email: string, firstName: string, lastName: string, phoneNumber: string, password: string) => {
		axios
      .post(API_URL + 'api/users', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        mobilePhone: phoneNumber,
        profileUrl: "",
        group: "Group 1",
        timeZone: "UTC-5"
      })
      .then((response) => {
        handleModal();
        // return navigate("/user/students");
        // setPost(jwt_decode(response.data.access_token));
      }).catch( function(error) {
        console.log('[DEBUG]', error)
        // console.log(error);
        // setNoUser(true);
        // setErrors(false);
      });
  } 

  const firstCart = async (coursesToSend: any) => {
    await getCart().then( response => {
      console.log(response);
      if(!response.status) {
        console.log('groceries');
        createCart(coursesToSend);
      } else {
        coursesToSend.map( (item: any) => {
          addCourseToCart(item);
        })
      }
    });
  }

  
  
  return (
    <div className="fixed left-0 top-0 h-screen w-screen z-[101] flex items-start overflow-auto justify-center">
      <div className="bg-opacity-40 bg-black z-10 absolute left-0 top-0 h-screen w-screen" onClick={handleModal}>
      </div>
      <div className="bg-white rounded-3xl w-[750px] p-6 pt-[60px] lg:pb-[60px] relative z-50">
        <div className='absolute right-0 top-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 bg-[#fdbf38] rounded-md cursor-pointer my-4 mx-6" onClick={handleModal}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        {/* Sign In */}
        {
          (signIn) ?
          <Formik
            initialValues={{
              name: '',
              password: '',
            }}
            onSubmit={(values) => {
              loginUser(values.name, values.password);
            }}
          >
            <div className="">
              <p className='text-center ff-cg--semibold'>Machine Learning Introduction Course</p>
              <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-0">Start your application</h3>
              <div className='text-center mb-1'>
                <p>Already have an account? <a className='ff-cg--semibold text-[#da1a32] ml-2 underline' onClick={changeSignIn}>Sign In for 1 Click Apply</a></p>
              </div>
              <Form className="flex items-center justify-center">
                <div className="w-full lg:w-[80%]">
                <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Full Name</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md mt-2"
                      type="text"
                      name='firstName'
                      placeholder="Your Full Name" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Email</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md mt-2"
                      type="text"
                      name='email'
                      placeholder="Student@domain.com" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Mobile Phone</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md mt-2"
                      type="text"
                      name='phoneNumber'
                      placeholder="Your Phone Number" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Preferred Method of Payment</label>
                    <div className="rounded-[30px] bg-white p-2 md:p-[15px] bg-gray-100 mt-2">
                        <div className="flex items-start">
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Upfront</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Monthly</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Financed Tutition</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Not Sure Yet</span>
                                </span>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Preferred Start Date</label>
                    <div className="rounded-[30px] bg-white p-2 md:p-[15px] bg-gray-100 mt-2">
                        <div className="flex items-start">
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">ASAP</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Within 3 Months</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"/>
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Not Sure Yet</span>
                                </span>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                  
                  <div className="bg-white rounded-[10px] py-8 px-4 shadow">
                        <div className="flex items-center mb-5">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                            <label form="default-checkbox" className="ml-2">save my details and create an account to follow application status</label>
                        </div>
                        <div>
                            <label className="text-sm ff-cg--semibold" htmlFor="">Password</label>
                            <Field
                            className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                            type="password"
                            name='password'
                            placeholder="*******" />
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                            <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                            <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                            <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                        </div>
                    </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px] mb-6">
                    <span className="ff-cg--semibold mr-[20px]">Apply Now</span>
                  </button>
                  <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                        <label form="default-checkbox" className="ml-2">By checking this box, I consent to be contacted by Stringboard, including by email, phone or text, about my interest in furthering my career with online programs. I also agree to the Terms of Use and Privacy Policy.*</label>
                  </div>
                </div>
              </Form>
            </div>
          </Formik> : ""
        }
        {
          (isRegister) ? 
            <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              phoneNumber: '',
              password: '',
              passwordConfirm: '',
            }}
            onSubmit={(values) => {
              createUser(values.email,values.firstName,values.lastName,values.phoneNumber,values.password);
            }}
          >
            <div>
              <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-0">Sign up and start learning</h3>
              <div className='text-center mb-1'>
                <p>Already have an account?<a className='ff-cg--semibold text-[#da1a32] ml-2 underline' onClick={changeSignIn}>Sign In</a></p>
              </div>
              <div className='flex items-center justify-center'>
                <div className="w-full lg:w-[80%] lg:flex items-center justify-center gap-2 lg:gap-4">
                  <button className="w-full flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[20px]">
                    <AdjustmentsVerticalIcon className="h-6 w-6"/>
                    <span className="ff-cg--semibold ml-[20px]">Sign up with Google</span>
                  </button>
                  <button className="w-full flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[20px]">
                    <AdjustmentsVerticalIcon className="h-6 w-6"/>
                    <span className="ff-cg--semibold ml-[20px]">Sign up with Faceboock</span>
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-center py-4'>
                <div className="w-full lg:w-[80%] flex items-center justify-center">
                  <div className='w-full flex items-center gap-3'>
                    <span className='border border-solid w-full'></span>
                    <p className='text-gray-300'>or</p>
                    <span className='border border-solid w-full'></span>
                  </div>
                </div>
              </div>
              <Form className="flex items-center justify-center">
                <div className="w-full lg:w-[80%]">
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">First Name</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='firstName'
                      placeholder="Your First Name" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Last Name</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='lastName'
                      placeholder="Your Last Name" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Email</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='email'
                      placeholder="Student@domain.com" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Mobile Phone</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='phoneNumber'
                      placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label className="text-sm ff-cg--semibold" htmlFor="">Password</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="password"
                      name='password'
                      placeholder="*******" />
                  </div>
                  <div className='flex items-center gap-2 mt-4'>
                    <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                    <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                    <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                    <span className='w-full h-2 bg-gray-100 rounded-md'></span>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                    <span className="ff-cg--semibold mr-[20px]">Sign Up</span>
                  </button>
                  <p className='mt-6 text-sm text-center'>By Signing up, you agree to our Terms of Use and Privacy Policy</p>
                </div>
              </Form>
            </div>
          </Formik> : ""
        }    
      </div>
    </div>
  );
};

export default ModalApplication;
