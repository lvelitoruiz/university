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
import { Link, navigate } from "gatsby";

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
    {name: "Learning Paths", slug: "Learning Path", checked: false},
    {name: "Nano Degrees", slug: "Nano Degree", checked: false},
    {name: "Bootcamps", slug: "Bootcamp", checked: false}
  ]);

  const [skillsCheck, setSkillsCheck] = useState<any>([]);
  const [categoriesCheck, setCategoriesCheck] = useState<any>([]);

  const [queryList,setQueryList] = useState("");
  const [queryCat,setQueryCat] = useState("");
  const [querySkill,setQuerySkill] = useState("");


  const [searchTerm,setSearchTerm] = useState<any>("");
  const [searchCategory,setSearchCategory] = useState<any>("");

  const [pagination,setPagination] = useState(false);
  const [page,setPage] = useState(1);
  const [pages,setPages] = useState<any>([]);

  useEffect(() => {
    if(location.state !== null) {
      console.log(location.state);
      if(location.state.cat == undefined) {
        setSearchTerm(location.state.term);
        getForTerm(location.state.term);
      } else if(location.state.cat !== undefined && location.state.term !== undefined) {
        setSearchTerm(location.state.term);
        getCombined(location.state.cat,location.state.term);
      } else {
        setSearchTerm('category ' + location.state.cat);
        setSearchCategory('category ' + location.state.cat);
        getForCategory(location.state.cat);
      }
      getCategories();
      getSkills();
    } else {
      setSearchTerm("");
      console.log('not sending enything');
      getForTerm("");
      getCategories();
      getSkills();
    }
	}, [location])

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
    getForTerm(newTerm);
  }



  const userName = typeof window !== 'undefined' && localStorage.getItem('name');
  const [signed,setSigned] = useState(false);

  useEffect( () => {
    if(userName !== null) {
      setSigned(true);
    } else {
      navigate("/");
    }
  },[userName]);

  const getForTerm = (term: string) => {
    console.log('getting for term here'); 
    axios
      .get(`https://accelered-api.whiz.pe/api/info/algolia/search?query=${term}&limit=12&page=0`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

  const getForCourse = () => {
    console.log('getting for term here'); 
    axios
      .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[type.name]=`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
      setSearchTerm("All Courses");
  }

  const getCombined = (catTerm: string, sTerm: string) => {
    axios
      .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[type.name]=${catTerm}&query=${sTerm}`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });

      if(catTerm == "") {
        setSearchTerm("All categories");
      }
  }

  const getForCategory = (catTerm: string) => {
    console.log('getting for term here'); 
    axios
      .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[categories.name]=${catTerm}`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });

      if(catTerm == "") {
        setSearchTerm("All categories");
      }
  }

  const getForSkill = () => {
    console.log('getting for term here'); 
    axios
      .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0&facetFilters[skills.name]=`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
      setSearchTerm("All Skills");
  }

  const getCategories = () => {
    axios
      .get(`https://accelered-api.whiz.pe/api/category`)
      .then((response) => {
        let catElements: any = [];
        response.data.data.map( (item: any) => {
          catElements.push({name: item.name, slug: item.slug, checked: false})
        })
        setCategoriesCheck(catElements);
        setCategories(response.data.data)
      }).catch(function (error) {
        console.log(error);
      });
  }

  useEffect( () => {
    console.log(categories);
  },[categories])

  const getSkills = () => {
    axios
      .get(`https://accelered-api.whiz.pe/api/skill`)
      .then((response) => {
        let skillElements: any = [];
        response.data.data.map( (item: any) => {
          skillElements.push({name: item.name, slug: item.name, checked: false})
        })
        setSkillsCheck(skillElements);
        setSkills(response.data.data)
      }).catch(function (error) {
        console.log(error);
      });
  }

  const handlePagination = (pageIndex: number) => {
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=${pageIndex}${queryCat}${queryList}${querySkill}`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
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
    let newQuery = "";
    if(queryCourses.length) {
      queryCourses.map( (item: any) => {
        newQuery = newQuery + `&facetFilters[type.name]=${item}`;
      })
    }
    setQueryList(newQuery)
    console.log('**** query *** ',newQuery);
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}${querySkill}${queryCat}`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        console.log('working?');
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

  const handleQueryCategory = (term: string) => {
    let checksList: any = [];
    let queryCourses = [...catList];
    categoriesCheck.map((course: any) => {
      if(course.slug == term) {
        course.checked = !course.checked;
      }
      checksList.push(course);
    })
    setCategoriesCheck(checksList);
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
    let newQuery = "";
    if(queryCourses.length) {
      queryCourses.map( (item: any) => {
        newQuery = newQuery + `&facetFilters[categories.name]=${item}`;
      })
    }
    setQueryCat(newQuery)
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}${queryList}${querySkill}`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

  const handleQuerySkill = (term: string) => {
    let skillChecksList: any = [];
    let queryCourses = [...skillList];
    console.log('***** check of skills **** ',skillsCheck);
    skillsCheck.map((course: any) => {
      if(course.slug == term) {
        course.checked = !course.checked;
      }
      skillChecksList.push(course);
    })
    setSkillsCheck(skillChecksList);
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
    let newQuery = "";
    if(queryCourses.length) {
      queryCourses.map( (item: any) => {
        newQuery = newQuery + `&facetFilters[skills.name]=${item}`;
      })
    }
    setQuerySkill(newQuery)
    axios
    .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}`)
      .then((response) => {
        if(parseInt(response.data.data.data.nbPages) > 1) {
          let pagesToUse = [];
          setPage(response.data.data.data.nbPages);
          setPagination(true)
          for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
            pagesToUse.push({number: i + 1, value: i})
          }
          setPages(pagesToUse);
        } else {
          setPage(1);
          setPagination(false);
        }
        console.log('working 3?');
        setItems(response.data.data.data.hits);
      }).catch(function (error) {
        console.log(error);
      });
  }

