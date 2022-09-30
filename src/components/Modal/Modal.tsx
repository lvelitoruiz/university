import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { navigate } from 'gatsby';
import { 
  AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'

const Modal = ({handleModal}: any) => {
  const [signIn,setSignIn] = useState(true);
  const [isRegister,setRegister] = useState(false);
  const [compare,setCompare] = useState<any>(null);
  const USER_ANONIMO = "46e7807e-8fdb-4722-a718-ef8f950756ef";
  const USER_GROUP = "bea4d79e-9082-4842-890c-a0d635a3bf44";
  const USER_ADMIN_GROUP = "7b612f56-b0f5-42ed-9237-4f27b15af5a4";
  const [errorLogin,setErrorLogin] = useState(false);

  

  const changeSignIn = () => {
    setSignIn(!signIn);
    setRegister(!isRegister);
  }

  useEffect(() => {
    setErrorLogin(false);
  },[]);

  const loginUser = (user: string,password: string) => {
    axios
		.post('https://accelered-api.whiz.pe/api/auth', {
			username: user,
			password: password
		})
		.then((response) => {
			// setUserInfo(response.data);
      console.log('*** processing data *** ',response.data.data._embedded.user.profile);
			typeof window !== 'undefined' && localStorage.setItem('access_token', response.data.access_token);
			typeof window !== 'undefined' && localStorage.setItem('userName', response.data.data._embedded.user.profile.firstName + " " + response.data.data._embedded.user.profile.lastName);
			const decoded: any = (jwt_decode(response.data.access_token));
      setCompare(decoded.role);
		}).catch( function(error) {
			console.log(error);
		});
  }

  const createUser = (email: string,firstName: string,lastName: string,phoneNumber: string,password: string) => {
		axios
      .post('https://accelered-api.whiz.pe/api/users', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        mobile_phone: phoneNumber,
        profile_url: "",
        group: "",
        time_zone: ""
      })
      .then((response) => {
        console.log('**** this is the response ***',response);
        handleModal();
        // return navigate("/user/students");
        // setUserInfo(response.data);
        // setPost(jwt_decode(response.data.access_token));
      }).catch( function(error) {
        console.log(error)
        // console.log(error);
        // setNoUser(true);
        // setErrors(false);
      });
  } 

  useEffect( () => {
    console.log('***** compare jwt ****: ',compare);
    console.log(typeof compare);
    if(compare !== '') {
      console.log('upperclass');
      if(compare == USER_ADMIN_GROUP || compare == USER_ANONIMO || compare == USER_GROUP) {
        console.log('handling the modal for you');
        handleModal();
        setErrorLogin(false);
        navigate('/profile');
      } else {
        setErrorLogin(true);
      }
    }
  },[compare]);

  
  return (
    <div className="fixed left-0 top-0 h-screen w-screen z-50 flex items-center justify-center">
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
              console.log(values);
              loginUser(values.name,values.password);
            }}
          >
            <div className="">
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
              <Form className="flex items-center justify-center">
                <div className="w-full lg:w-[80%]">
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Email</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-xl"
                      name='name'
                      type="text"
                      placeholder="Student@domain.com" />
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label className="text-sm ff-cg--semibold" htmlFor="">Password</label>
                      <a className='ff-cg--semibold text-[#da1a32] ml-2 underline' href="">Forgot Password?</a>
                    </div>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-xl"
                      name='password'
                      type="password"
                      placeholder="*******" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                    <span className="ff-cg--semibold mr-[20px]">Sign In</span>
                  </button>
                </div>
              </Form>
              {
                (!errorLogin) ? <p className='text-orange-400 ff-cg--semibold text-center mt-4'>There's a problem with your user</p> : ""
              }
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
              console.log(values);
              createUser(values.email,values.firstName,values.lastName,values.phoneNumber,values.password);
            }}
          >
            <div>
              <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-0">Sign up and start learning</h3>
              <div className='text-center mb-1'>
                <p>Already have an account?<a className='ff-cg--semibold text-[#da1a32] ml-2 underline' onClick={changeSignIn}>Sign Up</a></p>
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
                    <label className="text-sm ff-cg--semibold" htmlFor="">Full Name</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='firstName'
                      placeholder="Your First Name" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm ff-cg--semibold" htmlFor="">Email</label>
                    <Field
                      className="w-full bg-gray-100 placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='email'
                      placeholder="Student@domain.com" />
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

export default Modal;
