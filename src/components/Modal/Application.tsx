import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { navigate } from 'gatsby';
import { useFormik } from 'formik';
import { 
  AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'
import { UserInfo } from '../../const';
import toast from 'react-hot-toast';
import { createCart,getCart,addCourseToCart } from '../../helpers/cart';

const ModalApplication = ({handleModal, setCoursesCircle, courseUuid}: any) => {
  const [isApplication,setApplication] = useState<boolean>(true);
  const [isSignIn,setSignIn] = useState<boolean>(false);
  const [compare,setCompare] = useState<any>(null);
  const [errorLogin,setErrorLogin] = useState<boolean>(false);
  const [strongPassword,setStrongPassword] = useState<any>(0);

  const changeSignIn = () => {
    setApplication(!isApplication);
    setSignIn(!isSignIn);
  }

  const formikApp = useFormik({
		enableReinitialize: true,
		initialValues: {
      courseUuid: courseUuid,
      paymentMethod: '',
      preferredStart: '',
      password: '',
      acceptRegister: false
    },
		validate: (values) => {
			const errors: { courseUuid?: string; paymentMethod?: string; preferredStart?: string; password?: string; } = {};

      if (!values.courseUuid) {
				errors.courseUuid = 'Required';
			}

			if (!values.paymentMethod) {
				errors.paymentMethod = 'Required';
			}

      if (!values.preferredStart) {
				errors.preferredStart = 'Required';
			}

      if (!values.password) {
				errors.password = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: (values: any) => {
			console.log(values);
			createApplication(values);
		},
	});

  const formikLogin = useFormik({
		enableReinitialize: true,
		initialValues: {
      username: '',
      password: '',
    },
		validate: (values: any) => {
			const errors: { username?: string; password?: string; } = {};

			if (!values.username) {
				errors.username = 'Required';
			}

			if (!values.password) {
				errors.password = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: (values: any) => {
			loginUser(values);
		},
	});

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

  const loginUser = (values: any) => {
    axios.post(
      process.env.API_URL + '/api/auth', values)
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

  const createApplication = (values: any) => {
    let token = localStorage.getItem("access_token");		
    console.log(values);  
		axios({
			method: 'post',
			url: process.env.API_URL + '/api/applications',
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			data: JSON.stringify(values)
		  })
		.then(function (response) {
			if(response.data.status){
        toast.success('Aplicado exitosamente')
				setTimeout( () => {
					return navigate("/success");
				}, 3000);
			}
			else{
				toast.error('Ha ocurrido un error intenta nuevamente <br/> Mensaje del sistema: ' + response.data.message)
			}
		})
		.catch(function (error) {
			console.log(error);
			toast.error('Ha ocurrido un error intenta nuevamente <br/> Mensaje del sistema: ' + error.message)
		});
  }

  const regExpWeak = /[a-z]/;
  const regExpMedium = /\d+/;
  const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  const handlePassword = (value:any) => {
    console.log('password: ' + value);
    if(value.length == 0) setStrongPassword(0) 
    if(value.length <= 3 && (value.match(regExpWeak) || value.match(regExpMedium) || value.match(regExpStrong))) setStrongPassword(1);
    if(value.length >= 6 && ((value.match(regExpWeak) && value.match(regExpMedium)) || (value.match(regExpMedium) && value.match(regExpStrong)) || (value.match(regExpWeak) && value.match(regExpStrong)))) setStrongPassword(2);
    if(value.length >= 6 && value.match(regExpWeak) && value.match(regExpMedium) && value.match(regExpStrong)) setStrongPassword(3);
    console.log('strong pass: ' + strongPassword);
  }

  const createUser = (
    email: string, firstName: string, lastName: string, phoneNumber: string, password: string) => {
		axios
      .post(process.env.API_URL + '/api/users', {
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
      <div className="bg-opacity-40 bg-black z-10 fixed left-0 top-0 h-screen w-screen" onClick={handleModal}>
      </div>
      <div className="bg-white rounded-3xl w-[750px] p-6 pt-[60px] lg:pb-[60px] relative z-50">
        <div className='absolute right-0 top-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 bg-[#fdbf38] rounded-md cursor-pointer my-4 mx-6" onClick={handleModal}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        {/* Sign In */}
        {
          (isApplication) ?
          (<div className="">
              <p className='text-center ff-cg--semibold'>Machine Learning Introduction Course</p>
              <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-0">Start your application</h3>
              <div className='text-center mb-1'>
                <p>Already have an account? <a className='ff-cg--semibold text-[#da1a32] ml-2 underline' onClick={changeSignIn}>Sign In for 1 Click Apply</a></p>
              </div>
              <form onSubmit={ formikApp.handleSubmit } className="flex items-center justify-center">
                <div className="w-full lg:w-[80%]">
                <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Full Name</label>
                    <input
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md mt-2"
                      type="text"
                      name='firstName'
                      onChange={formikApp.handleChange}
                      placeholder="Your Full Name" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Email</label>
                    <input
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md mt-2"
                      type="text"
                      name='email'
                      onChange={formikApp.handleChange}
                      placeholder="Student@domain.com" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Mobile Phone</label>
                    <input
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md mt-2"
                      type="text"
                      name='phoneNumber'
                      onChange={formikApp.handleChange}
                      placeholder="Your Phone Number" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Preferred Method of Payment</label>
                    <div className="rounded-[30px] bg-white p-2 md:p-[15px] bg-gray-100 mt-2">
                        <div className="flex items-start">
                            <div className="flex items-center mr-4">
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="upfront" 
                              name="paymentMethod"
                              checked={formikApp.values.paymentMethod == 'upfront'}
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                            />
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Upfront</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="monthly" 
                              name="paymentMethod"
                              checked={formikApp.values.paymentMethod == 'monthly'}
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                            />
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Monthly</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="financed tutition" 
                              name="paymentMethod"
                              checked={formikApp.values.paymentMethod == 'financed tutition'}
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                              />
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Financed Tutition</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="not sure yet" 
                              name="paymentMethod"
                              checked={formikApp.values.paymentMethod == 'not sure yet'}
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                            />
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
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="asap" 
                              name="preferredStart"
                              checked={formikApp.values.preferredStart == 'asap'} 
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                            />
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">ASAP</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="within 3 months" 
                              name="preferredStart" 
                              checked={formikApp.values.preferredStart == 'within 3 months'}
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                            />
                            <label form="default-radio-1" className="ml-2 text-base text-dark ff-cg--semibold">
                                <span className="flex items-center">
                                <span className="ff-cg--semibold">Within 3 Months</span>
                                </span>
                            </label>
                            </div>
                            <div className="flex items-center mr-4">
                            <input 
                              id="default-radio-1" 
                              type="radio" 
                              value="not sure yet" 
                              name="preferredStart"
                              checked={formikApp.values.preferredStart == 'not sure yet'}
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-dark bg-gray-100 border-dark focus:ring-dark focus:ring-2"
                            />
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
                            <input 
                              id="acceptRegister" 
                              type="checkbox" 
                              value={formikApp.values.acceptRegister} 
                              onChange={formikApp.handleChange} 
                              className="w-4 h-4 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"
                            />
                            <label htmlFor="acceptRegister" className="ml-2">save my details and create an account to follow application status</label>
                        </div>
                        <div>
                            <label className="text-sm ff-cg--semibold" htmlFor="">Password</label>
                            <input
                              className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                              type='password'
                              name='password'
                              value={formikApp.values.password}
                              onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => { formikApp.setFieldValue("password", e.target.value); handlePassword(e.target.value)}}
                              //onChange={formikApp.handleChange}
                              placeholder="*******" 
                            />
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <span className={'w-full h-2 rounded-md' + (strongPassword > 0 ? ' bg-green-400' : ' bg-gray-100')}></span>
                            <span className={'w-full h-2 rounded-md' + (strongPassword > 1 ? ' bg-green-400' : ' bg-gray-100')}></span>
                            <span className={'w-full h-2 rounded-md' + (strongPassword > 2 ? ' bg-green-400' : ' bg-gray-100')}></span>
                            <span className={'w-full h-2 rounded-md' + (strongPassword > 2 ? ' bg-green-400' : ' bg-gray-100')}></span>
                        </div>
                    </div>
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px] mb-6"
                  >
                    <span className="ff-cg--semibold mr-[20px]">Apply Now</span>
                  </button>
                  <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                        <label form="default-checkbox" className="ml-2">By checking this box, I consent to be contacted by Stringboard, including by email, phone or text, about my interest in furthering my career with online programs. I also agree to the Terms of Use and Privacy Policy.*</label>
                  </div>
                </div>
              </form>
            </div>) : ""
        }
        {
          (isSignIn) ? 
          (<div className="">
            <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-0">Welcome back</h3>
            <div className='text-center mb-1'>
              <p>Don't have account? <a className='ff-cg--semibold text-[#da1a32] ml-2 underline' onClick={changeSignIn}>Sign Up</a></p>
            </div>
            <div className='flex items-center justify-center'>
              <div className="w-full lg:w-[80%] lg:flex items-center justify-center gap-2 lg:gap-4">
                <button className="w-full flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[20px]">
                  <AdjustmentsVerticalIcon className="h-6 w-6"/>
                  <span className="ff-cg--semibold ml-[20px]">Continue with Google</span>
                </button>
                <button className="w-full flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[20px]">
                  <AdjustmentsVerticalIcon className="h-6 w-6"/>
                  <span className="ff-cg--semibold ml-[20px]">Continue with Faceboock</span>
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
            <form onSubmit={ formikLogin.handleSubmit } className="flex items-center justify-center">
              <div className="w-full lg:w-[80%]">
                <div className="mb-6">
                  <label className="text-sm ff-cg--semibold" htmlFor="">Email</label>
                  <input
                    className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-xl"
                    name='username'
                    value={formikLogin.values.username} 
                    onChange={formikApp.handleChange} 
                    type="text"
                    placeholder="Student@domain.com" />
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <label className="text-sm ff-cg--semibold" htmlFor="">Password</label>
                    <a className='ff-cg--semibold text-[#da1a32] ml-2 underline' href="">Forgot Password?</a>
                  </div>
                  <input
                    className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-xl"
                    name='password'
                    value={formikLogin.values.password} 
                    onChange={formikApp.handleChange} 
                    type="password"
                    placeholder="*******" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                  <span className="ff-cg--semibold mr-[20px]">Sign In</span>
                </button>
              </div>
            </form>
            {
              (!errorLogin) ? <p className='text-orange-400 ff-cg--semibold text-center mt-4'>There's a problem with your user</p> : ""
            }
          </div>) : ""
        }    
      </div>
    </div>
  );
};

export default ModalApplication;
