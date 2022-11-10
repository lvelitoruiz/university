import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, navigate } from "gatsby";
import { Header } from "../components/Header/Header";
import logoWhite from "../images/logo-white.png";
import { MuiTelInput } from 'mui-tel-input';

import { 
  ArrowLeftCircleIcon,
} from '@heroicons/react/24/outline'
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

const Students = () => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const [signed,setSigned] = useState(false);

  const formikCreate = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: "",
			lastName: "",
      password: "",
			email: "",
			mobilePhone: "",
      img: ""
		},
		validate: (values) => {
			const errors: { firstName?: string; lastName?: string; email?: string; mobilePhone?: string; password?: string } = {};

			if (!values.firstName) {
				errors.firstName = 'Required';
			}

      if (!values.password) {
				errors.password = 'Required';
			}

			if (!values.lastName) {
				errors.lastName = 'Required';
			}

			if (!values.email) {
				errors.email = 'Required';
			}

			if (!values.mobilePhone) {
				errors.mobilePhone = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: (values: any) => {
      let data = values;
      data.group = "Unidad",
      data.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone,
      console.log(data);
      // createUser(data);
		}
	});

  const createUser = (data: any) => {
    let token = localStorage.getItem("access_token");
		axios({
			method: 'post',
			url: process.env.API_URL + '/api/admin-group/users',
			headers: {
				Authorization : `Bearer ${token}`
			},
			data: data
		})
		.then( (response: any) => {
			if(response.data.status){
        toast.success('Creado exitosamente')
				setTimeout( () => {
					return navigate("/students")
				}, 500)
			}
      else{
        toast.error("Ha ocurrido un error intenta nuevamente")
      }
		})
		.catch( (error: any) => {
      toast.error("Ha ocurrido un error intenta nuevamente")
			console.log(error)
		});
  };

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    }else {
      navigate("/");
    }
  },[userName]);
  
  return (
    <Layout>
      <div className="bg-[#f2f2f2]">
        <div>
          {/* header */}
          <Header isSignIn={signed} />

          <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[40px] lg:pb-0">
            <div className="lg:flex lg:items-center lg:justify-between pb-10">
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Link to="/students" className="flex items-center">
                      <ArrowLeftCircleIcon className="h-6 w-6"/>
                      <span className="ff-cg--medium ml-2">BACK TO STUDENTS</span>
                    </Link>
                  </div>
                  <h2 className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">Add Student</h2>
                </div>
              </div>
            </div>
            <div className="grid gap-5 lg:gap-10 lg:grid-cols-12">
            <form onSubmit={formikCreate.handleSubmit} className="col-span-12 grid gap-5 lg:gap-10 lg:grid-cols-12">
              <div className="col-span-12">
                <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
                  <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mb-10">
                    <div className="md:col-span-12">
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold">First Name</p>
                      </div>
                      <input 
                        className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                        name="firstName"
                        type="text"
                        onChange={formikCreate.handleChange}
                        value={formikCreate.values.firstName}
                      />
                    </div>
                    <div className="md:col-span-12">
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold">Last Name</p>
                      </div>
                      <input 
                        className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                        name="lastName"
                        type="text"
                        onChange={formikCreate.handleChange}
                        value={formikCreate.values.lastName}
                      />
                    </div>
                    <div className="md:col-span-12">
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold">Password</p>
                      </div>
                      <input 
                        className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                        name="password"
                        type="password"
                        onChange={formikCreate.handleChange}
                        value={formikCreate.values.password}
                      />
                    </div>
                    <div className="md:col-span-12">
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold">Email Address</p>
                      </div>
                      <input 
                        className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                        name="email"
                        type="email"
                        onChange={formikCreate.handleChange}
                        value={formikCreate.values.email}
                      />
                    </div>
                    <div className="md:col-span-12">
                      <div className="flex items-center justify-between">
                        <p className="ff-cg--semibold">Phone Number</p>
                      </div>
                      <MuiTelInput 
                        className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                        name="mobilePhone"
                        onChange={(value) => formikCreate.setFieldValue("mobilePhone", value)}
                        value={formikCreate.values.mobilePhone}
                      />
                    </div>
                    <div className="md:col-span-12">
                      <p className="ff-cg--semibold mb-2">Avatar Picture</p>
                      <div className="flex justify-center items-center w-full">
                        <label form="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-[#f7f7f7] rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
                          <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-20 h-20 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-[18px] ff-cg--medium">Drag and drop your file, or  <span className="underline">Browse</span></p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"/>
                        </label>
                      </div> 
                    </div>
                  </div>
                  <div className="md:flex items-center justify-center gap-4 lg:gap-10">
                    <button className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                      <Link to="/students" className="ff-cg--semibold">Return</Link>
                    </button>              
                    <button type="submit" className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                      <span className="ff-cg--semibold">Create Student</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            </div>

          </section>

          {/* footer */}
          <section className="container px-[15px] mx-auto pt-[50px] pb-[20px]">
            <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
              <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
              <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Students;