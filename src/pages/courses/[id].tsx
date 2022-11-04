import React, { useEffect, useRef, useState } from "react"
import {
  RectangleStackIcon,
  ShoppingCartIcon,
  PlayIcon,
  FolderIcon,
  DocumentIcon,
  PencilSquareIcon,
  CheckIcon,
  ClockIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'
import logoWhite from "../../images/logo-white.png";
import Header from "../../components/Header/Header";
import ModalApplication from "../../components/Modal/Application";
import { navigate } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { getCart, createCart, addCourseToCart } from "../../helpers/cart";
import axios from "axios";

const Course = ({ location, params }: any) => {
  console.log(location)
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');

  const headerRef: any = useRef();

  const [modalOpen,setModalOpen] = useState(false);
  const [signed, setSigned] = useState(false);

  const [cursoId, setCursoId] = useState(null);
  const [cursoUuid, setCursoUuid] = useState(null);
  const [description, setDescription] = useState(null);
  const [duration, setDuration] = useState(null);
  const [sponsor, setSponsor] = useState<any>(null);
  const [price, setPrice] = useState(null);
  const [skills, setSkills] = useState<any>([]);
  const [image, setImage] = useState("");
  const [courseObject, setCourseObject] = useState<any>(null)
  const [learns, setLearns] = useState<any>(null)
  const [modules, setModules] = useState<any>(null)

  useEffect(() => {
    setCursoId(location.state.id)
    setCursoUuid(location.state.course.uuid)
    setDescription(location.state.course.description);
    setDuration(location.state.course.duration);
    setPrice(location.state.course.price);
    setSponsor(location.state.course.sponsor);
    setSkills(location.state.course.skills);
    setImage(location.state.course.imgUrl)
  }, [location]);

  useEffect(() => {
    if (userName !== null) {
      setSigned(true);
    }
  }, [userName]);

  useEffect(() => {
    if (cursoUuid !== null) {
      axios.get(process.env.API_URL + '/api/course/' + cursoUuid)
        .then((response) => {
          const learnsArray: any = [];
          setCourseObject(response.data.data);
          const learnString = response.data.data.detail.learns;
          learnString.split('|').map( (item: string) => {
            learnsArray.push(item.trim());
          })
          setLearns(learnsArray);
          setModules(response.data.data.detail.modules.data);
        })
        .catch((error) => {
          console.log('**** error from user **** ', error);
        });
    }
  }, [cursoUuid]);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  }
 
  const openApplication = () => {
    setModalOpen(true);
  }

  const addToCart = async (item: any) => {

    if (signed) {
      let cartIsOn = false;
      await getCartClient().then((response) => {
        cartIsOn = response.status;
      });
      if (!cartIsOn) {
        createCart({ "uuid": item.uuid, "price": parseFloat(item.price) });
      } else {
        addCourseToCart({ "uuid": item.uuid, "price": parseFloat(item.price) })
      }
    } else {
      let cartItems = []
      let cartOn = typeof window !== 'undefined' && localStorage.getItem('cart');
      if (cartOn !== null) {
        cartItems = JSON.parse(cartOn.toString());
      }
      const filtered = cartItems.filter((cartItem: any) => cartItem.uuid === item.uuid)
      if (!filtered.length) {
        cartItems.push(item);
      } else {
        alert('This item already is on your cart')
      }
      typeof window !== 'undefined' && localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    if (headerRef.current) {
      headerRef.current.setCoursesCircle();
    }

  }

  useEffect(() => {
    if (signed) {
      getCartClient().then((response) => {
        console.log(response.status)
      });
    }
  }, []);

  const getCartClient = async () => {
    const gotCart = await getCart();
    return gotCart;
  }


  return (
    <Layout>
      <div className="bg-slate-50">
        {/* header */}
        <Header isSignIn={signed} ref={headerRef} />

        {/* banner img */}
        <section className="container px-[15px] mx-auto mt-[60px] lg:mb-[40px]">
          <div className="relative w-full min-h-[500px] lg:min-h-[420px]">
            <div className="relative min-h-[500px] lg:min-h-[420px]">
              <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
              <div className="w-full h-[420px] rounded-2xl overflow-hidden">
                <img className="w-full min-h-[500px] lg:min-h-[420px] rounded-2xl object-cover" src={image} alt="" />
              </div>
            </div>
            <div className="absolute top-[20px] lg:top-[0px] left-[20px] lg:left-[30px] w-[90%] lg:w-[40%] flex items-center h-full">
              <div className="relative">
                <h2 className="ff-cg--semibold text-white text-[34px] lg:text-[40px] leading-none mb-[20px]">{cursoId}</h2>
                <p className="text-white text-[14px] mb-[50px]">{description}</p>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <ComputerDesktopIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">Course</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <ClockIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">{duration}</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <RectangleStackIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">4 Modules</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <button className="lg:w-fit flex flex-col items-center justify-between border solid border-[#fdbf38] py-[5px] px-[16px] rounded-2xl mt-[20px] mr-[20px]">
                    <span className="ff-cg--bold leading-none text-[28px] text-[#fdbf38]">${price}</span>
                    <span className="ff-cg--semibold text-[12px] text-white leading-none">Price</span>
                  </button>
                  { sponsor && (sponsor.title == 'Springboard' || sponsor.title == 'MedCerts') ? (
                  <button className="lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[20px] mr-[20px]" onClick={() => openApplication()}>
                    <span className="ff-cg--semibold mr-[20px]">Apply Now </span>
                    <PencilSquareIcon className="h-6 w-6"/>
                  </button>
                  ) : (
                    <button className="lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[20px] mr-[20px]" onClick={() => addToCart(location.state.course)}>
                      <span className="ff-cg--semibold mr-[20px]">Buy this Course</span>
                      <ShoppingCartIcon className="h-6 w-6" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute right-0 w-[40%] top-0 h-full flex justify-center items-center">
              <div className="absolute w-full h-full z-100 flex items-center justify-center top-0 flex-col">
                <p className="text-white">In partnership with:</p>
                <img className="w-12 object-cover h-12 bg-slate-300 mt-6" src={ sponsor ? sponsor.imgUrl : ''} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[60px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-[20px] lg:text-[30px] mb-[20px] ff-cg--semibold">What You Will Learn</h3>
              <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 mb-[20px] lg:mb-0">
                {
                  (learns !== null) && 
                  <>
                    {
                      learns.map( (item:any, index: number) => {
                        return(
                          <div className="lg:col-span-6 mb-[20px] lg:mb-0" key={index}>
                            <div className="flex items-center">
                              <div className="flex items-center justify-center bg-[#da1a32] rounded-full p-[2px] mr-[10px]">
                                <CheckIcon className="h-6 w-6 text-white" />
                              </div>
                              <p className="leading-none">{item}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </>
                }
              </div>
            </div>
            <div className="lg:col-span-4 mb-[-40px]">
              {
                (skills?.length) ?
                  <div className="bg-[#da1a32] rounded-2xl p-[20px]">
                    <p className="text-white ff-cg--semibold mb-[10px]">Skills You Will Gain</p>
                    <div className="flex items-center flex-wrap">
                      {
                        skills.map((skill: any, index: number) => {
                          return (
                            <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]" key={index}>
                              <span className="ff-cg--semibold text-[12px]">{skill.name}</span>
                            </span>
                          )
                        })
                      }
                    </div>
                  </div> : ""
              }
            </div>
            <div className="lg:col-span-12 mt-[30px]">
              {
                (courseObject !== null) && 
                <>
                  <h3 className="text-[20px] lg:text-[30px] mb-[20px] ff-cg--semibold">{courseObject.detail ? courseObject.detail.highlight : ''}</h3>
                  <p className="lg:text-[26px]">{courseObject.detail ? courseObject.detail.description : ''}</p>
                </>                
              }
              
            </div>
          </div>
        </section>

        <section className="bg-[#222222]">
          <div className="container px-[15px] mx-auto pt-[20px] pb-[20px] lg:pb-[40px]">
            <h3 className="text-[#fdbf38] text-[20px] lg:text-[40px] mb-[20px] ff-cg--semibold text-center">What’s Included</h3>
            <div className="border solid rounded-2xl">
              {
                (modules !== null) &&
                <>
                  {
                    modules.map( (item:any, index:number) => {
                      return(
                        <div className={`flex flex-col p-[20px] ${ (index === modules.length - 1) ? "" : "border-b solid"}`} key={index}>
                          <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">{item.attributes.title}</h4>
                          <div className="flex items-center flex-wrap">
                            <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                              <PlayIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">{item.attributes.video} Videos</span>
                            </span>
                            <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                              <FolderIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">{item.attributes.resource} Resources</span>
                            </span>
                            <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                              <DocumentIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">{item.attributes.quizzes} Quizzes</span>
                            </span>
                            {/* <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                              <PlayIcon className="h-4 w-4 mr-[6px]" />
                              <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                            </span> */}
                          </div>
                          <p className="text-white">{item.attributes.description}</p>
                        </div>
                      )
                    })
                  }
                </>
              }
              {/* <div className="flex flex-col p-[20px] border-b solid">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">History of Cybersecurity</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will give you a brief overview of the history of cybersecurity. You will also learn key terms and roles in cybersecurity.</p>
              </div>
              <div className="flex flex-col p-[20px] border-b solid">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">A brief overview of types of actors and their motives</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will provide you with a brief overview of types of actors and their motives. You will also understand different types of attacks and their impact on an organization and individuals.</p>
              </div>
              <div className="flex flex-col p-[20px] border-b solid">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">An overview of key security concepts</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will describe various key security concepts that are important in any cybersecurity position. The CIA Triad will be further explained.</p>
              </div>
              <div className="flex flex-col p-[20px]">
                <h4 className="text-[16px] lg:text-[30px] ff-cg--semibold text-white mb-[10px]">An overview of key security concepts</h4>
                <div className="flex items-center flex-wrap">
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <FolderIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">10 Resources</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <DocumentIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">2 Quizzes</span>
                  </span>
                  <span className="flex items-center text-[#fdbf38] border border-[#fdbf38] rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <PlayIcon className="h-4 w-4 mr-[6px]" />
                    <span className="ff-cg--semibold text-[12px]">17 Videos</span>
                  </span>
                </div>
                <p className="text-white">This module will describe various key security concepts that are important in any cybersecurity position. The CIA Triad will be further explained.</p>
              </div> */}
            </div>
          </div>
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[20px]">
          <div className="bg-[#da1a32] text-center rounded-2xl p-[30px]">
            <div className="lg:w-[60%] mx-auto">
              <h3 className="text-[20px] lg:text-[40px] ff-cg--semibold text-white">Part of Cybersecurity Learning Path</h3>
              <p className="ff-cg--light lg:text-[30px] text-white">Completing this course will count towards your learning in the Cybersecurity Professioal Certificate</p>
              <button className="w-full lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[20px] mx-auto">
                <span className="ff-cg--semibold mr-[20px]">Go to Learning Path</span>
                <RectangleStackIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="container px-[15px] mx-auto pt-[20px] pb-[20px]">
          <div className="bg-[#222222] rounded-2xl py-[20px] px-[30px] flex items-center justify-between">
            <img className="object-cover w-[50px] h-[50px] lg:w-[340px] lg:h-[60px]" src={logoWhite} alt="" />
            <p className="text-white ff-cg--semibold text-right text-[11px] ml-[20px] lg:text-[16px]">Copyright © 2022 University of Maryland Global Campus. All Rights Reserved.</p>
          </div>
        </section>
      </div>
      {
        (modalOpen) ?
        <ModalApplication handleModal={handleModal} courseUuid={cursoUuid} /> : ""
      }
    </Layout>
  )
}

export default Course;