//   useEffect( () => {
//     let newQuery = "";
//     if(courses.length) {
//       courses.map( (item: any) => {
//         newQuery = newQuery + `&facetFilters[type.name]=${item}`;
//       })
//     }
//   setQueryList(newQuery)
//   axios
//   .get(`https://accelered-api.whiz.pe/api/info/algolia/search?limit=12&page=0${newQuery}${querySkill}${queryCat}`)
//     .then((response) => {
//       if(parseInt(response.data.data.data.nbPages) > 1) {
//         let pagesToUse = [];
//         setPage(response.data.data.data.nbPages);
//         setPagination(true)
//         for(let i = 0; i < parseInt(response.data.data.data.nbPages); i++) {
//           pagesToUse.push({number: i + 1, value: i})
//         }
//         setPages(pagesToUse);
//       } else {
//         setPage(1);
//         setPagination(false);
//       }
//       console.log('working?');
//       setItems(response.data.data.data.hits);
//     }).catch(function (error) {
//       console.log(error);
//     });
// },[courses]);

  return (
    <Layout>
      <div className="bg-slate-50">
        {/* header */}

        <Header isSignIn={signed} handleTerm={handleTerm} />

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
                            <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => getForCourse()} />
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
                            <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio" id="flexRadioDefault5" onChange={() => getForCategory("")} />
                            <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault5">
                              All
                            </label>
                          </div>
                          {
                            categoriesCheck.map((category: any, index: number) => {
                              return(
                                <div className="mb-[13px] flex items-center" key={index}>
                                  <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio" id="flexRadioDefault6" checked={category.checked} onChange={() => handleQueryCategory(category.name)} />
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
                            <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio2" id="flexRadioDefault9" onChange={() => getForSkill()} />
                            <label className="inline-block text-white ff-cg--semibold text-[13px]" htmlFor="flexRadioDefault9">
                              All
                            </label>
                          </div>
                          {
                            skillsCheck.map((skill: any, index: number) => {
                              return(
                                <div className="mb-[13px] flex items-center" key={index}>
                                  <input className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="flexRadio" id="flexRadioDefault6" checked={skill.checked} onChange={() => handleQuerySkill(skill.name)} />
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
                                <Link to={`/courses/${item.slug}`}
                                      state={{id: item.title}}>
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
                                    <div className="flex items-center">
                                      <p className="ff-cg--semibold text-[20px]">${item.price}</p>
                                    </div>
                                      <span className="flex items-center border border-red-500 rounded-full pl-[3px] pr-[10px]">
                                        <ClockIcon className="h-4 w-4 mr-[6px]" />
                                        <span className="ff-cg--semibold text-[12px]">{item.duration}</span>
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )
                          })
                        }
                      </div> :
                      <div className="hidden md:grid gap-4 lg:gap-10 md:grid-cols-12">
                        {
                          items.map((item: any, index: number) => {
                            return(
                              <div className="md:col-span-12 lg:col-span-12 cursor-pointer" key={index + 'b'}>
                                <Link to={`/courses/${item.slug}`}
                                      state={{id: item.title}}>
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
                                      <div className="flex flex-col items-center">
                                        <span className="ff-cg--bold leading-none text-[24px]">${item.price}</span>
                                        <span className="ff-cg--semibold text-[12px] leading-none">Price</span>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                                </Link>
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
              {
                (pagination) && 
                <div className="grid gap-4 lg:gap-10 md:grid-cols-12 mt-10">
                  <div className="md:col-span-12 lg:col-span-12">
                    <div className="flex items-center justify-center">
                      <a href="">
                        <ChevronLeftIcon className="h-6 w-6" />
                      </a>
                      {
                        pages.map( (item: any, index: number) => {
                          return(
                            <button key={index} className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-white bg-[#222222] w-10 h-10 rounded-xl" onClick={() => handlePagination(item.value)}>
                              <span>{item.number}</span>
                            </button>
                          ) 
                        })
                      }
                      {/* <button className="mx-2 flex items-center justify-center ff-cg--semibold border border-[#222222] text-white bg-[#222222] w-10 h-10 rounded-xl">
                        <span>1</span>
                      </button> */}
                      <a href="">
                        <ChevronRightIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              }
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
