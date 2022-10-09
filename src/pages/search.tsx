import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  BookmarkSquareIcon,
  BookOpenIcon,
  ClockIcon,
  ChevronRightIcon,
  AdjustmentsVerticalIcon,
  Bars3Icon,
  Squares2X2Icon,
  ArrowLeftCircleIcon,
  ChevronLeftIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import logoWhite from "../images/logo-white.png";
import Header from "../components/Header/Header";
import axios from "axios";

const Search = ({location}: any) => {

  const [sidebar, setSidebar] = useState(true);
  const [grid, setGrid] = useState(false);
  const [items, setItems] = useState([]);

  const [courses, setCourses] = useState<any>([]);
  const [catList, setCatsList] = useState<any>([]);
  const [skillList, setSkillList] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [skills, setSkills] = useState<any>([]);
  const [coursesCheck, setCoursesCheck] = useState<any>([
    {name: "Courses", slug: "Program", checked: false},
    {name: "Certificates", slug: "Certificate", checked: false},
    {name: "Learning Paths", slug: "Learning Path", checked: false}
  ]);

  const [queryList,setQueryList] = useState("");
  const [queryCat,setQueryCat] = useState("");
  const [querySkill,setQuerySkill] = useState("");


  const [searchTerm,setSearchTerm] = useState<any>("");

  useEffect(() => {
    if(location.state !== null) {
      setSearchTerm(location.state.term)
    } else {
      setSearchTerm("");
    }
		
	}, [location])

  useEffect(() => {

    axios
      .get(`https://accelered-api.whiz.pe/api/info/algolia/search?query=${searchTerm}&limit=12&page=0`)
      .then((response) => {
        console.log('***** information ****',response.data.data.data.hits)
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });

    axios
      .get(`https://accelered-api.whiz.pe/api/category`)
      .then((response) => {
        setCategories(response.data.data)
      }).catch(function (error) {
        console.log(error);
      });

    axios
      .get(`https://accelered-api.whiz.pe/api/skill`)
      .then((response) => {
        setSkills(response.data.data)
      }).catch(function (error) {
        console.log(error);
      });

  }, [searchTerm]);

  // useEffect( () => {
  //   console.log('***** categories here *****',categories);
  //   console.log('***** skills here *****',skills);
  // },[categories,skills]);

  // useEffect(() => {
  //   let courseArray: any = [];
  //   let certArray: any = [];
  //   let pathArray: any = [];
  //   items.map((item: any) => {
  //     if (item.type.name == 'Program') {
  //       courseArray.push(item)
  //     } else if (item.type.name == 'Certificate') {
  //       certArray.push(item)
  //     } else {
  //       pathArray.push(item)
  //     }
  //   })
  //   setCourses(courseArray);
  //   setCerts(certArray);
  //   setPaths(pathArray);
  // }, [items])

  const sidebarShow = () => {
    setSidebar(true)
  }

  const sidebarHide = () => {
    setSidebar(false)
  }

  const showGrid = () => {
    setGrid(true);
  }

  const hideGrid = () => {
    setGrid(false);
  }

  const handleTerm = (newTerm: string) => {
    setSearchTerm(newTerm);
  }

  const handleQueryCourse = (term: string) => {
    let coursesList: any = [];
    let queryCourses = [...courses];
    coursesCheck.map((course: any) => {
      if(course.slug == term) {
        course.checked = !course.checked;
      }
      coursesList.push(course);
    })
    queryCourses.push(term)
    courses.map( (item: any, index: number) => {
      if(item == term) {
        const filtered = queryCourses.filter(function(x) {
            return x !== term;
        });
        queryCourses = filtered;
      }
    })
    setCourses(queryCourses);
    setCoursesCheck(coursesList);
  }

  useEffect( () => {
    let newQuery = "";
    if(courses.length) {
      courses.map( (item: any) => {
        newQuery = newQuery + `&facetFilters[type.name]=${item}`;
      })
    }
    console.log('this is for search: ',newQuery);
    setQueryList(newQuery)
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}${querySkill}${queryCat}`)
      .then((response) => {
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  },[courses]);

  useEffect( () => {
    let newQuery = "";
    if(catList.length) {
      catList.map( (item: any) => {
        newQuery = newQuery + `&facetFilters[categories.name]=${item}`;
      })
    }
    console.log('this is for search: ',newQuery);
    setQueryCat(newQuery)
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}${queryList}${querySkill}`)
      .then((response) => {
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  },[catList]);

  useEffect( () => {
    let newQuery = "";
    if(skillList.length) {
      skillList.map( (item: any) => {
        newQuery = newQuery + `&facetFilters[skills.name]=${item}`;
      })
    }
    console.log('this is for search: ',newQuery);
    setQuerySkill(newQuery)
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}`)
      .then((response) => {
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  },[skillList]);

  const handleAllQueryCourse = () => {
    let coursesList: any = [];
    coursesCheck.map((course: any) => {
      course.checked = false;
      coursesList.push(course);
    })
    setCoursesCheck(coursesList);
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[type.name]=`)
      .then((response) => {
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

  const handleQueryCategory = (term: string) => {
    console.log('***** search for this category ****',term);
    let queryCourses = [...catList];
    queryCourses.push(term)
    catList.map( (item: any, index: number) => {
      if(item == term) {
        const filtered = queryCourses.filter(function(x) {
            return x !== term;
        });
        queryCourses = filtered;
      }
    })
    setCatsList(queryCourses);
  }

  const handleAllQueryCategory = () => {
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[categories.name]=`)
      .then((response) => {
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

  const handleQuerySkill = (term: string) => {
    console.log('***** search for this skill ****',term);
    let queryCourses = [...skillList];
    queryCourses.push(term)
    skillList.map( (item: any, index: number) => {
      if(item == term) {
        const filtered = queryCourses.filter(function(x) {
            return x !== term;
        });
        queryCourses = filtered;
      }
    })
    setSkillList(queryCourses);
  }

  const handleAllQuerySkill = () => {
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[skills.name]=`)
      .then((response) => {
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout>
      <div className="bg-slate-50">
        {/* header */}

        <Header isSignIn={false} handleTerm={handleTerm} />

        {/* title */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="lg:flex items-center justify-between">
            <div>
              <h2 className="text-[30px] leading-[30px] lg:leading-10 mb-3 lg:text-[40px] ff-cg--semibold">{items.length} results for {(searchTerm !== "") ? searchTerm : "Todos"}</h2>
              {/* <p className="flex flex-wrap items-center text-base ff-cg--semibold">
                <span className="mr-3">Topic related:</span>
                <p className="flex flex-wrap items-center text-base ff-cg--semibold">
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Data Science</span>
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Machine Learning</span>
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Flask</span>
                  <span className="text-red-500 pr-3 mr-3 border-r-2 border-red-500">Web Scraping</span>
                  <span className="text-red-500 pr-3 mr-3">Programming Fundamentals</span>
                </p>
              </p> */}
            </div>
            <div>
              <div className="flex items-center justify-end">
                
                  {
                    (!sidebar) ?
                    <button className="hidden lg:flex items-center justify-between border border-[#222222] py-[14px] px-[16px] rounded-2xl mt-[30px]" onClick={() => sidebarShow()}>
                      <AdjustmentsVerticalIcon className="h-6 w-6" />
                      <span className="ff-cg--semibold ml-[20px]">Show Filters</span>
                    </button> : ""
                  }
                
                <button className={`hidden md:flex items-center justify-between border border-[#222222] py-2 px-2 rounded-xl mt-[30px] ml-8 ${!grid ? "text-white bg-[#222222] " : ""}`} onClick={() => hideGrid()}>
                  <Bars3Icon className="h-6 w-6" />
                </button>
                <button className={`hidden md:flex items-center justify-between border border-[#222222] py-2 px-2 rounded-xl mt-[30px] ml-8 ${grid ? "text-white bg-[#222222] " : ""}`} onClick={() => showGrid()}>
                  <Squares2X2Icon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* content */}
        <section className="container px-[15px] mx-auto mt-[60px] mb-[40px]">
          <div className="lg:grid gap-4 lg:gap-10 lg:grid-cols-12">
            {
              (sidebar) ?
                <div className="lg:col-span-3">
                  {/* filter */}
                  <div className="bg-amber-400 lg:bg-red-500 h-full p-[15px] rounded-2xl mb-[40px] relative">
                    <button className="bg-white shadow-lg py-2 px-2 rounded-lg absolute right-[-18px] top-[28px] hidden lg:inline-block" onClick={() => sidebarHide()}>
                      <ArrowLeftCircleIcon className="h-5 w-5" />
                    </button>
                    <p className="lg:text-white lg:text-[30px] ff-cg--semibold lg:py-[10px]">Filters</p>
                    <div className="hidden lg:block">
                      <div className="flex items-center border-b solid pb-[10px] border-red-300">
                        <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                          <BookOpenIcon className="h-5 w-5 text-white" />
                        </div>
                        <p className="ff-cg--semibold text-white ml-[6px]">Ways to Learn</p>
                      </div>
                      <div className="flex pt-[14px] pb-[24px]">
                        <div className="course-form">
                          <div className="mb-[13px] flex items-center">
                            <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleAllQueryCourse()} />
                            <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault1">
                              All
                            </label>
                          </div>
                          {
                            coursesCheck.map( (item: any,index: number) => {
                              return(
                                <div className="mb-[13px] flex items-center" key={index}>
                                  <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked={item.checked} onChange={() => handleQueryCourse(item.slug)} />
                                  <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault2">
                                    {item.name}
                                  </label>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div className="flex items-center border-b solid pb-[10px] border-red-300">
                        <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                          <BookmarkSquareIcon className="h-5 w-5 text-white" />
                        </div>
                        <p className="ff-cg--semibold text-white ml-[6px]">Categories</p>
                      </div>
                      <div className="flex pt-[14px] pb-[24px]">
                        <div className="category-form">
                          <div className="mb-[13px] flex items-center">
                            <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio" id="flexRadioDefault5" onChange={() => handleAllQueryCategory()} />
                            <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault5">
                              All
                            </label>
                          </div>
                          {
                            categories.map((category: any, index: number) => {
                              return(
                                <div className="mb-[13px] flex items-center" key={index}>
                                  <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio" id="flexRadioDefault6" onChange={() => handleQueryCategory(category.name)} />
                                  <label className="inline-block text-white ff-cg--semibold text-[13px] capitalize" htmlFor="flexRadioDefault6">
                                    {category.name}
                                  </label>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div className="flex items-center border-b solid pb-[10px] border-red-300">
                        <div className="bg-red-300 h-6 w-6 rounded-full flex items-center justify-center">
                          <WrenchScrewdriverIcon className="h-5 w-5 text-white" />
                        </div>
                        <p className="ff-cg--semibold text-white ml-[6px]">Skills</p>
                      </div>
                      <div className="flex pt-[14px] pb-[24px]">
                        <div className="skill-form">
                          <div className="mb-[13px] flex items-center">
                            <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio2" id="flexRadioDefault9" onChange={() => handleAllQuerySkill()} />
                            <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault9">
                              All
                            </label>
                          </div>
                          {
                            skills.map((skill: any, index: number) => {
                              return(
                                <div className="mb-[13px] flex items-center" key={index}>
                                  <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio" id="flexRadioDefault6" onChange={() => handleQuerySkill(skill.name)} />
                                  <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault6">
                                    {skill.name}
                                  </label>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : ""
            }

            <div className={`${sidebar ? "lg:col-span-9" : "lg:col-span-12"}`}>
              {
                (items.length) ?
                <div>
                  {
                    (grid) ?
                      <div className="grid gap-4 lg:gap-10 md:grid-cols-12">
                        {
                          items.map((item: any, index: number) => {
                            return (
                              <div className="md:col-span-6 lg:col-span-4" key={index}>
                                <div>
                                  <div className="relative">
                                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-30"></div>
                                    <img className="w-full object-cover h-[160px] rounded-3xl bg-slate-300" src={item.imgUrl} alt="" />
                                    <div className="absolute w-full h-full z-100 flex items-center justify-center top-0 flex-col">
                                      {/* <div className="text"> */}
                                        <p className="text-white">In partnership with:</p>
                                        <img className="w-12 object-cover h-12 bg-slate-300" src={item.sponsor.imgUrl} alt="" />
                                      {/* </div> */}
                                    </div>
                                  </div>
                                  <div className="rounded-3xl bg-white p-[20px] flex flex-col justify-between h-[270px] mt-[-30px] shadow-lg relative">
                                    <div>
                                      <div className="flex items-center gap-4 mb-[16px]">
                                        {
                                          item.categories.map((category: any, index:number) => {
                                            return (
                                              <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px]" key={index}>
                                                <span className="ff-cg--semibold text-[12px]">{category.name}</span>
                                              </span>
                                            )
                                          })
                                        }
                                      </div>
                                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">{item.title}</h4>
                                      <p>{item.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <p className="ff-cg--semibold text-[20px]">${item.price}</p>
                                      <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                                        <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div> :
                      <div className="hidden md:grid gap-4 lg:gap-10 md:grid-cols-12">
                        {
                          items.map((item: any, index: number) => {
                            return(
                              <div className="md:col-span-12 lg:col-span-12" key={index + 'b'}>
                                <div className="rounded-3xl bg-white flex shadow-lg relative items-center">
                                  <div className="relative w-[200px]">
                                    <div className="before:bg-black before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-3xl before:opacity-10"></div>
                                    <img className="w-[200px] object-cover h-[150px] rounded-3xl bg-slate-300" src={item.imgUrl} alt="" />
                                    <div className="absolute w-full h-full z-100 flex items-center justify-center top-0 flex-col">
                                      {/* <div className="text"> */}
                                        <p className="text-white">In partnership with:</p>
                                        <img className="w-12 object-cover h-12 bg-slate-300" src={item.sponsor.imgUrl} alt="" />
                                      {/* </div> */}
                                    </div>
                                  </div>
                                  <div className="pl-8 p-5 flex items-center justify-between w-full">
                                    <div>
                                      <h4 className="text-[16px] lg:text-[20px] ff-cg--semibold leading-none mb-[10px]">{item.title}</h4>
                                      <p className="mb-[10px]">{item.description}</p>
                                      <div className="flex items-center">
                                        {
                                          item.categories.map((category: any, index: number) => {
                                            return (
                                              <span className="flex items-center border border-red-500 rounded-full pl-[10px] pr-[10px] mr-2" key={index}>
                                                <span className="ff-cg--semibold text-[12px]">{category.name}</span>
                                              </span>
                                            )
                                          })
                                        }
                                        <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px] mr-4">
                                          <ClockIcon className="h-4 w-4 mr-[6px]" />
                                          <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                                        </span>
                                      </div>
                                    </div>
                                    <button className="lg:w-fit flex flex-col items-center justify-between border solid border-black py-[5px] px-[16px] rounded-2xl ml-[20px]">
                                      <span className="ff-cg--bold leading-none text-[24px]">${item.price}</span>
                                      <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                  }
                </div> :
                <div className="text-center">
                  <p className="text-[30px] leading-[30px] lg:leading-10 mb-3 lg:text-[40px] ff-cg--semibold">No results were found for you search</p>
                </div>
              }
              

              {/* pagination */}
              <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mt-10">
                <div className="md:col-span-12 lg:col-span-12">
                  <div className="flex items-center justify-center">
                    <a href="">
                      <ChevronLeftIcon className="h-6 w-6" />
                    </a>
                    <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-white bg-[#222222] w-10 h-10 rounded-xl">
                      <span>1</span>
                    </button>
                    <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-[#222222] w-10 h-10 rounded-xl">
                      <span>2</span>
                    </button>
                    <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-[#222222] w-10 h-10 rounded-xl">
                      <span>3</span>
                    </button>
                    <a href="">
                      <ChevronRightIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
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
    </Layout>
  );
};

export default Search;
