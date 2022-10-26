import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { 
  ClockIcon,
  ComputerDesktopIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { useFormik } from 'formik';
import { MuiTelInput } from 'mui-tel-input';
import logoWhite from "../images/logo-white.png";
import Header from "../components/Header/Header";
import product1 from "../images/product-1.png";
import { navigate } from "gatsby";
import bannerCourse from "../images/banner-course.png";
import toast from 'react-hot-toast';
import axios from 'axios';

const Account = ({ location }) => {

  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}');
  const [userData, setUserData] = useState<any>([]);
  const [signed,setSigned] = useState(false);
  const [edit,setEdit] = useState(false);
  const [change,setChange] = useState(false);
  const [application,setApplication] = useState(false);
  const [notification,setNotification] = useState(false);

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

  useEffect(() => {
		getUser();
	}, []);

  const getUser = () => {
		axios.get(process.env.API_URL + '/api/users/' + user.id )
		.then((response) => {
			let user = response.data.data.profile;
			user.id = response.data.data.id;
			user.status = response.data.data.status;
			setUserData(user);
		})
		.catch( (error) => {
			console.log('**** error from user **** ',error);
		});
	}

  const updateUser = (data: any) => {
		let token = localStorage.getItem("access_token");
		axios({
			method: 'patch',
			url: process.env.API_URL + '/api/users/current/me',
			headers: {
				Authorization : `Bearer ${token}`
			},
			data: data
		})
		.then( (response: any) => {
			if(response.data.status){
        toast.success('Editado exitosamente')
				setTimeout( () => {
					return navigate("/account")
				}, 3000)
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

  const changePassword = (data: any) => {
		let token = localStorage.getItem("access_token");
		  
		axios({
			method: 'post',
			url: process.env.API_URL + '/api/users/' + user.id + '/changePassword',
			headers: { 
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${token}`
			},
			data: data
		})
		.then(function (response) {
			if(response.data.status){
        toast.success('Editado exitosamente')
				setTimeout( () => {
					return navigate("/account")
				}, 3000);
			}
      else{
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

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    }else {
      navigate("/");
    }
  },[userName]);

  return (
    <Layout>
      <div className="bg-slate-50">
        <Header isSignIn={signed} />
        {/* Title tab */}
        <section className="container px-[15px] mx-auto">
          <div className="mt-10  mb-10 flex lg:items-center justify-between flex-col lg:flex-row">
            <h3 className="text-[20px] lg:text-[40px] mb-6 lg:mb-0">My <span className="ff-cg--semibold">Account</span></h3>
            <div className="flex items-center overflow-x-auto">
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('edit')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${edit ? "ff-cg--semibold " : ""}`}>Edit Profile</p>
                <span className={`border-b border-solid w-full ${edit ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('change')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${change ? "ff-cg--semibold " : ""}`}>Change Password</p>
                <span className={`border-b border-solid w-full ${change ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('application')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${application ? "ff-cg--semibold " : ""}`}>Manage Applications</p>
                <span className={`border-b border-solid w-full ${application ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
              <div className="flex items-center flex-col cursor-pointer" onClick={() => handleChange('notification')}>
                <p className={`pb-3 px-10 whitespace-nowrap ${notification ? "ff-cg--semibold " : ""}`}>Manage Notifications</p>
                <span className={`border-b border-solid w-full ${notification ? "border-[#da1a32] border-2" : ""}`}></span>
              </div>
            </div>
          </div>
        </section>

        {/* Edit Profile */}
        { edit && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <form onSubmit={formikEdit.handleSubmit} className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Edit Profile</h3>
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
                {/* <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">Group</p>
                  </div>
                  <input className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 p-4 mt-2 rounded-2xl ff-cg--medium" type="text" />
                </div>
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="ff-cg--semibold">Time Zone</p>
                  </div>
                  <select className="placeholder:text-slate-400 focus:outline-none w-full bg-slate-50 px-4 py-[18px] mt-2 rounded-2xl ff-cg--medium">
                    <option value="">United States (UT)</option>
                  </select>
                </div> */}
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
        { change && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <form onSubmit={formikChange.handleSubmit} className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Change Password</h3>
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
                <button onClick={() => navigate("/")} className="w-full lg:w-[200px] flex items-center justify-center border border-[#222222] py-[14px] px-[16px] rounded-2xl mb-4 md:mb-0">
                  <span className="ff-cg--semibold">Return</span>
                </button>              
                <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl w-full lg:w-[200px]">
                  <span className="ff-cg--semibold">Save Change</span>
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Your Applications */}
        { application && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Your Applications</h3>
              <div className="rounded-xl bg-white flex shadow-lg relative items-center flex-col md:flex-row">
                <div className="relative w-full md:w-[200px]">
                  <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-xl before:opacity-50"></div>
                  <img className="w-full md:w-[200px] object-cover h-[100px] lg:h-[120px] rounded-xl bg-slate-300" src={ product1 } alt="" />
                </div>
                <div className="p-[15px] md:pl-8 md:p-5 md:flex md:items-center md:justify-between w-full">
                  <div>
                    <h4 className="text-[16px] lg:text-[26px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity Tools & Cyber Attacks</h4>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="w-full lg:w-fit flex flex-col items-start justify-between py-3 lg:px-[16px] rounded-2xl md:ml-[20px] mt-4 md:mt-0">
                      <span className="ff-cg--semibold text-base leading-none">Application Date</span>
                      <span className="leading-none text-base">September 26, 2022</span>
                    </div>
                    <button className="w-full lg:w-fit flex flex-col items-center justify-between border solid border-black py-3 px-[16px] rounded-2xl md:ml-[20px] mt-4 md:mt-0">
                      <span className="leading-none text-[12px]">Status</span>
                      <span className="ff-cg--semibold text-[12px] leading-none">Application Received</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Manage Notifications */}
        { notification && (
          <section className="container px-[15px] mx-auto md:mb-20 mb-10">
            <div className="rounded-md bg-white shadow-lg p-[15px] md:p-[30px] pb-10 md:pb-16">
              <h3 className="text-[20px] lg:text-[30px] mb-6">Manage Notifications</h3>
              <h4 className="ff-cg--semibold text-base lg:text-[26px]">Iwant to receive:</h4>
              <div className="mt-6">
                <div className="flex items-center mb-5">
                  <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                  <label form="default-checkbox" className="ml-2 text-xl">Promotions, course recommendations, and helpful resources from Udemy.</label>
                </div>
                <div className="flex items-center mb-5">
                  <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                  <label form="default-checkbox" className="ml-2 text-xl">Account activity, and legal info, like our Terms of Servicee.</label>
                </div>
                <div className="flex items-center">
                  <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-white bg-white rounded border-gray-300 focus:ring-white focus:ring-2"/>
                  <label form="default-checkbox" className="ml-2 text-xl">Reminders about your applications status, and general uodates about courses you are enrolled in</label>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={ logoWhite } alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>

      {/* <div className="fixed left-0 top-0 h-screen w-screen z-50 flex items-start justify-end md:p-10">
        <div className="bg-opacity-40 bg-black z-10 absolute left-0 top-0 h-screen w-screen"></div>
        <div className="bg-white md:rounded-3xl w-[750px] p-3 pt-5 lg:p-6 lg:pt-[30px] lg:pb-[30px] relative z-50">
          <div className='absolute right-0 top-0 lg:top-[18px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 bg-[#fdbf38] rounded-md cursor-pointer my-4 mx-6">
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
              <div className="lg:flex flex-col border-b solid py-8">
                <div className="flex items-center">
                  <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                  <div className="ml-[10px]">
                    <p className="ff-cg--semibold text-[20px] mb-1 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-wrap">
                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                          <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">Course</span>
                        </span>
                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
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
                      <TrashIcon className="h-6 w-6"/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:flex flex-col border-b solid py-8">
                <div className="flex items-center">
                  <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                  <div className="ml-[10px]">
                    <p className="ff-cg--semibold text-[20px] mb-1 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-wrap">
                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                          <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">Course</span>
                        </span>
                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
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
                      <TrashIcon className="h-6 w-6"/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:flex flex-col border-b solid py-8">
                <div className="flex items-center">
                  <img className="w-[50px] mb-[10px] lg:mb-0 h-[50px] lg:w-[100px] lg:h-[60px] rounded-2xl object-cover" src={ bannerCourse } alt="" />
                  <div className="ml-[10px]">
                    <p className="ff-cg--semibold text-[20px] mb-1 leading-none">Introducion to Cybersecurity Tools & Cyber Attacks</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-wrap">
                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                          <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">Course</span>
                        </span>
                        <span className="flex items-center border border-[#da1a32] rounded-full pl-[3px] pr-[10px] mr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
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
                      <TrashIcon className="h-6 w-6"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pb-5 pt-10">
              <p className="text-[16px] lg:text-[26px] ff-cg--semibold">Total</p>
              <p className="text-[16px] lg:text-[26px] ff-cg--semibold">$199</p>
            </div>
            <button className="flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mr-[20px] w-full">
              <span className="ff-cg--semibold mr-[20px]">Checkout</span>                
            </button>
            <p className="text-center mt-4 text-[13px]">Taxes, shipping, and delivery options calculated at checkout</p>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default Account;
  