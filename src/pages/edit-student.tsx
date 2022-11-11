import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import {
  ArrowLeftCircleIcon,
  ArrowUpTrayIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'
import { useFormik } from 'formik';
import { MuiTelInput } from 'mui-tel-input';
import logoWhite from "../images/logo-white.png";
import Header from "../components/Header/Header";
import { Link, navigate } from "gatsby";
import toast from 'react-hot-toast';
import axios from 'axios';

const Account = ({ location }: any) => {

  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}');
  const [userData, setUserData] = useState<any>([]);
  const [signed, setSigned] = useState(false);
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(false);
  const [application, setApplication] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    console.log('this is the location', location.state);
    if (location.state !== null) {
      const { editStatus } = location.state;
      handleChange(editStatus);
    }
  }, [location]);

  const formikEdit = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      mobilePhone: userData.mobilePhone
    },
    validate: (values) => {
      const errors: { firstName?: string; lastName?: string; email?: string; mobilePhone?: string; } = {};

      if (!values.firstName) {
        errors.firstName = 'Required';
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
    onSubmit: (values) => {
      //console.log(values);
      updateUser(values);
    }
  });

  const formikChange = useFormik({
    enableReinitialize: true,
    initialValues: {
      oldPassword: '',
      newPassword: ''
    },
    validate: (values) => {
      const errors: { oldPassword?: string; newPassword?: string; } = {};

      if (!values.oldPassword) {
        errors.oldPassword = 'Required';
      }

      if (!values.newPassword) {
        errors.newPassword = 'Required';
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      //console.log(values);
      changePassword(values);
    }
  });

  const formikImage = useFormik({
    enableReinitialize: true,
    initialValues: {
      profile_url: ''
    },
    validate: (values) => {
      const errors: { profile_url?: any; } = {};

      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      //console.log(values);
      let data = new FormData();
      if(formikImage.values.profile_url){
        data.append('img', formikImage.values.profile_url, "imagen.png");
      }
      updateUser(data);
    }
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    let user = location.state.user.profile;
    user.id = location.state.user.id;
    user.status = location.state.user.status;
    setUserData(user);
  }

  const updateUser = (data: any) => {
    let token = localStorage.getItem("access_token");
    axios({
      method: 'patch',
      url: process.env.API_URL + '/api/admin-group/users/' + userData.id,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    })
      .then((response: any) => {
        if (response.data.status) {
          toast.success('Editado exitosamente')
          setTimeout(() => {
            return navigate("/students")
          }, 500)
        }
        else {
          toast.error("Ha ocurrido un error intenta nuevamente")
        }
      })
      .catch((error: any) => {
        toast.error("Ha ocurrido un error intenta nuevamente")
        console.log(error)
      });
  };

  const changePassword = (data: any) => {
    let token = localStorage.getItem("access_token");

    axios({
      method: 'post',
      url: process.env.API_URL + '/api/admin-group/users/' + userData.id + '/changePassword',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    })
      .then(function (response) {
        if (response.data.status) {
          toast.success('Editado exitosamente')
          setTimeout(() => {
            return navigate("/students")
          }, 500);
        }
        else {
          toast.error("Ha ocurrido un error intenta nuevamente")
        }
      })
      .catch(function (error) {
        toast.error("Ha ocurrido un error intenta nuevamente")
        console.log(error)
      })
  }

  useEffect(() => {
    setEdit(true);
    setChange(false);
    setApplication(false);
    setNotification(false);
  }, []);

  const handleChange = (status: string) => {
    if (status === 'edit') {
      setEdit(true);
      setChange(false);
      setApplication(false);
      setNotification(false);
    } else if (status === 'change') {
      setEdit(false);
      setChange(true);
      setApplication(false);
      setNotification(false);
    } else if (status === 'application') {
      setEdit(false);
      setChange(false);
      setApplication(true);
      setNotification(false);
    }
    else {
      setEdit(false);
      setChange(false);
      setApplication(false);
      setNotification(true);
    }
  };

  useEffect(() => {
    if (userName !== null) {
      setSigned(true);
    } else {
      navigate("/");
    }
  }, [userName]);

  return (
    <Layout>
      <div className="bg-slate-50">
        <Header isSignIn={signed} />
        {/* Title tab */}
        <section className="container px-[15px] mx-auto">
          <div className="mt-10  mb-10 flex lg:items-center justify-between flex-col lg:flex-row">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <Link to="/students" className="flex items-center">
                  <ArrowLeftCircleIcon className="h-6 w-6" />
                  <span className="ff-cg--medium ml-2">BACK TO STUDENTS</span>
                </Link>
              </div>
              <h2 className="text-[30px] lg:text-[60px] ff-cg--semibold leading-none">Edit Student</h2>
            </div>
            <div className="flex items-center overflow-x-auto">
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('edit')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${edit ? "ff-cg--semibold " : ""}`}>Personal Information</p>
                <span className={`border-b border-solid w-full ${edit ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('change')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${change ? "ff-cg--semibold " : ""}`}>Change Picture</p>
                <span className={`border-b border-solid w-full ${change ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('application')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${application ? "ff-cg--semibold " : ""}`}>Change Password</p>
                <span className={`border-b border-solid w-full ${application ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('notification')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${notification ? "ff-cg--semibold " : ""}`}>Enrollments</p>
                <span className={`border-b border-solid w-full ${notification ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
            </div>
          </div>
        </section>

        {/* Edit Profile */}
        {edit && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <form onSubmit={formikEdit.handleSubmit} className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] ff-cg--semibold lg:text-[30px] mb-6">Personal Information</h3>
              <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mb-10">
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">First Name</p>
                  </div>
                  <input
                    className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                    name="firstName"
                    type="text"
                    onChange={formikEdit.handleChange}
                    value={formikEdit.values.firstName}
                  />
                </div>
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">Last Name</p>
                  </div>
                  <input
                    className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                    name="lastName"
                    type="text"
                    onChange={formikEdit.handleChange}
                    value={formikEdit.values.lastName}
                  />
                </div>
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">Email Address</p>
                  </div>
                  <input
                    className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                    name="email"
                    type="email"
                    onChange={formikEdit.handleChange}
                    value={formikEdit.values.email}
                  />
                </div>
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">Phone Number</p>
                  </div>
                  <MuiTelInput
                    className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                    name="mobilePhone"
                    onChange={(value) => formikEdit.setFieldValue("mobilePhone", value)}
                    value={formikEdit.values.mobilePhone}
                  />
                </div>
              </div>
              <div className="md:flex items-center justify-center gap-4 lg:gap-10">
                <button onClick={() => navigate("/")} className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                  <span className="ff-cg--semibold">Return</span>
                </button>
                <button type="submit" className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                  <span className="ff-cg--semibold">Save Change</span>
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Change Password */}
        {change && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <form onSubmit={formikImage.handleSubmit} className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-center text-[20px] ff-cg--semibold  lg:text-[30px] mb-6">Change Picture</h3>
              <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mb-10">
                <div className="col-span-12 text-center">
                  <label form="profile_url">
                    <img className="w-[220px] h-[220px] m-auto rounded-full" src={userData.profileUrl} alt="" />
                    <p className="pt-2 text-[18px] ff-cg--semibold">John Doe</p>
                    <input
                      id="profile_url"
                      name="profile_url"
                      type="file"
                      className="hidden"
                      onChange={(event: any) => formikImage.setFieldValue('profile_url', event.target.files[0])}
                      value={""} />
                  </label>
                </div>
              </div>
              <div className="md:flex items-center justify-center gap-4 lg:gap-10">
                <button onClick={() => navigate("/students")} className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                  <span className="ff-cg--semibold">Return</span>
                </button>
                <button type="submit" className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                  <ArrowUpTrayIcon className="h-6 w-6" />
                  <span className="ff-cg--semibold whitespace-nowrap ml-2">Upload New Picture</span>
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Your Applications */}
        {application && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <form onSubmit={formikChange.handleSubmit} className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] ff-cg--semibold lg:text-[30px] mb-6">Change Password</h3>
              <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mb-10">
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">Old Password</p>
                  </div>
                  <input
                    className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                    name="oldPassword"
                    type="password"
                    onChange={formikChange.handleChange}
                    value={formikChange.values.oldPassword}
                  />
                </div>
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">New Password</p>
                  </div>
                  <input
                    className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium"
                    name="newPassword"
                    type="password"
                    onChange={formikChange.handleChange}
                    value={formikChange.values.newPassword}
                  />
                </div>
              </div>
              <div className="md:flex items-center justify-center gap-4 lg:gap-10">
                <button onClick={() => navigate("/students")} className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                  <span className="ff-cg--semibold">Return</span>
                </button>
                <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                  <span className="ff-cg--semibold">Save Change</span>
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Manage Notifications */}
        {notification && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <div className="rounded-md bg-white shadow-lg">
              <h3 className="text-[20px] ff-cg--semibold lg:text-[30px] border-b border-solid p-[15px] md:p-[30px]">Current Enrollments</h3>
              <div className="flex items-center justify-between border-b boder-solid p-[15px] md:p-[30px] md:py-[20px]">
                <p className="underline">Cybersecurity Bootcamp</p>
                <button className="ml-auto w-full lg:w-fit flex items-center justify-between border border-solid border-black py-[14px] px-[16px] rounded-2xl">
                  <PencilSquareIcon className="h-6 w-6" />
                  <span className="ff-cg--semibold ml-[20px] whitespace-nowrap">Remove Seat</span>
                </button>
              </div>
              <div className="flex items-center justify-between border-b boder-solid p-[15px] md:p-[30px] md:py-[20px]">
                <p className="underline">Cybersecurity Bootcamp</p>
                <button className="ml-auto w-full lg:w-fit flex items-center justify-between border border-solid border-black py-[14px] px-[16px] rounded-2xl">
                  <PencilSquareIcon className="h-6 w-6" />
                  <span className="ff-cg--semibold ml-[20px] whitespace-nowrap">Remove Seat</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={logoWhite} alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Account;
