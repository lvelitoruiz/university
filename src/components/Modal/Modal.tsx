import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { navigate } from 'gatsby';

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
      <div className="bg-white rounded-3xl w-[650px] p-6 lg:pt-[60px] lg:pb-[60px] relative z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer absolute right-0 top-0 my-4 mx-6" onClick={handleModal}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
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
              <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-8">Sing in to your account</h3>
              <Form className="flex items-center justify-center">
                <div className="w-full lg:w-[80%]">
                  <div className="mb-4">
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Email</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      name='name'
                      type="text"
                      placeholder="Student@domain.com" />
                  </div>
                  <div>
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Password</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      name='password'
                      type="password"
                      placeholder="*******" />
                  </div>
                  <div className="my-3 flex justify-between px-1">
                    <p className="cursor-pointer hover:text-orange-400">Forgot your password?</p>
                    <p className="cursor-pointer hover:text-orange-400" onClick={changeSignIn}>Register instead</p>
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
              <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-8">Register</h3>
              <Form className="flex items-center justify-center">
                <div className="w-full lg:w-[80%]">
                  <div className="mb-4">
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Email</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='email'
                      placeholder="Student@domain.com" />
                  </div>
                  <div className="mb-4">
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">First Name</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='firstName'
                      placeholder="Your First Name" />
                  </div>
                  <div className="mb-4">
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Last Name</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='lastName'
                      placeholder="Your Last Name" />
                  </div>
                  <div className="mb-4">
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Phone Number</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="text"
                      name='phoneNumber'
                      placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Password</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="password"
                      name='password'
                      placeholder="*******" />
                  </div>
                  <div>
                    <label className="text-[12px] ff-cg--semibold" htmlFor="">Confirm Password</label>
                    <Field
                      className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md"
                      type="password"
                      name='passwordConfirm'
                      placeholder="*******" />
                  </div>
                  <div className="my-3 flex justify-between px-1">
                    <p className="cursor-pointer hover:text-orange-400" onClick={changeSignIn}>Sign In instead</p>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                    <span className="ff-cg--semibold mr-[20px]">Sign Up</span>
                  </button>
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
