import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { 
  ClockIcon,
  CheckIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import logoWhite from "../../images/logo-white.png";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import { navigate } from "gatsby";
import { HeaderAlternative } from "../../components/HeaderAlternative/HeaderAlternative";
import { getCart, createCart, addCourseToCart } from "../../helpers/cart";
import axios from "axios";
import { API_URL } from "../../const";

const Path = ({location,params}: any) => {
  const userName = typeof window !== 'undefined' && localStorage.getItem('name');

  const headerRef: any = useRef();

  const [signed,setSigned] = useState(false);

  const [cursoId,setCursoId] = useState(null);
  const [cursoUuid, setCursoUuid] = useState(null);
  const [description,setDescription] = useState(null);
  const [duration,setDuration] = useState(null);
  const [price,setPrice] = useState(null);
  const [sponsor, setSponsor] = useState("");
  const [skills, setSkills] = useState<any>([]);
  const [image, setImage] = useState("");

  const [courseObject, setCourseObject] = useState<any>(null)
  const [learns, setLearns] = useState<any>(null)
  const [modules, setModules] = useState<any>(null)

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    }
  },[userName]);

  useEffect(() => {
    if (cursoUuid !== null) {
      axios.get(process.env.GATSBY_ENDPOINT + 'api/course/' + cursoUuid)
        .then((response) => {
          console.log(response);
          const learnsArray: any = [];
          setCourseObject(response.data.data);
          const learnString = response.data.data.detail.learns;
          learnString.split('|').map( (item: string) => {
            learnsArray.push(item.trim());
          })
          setLearns(learnsArray);
          setModules(response.data.data.children);
        })
        .catch((error) => {
          console.log('**** error from user **** ', error);
        });
    }
  }, [cursoUuid]);

  useEffect( () => {
    console.log('**** modules ***** ',modules);
  },[modules]);

  useEffect( () => {
    console.log('**** location: ',location);
    setCursoId(location.state.id)
    setCursoUuid(location.state.course.uuid)
    setDescription(location.state.course.description);
    setDuration(location.state.course.duration);
    setPrice(location.state.course.price);
    setSponsor(location.state.course.sponsor.imgUrl);
    setSkills(location.state.course.skills);
    setImage(location.state.course.imgUrl)
  },[location]);

  const addToCart = async (item: any) => {
    console.log('this is the item from the parameter: ****** ',item);

    if(signed) {
      let cartIsOn = false;
      await getCartClient().then( (response) => {
        cartIsOn = response.status;
      });
      if(!cartIsOn) {
        console.log('create new cart');
        createCart({"uuid": item.uuid, "price": parseFloat(item.price)});
      } else {
        console.log('add element');
        addCourseToCart({"uuid": item.uuid, "price": parseFloat(item.price)})
      }
    } else {
      let cartItems = []
      let cartOn = typeof window !== 'undefined' && localStorage.getItem('cart');
      if(cartOn !== null) {
        cartItems = JSON.parse(cartOn.toString());
      }
      console.log(item.uuid);
      console.log(cartItems);
      const filtered = cartItems.filter( (cartItem:any ) => cartItem.uuid === item.uuid)
      if(!filtered.length) {
        cartItems.push(item);
      } else {
        alert('This item already is on your cart')
      }
      typeof window !== 'undefined' && localStorage.setItem('cart',JSON.stringify(cartItems));
    }
    
    if(headerRef.current) {
      headerRef.current.setCoursesCircle();
    }
  }

  useEffect( () => {
    if(signed) {
      getCartClient().then( (response) => {
        console.log(response.status)
      });
    }
  },[]);

  const getCartClient = async() => {
    const gotCart = await getCart();
    return gotCart;
  }
  
  return (
    <Layout>
      <div className="bg-slate-50">
        
        <div className="bg-path bg-cover mb-[40px]" style={{'backgroundImage': `url(${image})`}}>
          {/* header */}
          <HeaderAlternative isSignIn={signed} ref={headerRef} />

          {/* banner */}
          <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[40px] lg:pb-0">
            <div className="relative lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="ff-cg--semibold text-white text-[34px] lg:text-[50px] leading-none mb-[10px]">{cursoId}</h2>
                <p className="ff-cg--extralight text-white text-[16px] lg:text-[30px] leading-none">{description}</p>
                <div className="flex items-center flex-wrap mt-[60px]">
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <ComputerDesktopIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">Learning Path</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <ClockIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">{duration}</span>
                  </span>
                  <span className="flex items-center text-white border border-white rounded-full pl-[3px] pr-[10px] mr-[10px] mb-[10px]">
                    <RectangleStackIcon className="h-4 w-4 mr-[6px]"/>
                    <span className="ff-cg--semibold text-[12px]">4 Modules</span>
                  </span>
                </div>
                <div className="flex items-center mt-[30px] mb-[60px]">
                  <button className="lg:w-fit flex flex-col items-center justify-between border solid border-[#fdbf38] py-[5px] px-[16px] rounded-2xl mt-[20px] mr-[20px]">
                    <span className="ff-cg--bold leading-none text-[28px] text-[#fdbf38]">${price}</span>
                    <span className="ff-cg--semibold text-[12px] text-white leading-none">Price</span>
                  </button>
                  <button className="lg:w-fit flex items-center justify-between bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[20px] mr-[20px]" onClick={() => addToCart(location.state.course)}>
                    <span className="ff-cg--semibold mr-[20px]">Buy this Course</span>
                    <ShoppingCartIcon className="h-6 w-6"/>
                  </button>
                  
                </div>
              </div>
              <div className="lg:col-span-6 top-0 h-full flex items-center justify-center">
                <div className="flex z-100 top-0 flex-col items-center">
                  <p className="text-white">In partnership with:</p>
                  <img className="w-12 object-cover h-12 bg-slate-300 mt-6" src={sponsor} alt="" />
                </div>
              </div>
              <div className="lg:col-span-12 mb-[-40px] hidden lg:block">
                {
                  (skills.length) ?
                  <div className="bg-[#da1a32] rounded-2xl p-[20px]">
                  <p className="text-white ff-cg--semibold mb-[10px]">Skills You Will Gain</p>
                    <div className="flex items-center flex-wrap">
                      {
                        skills.map( (skill:any,index:number) => {
                          return(
                            <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]" key={index}>
                              <span className="ff-cg--semibold text-[12px]">{skill.name}</span>
                            </span>
                          )
                        })
                      }
                      
                      {/* <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                        <span className="ff-cg--semibold text-[12px]">IT Security Analyst</span>
                      </span>
                      <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                        <span className="ff-cg--semibold text-[12px]">Network Security</span>
                      </span>
                      <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                        <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                      </span>
                      <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                        <span className="ff-cg--semibold text-[12px]">Malware</span>
                      </span>
                      <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                        <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                      </span>
                      <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                        <span className="ff-cg--semibold text-[12px]">Database</span>
                      </span> */}
                    </div>
                  </div> : ""
                }
              </div>
            </div>
          </section>
        </div>

        <section className="container px-[15px] mx-auto lg:hidden">
          <div className="bg-[#da1a32] rounded-2xl p-[20px]">
            <p className="text-white ff-cg--semibold mb-[10px]">Skills You Will Gain</p>
            <div className="flex items-center flex-wrap">
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">Information Security Analyst</span>
              </span>
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">IT Security Analyst</span>
              </span>
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">Network Security</span>
              </span>
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
              </span>
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">Malware</span>
              </span>
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
              </span>
              <span className="flex items-center text-white border border-white rounded-full pl-[10px] pr-[10px] mr-[10px] mb-[10px]">
                <span className="ff-cg--semibold text-[12px]">Database</span>
              </span>
            </div>
          </div>
        </section>

        <section className="container px-[15px] mx-auto pt-[40px] lg:pt-[60px] pb-[60px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-12">
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
          </div>
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12 mt-[60px]">
              {
                (courseObject !== null) && 
                <>
                  <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                    <h3 className="text-[20px] lg:w-[80%] lg:text-[70px] ff-cg--semibold leading-none mb-[10px] lg:mt-[20px]">{courseObject.detail.highlight}</h3>
                  </div>
                  <div className="lg:col-span-6 mb-[20px] lg:mb-0">
                    <p className="text-[24px] ff-cg--light mb-[20px]">{courseObject.detail.description}</p>
                  </div>
                </>                
              }
            
          </div>
        </section>

        <section className="bg-[#da1a32]">
          <div className="container px-[15px] mx-auto pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60px]">
            <h3 className="text-[20px] lg:text-[40px] mb-[40px] ff-cg--semibold text-white text-center">What’s Included</h3>
            <div className="flex lg:grid gap-4 lg:gap-10 lg:grid-cols-12 overflow-x-auto">
              {
                (modules !== null) &&
                <>
                  {
                    modules.map( (item:any,index:number) => {
                      return(
                        <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                          <div>
                            <div className="relative">
                              <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                              <img className="object-cover w-full h-[250px] rounded-3xl bg-slate-300" src={ item.imgUrl } alt="" />
                            </div>
                            <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                              <div>
                                <div className="flex items-center gap-4 mb-[16px]">
                                  {/* <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                                    <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                                  </span> */}
                                  <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                                    <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                    <span className="ff-cg--semibold text-[12px]">Access: {item.access}</span>
                                  </span>
                                </div>
                                <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">{item.title}</h4>
                                <p>{item.description}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="ff-cg--semibold text-[20px]">${item.price}</p>
                                <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                                  <ClockIcon className="h-4 w-4 mr-[6px]"/>
                                  <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </>
              }
              {/* <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product1 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold text-[20px]">$199.00</p>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product2 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold text-[20px]">$199.00</p>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold text-[20px]">$199.00</p>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[80%] md:min-w-[60%] lg:min-w-fit lg:col-span-3">
                <div>
                  <div className="relative">
                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-50"></div>
                    <img className="object-cover w-full h-[50px] h-[250px] rounded-3xl bg-slate-300" src={ product3 } alt="" />
                  </div>
                  <div className="rounded-3xl bg-white p-[30px] flex flex-col justify-between h-[300px] mt-[-30px] shadow-lg relative">
                    <div>
                      <div className="flex items-center gap-4 mb-[16px]">
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[10px] pr-[10px]">
                          <span className="ff-cg--semibold text-[12px]">Cybersecurity</span>
                        </span>
                        <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                          <ClockIcon className="h-4 w-4 mr-[6px]"/>
                          <span className="ff-cg--semibold text-[12px]">4 Course</span>
                        </span>
                      </div>
                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">Introduction to Cybersecurity</h4>
                      <p>Learn how to identify security issues in the cloud and techniques to prevent and mitigate risks.</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="ff-cg--semibold text-[20px]">$199.00</p>
                      <span className="flex items-center text-[#da1a32] border border-[#da1a32] rounded-full pl-[3px] pr-[10px]">
                        <ClockIcon className="h-4 w-4 mr-[6px]"/>
                        <span className="ff-cg--semibold text-[12px]">4 Weeks</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
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
    </Layout>
  );
};

export default Path;
