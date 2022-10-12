import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react'

type ResultProps = {
    items: any,
    searchTerm: any,
    handleDropDown: (status: boolean) => void;
};

const Results: React.FC<ResultProps> = ( {items,handleDropDown,searchTerm} ) => {

    const [itemsToShow,setItemsToShow] = useState([]);
    const [courses,setCourses] = useState<any>([]);
    const [certs,setCerts] = useState<any>([]);
    const [paths,setPaths] = useState<any>([]);

    useEffect( () => {
        // console.log('**** items on results *** ',searchTerm)
    },[])

     useEffect( () => {
        setItemsToShow(items);
        let courseArray: any = [];
        let certArray: any = [];
        let pathArray: any = [];
        let otherArray: any = [];
        items.map((item: any) => {
            if(item.type.name == 'Program') {
                courseArray.push(item)
            } else if(item.type.name == 'Certificate') {
                certArray.push(item)
            } else {
                pathArray.push(item)
            }
        })
        setCourses(courseArray);
        setCerts(certArray);
        setPaths(pathArray);
     },[items] )

     const close = () => {
        handleDropDown(false);
     }

    return (
        <div className={`absolute left-0 right-0 top-[70px] rounded-2xl z-10 overflow-hidden max-h-[1200px] shadow-lg`}>
                <div className="rounded-2xl bg-white w-full p-4">
                    <XMarkIcon className='close-icon' onClick={() => close()} />
                    <div className="border-b mb-3">
                        <div className="mb-3">
                            <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Suggestions</p>
                        </div>
                        <div className="flex flex-col">
                            {
                                itemsToShow.slice(0, 5).map( (item: any,index: number) => {
                                    return(
                                        <Link to={`/courses/${item.slug}`} state={{id: item.title}} className="mb-3"  key={index}>
                                            {item.title} 
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                        {
                            (courses.length) ?
                            <div className="border-b mb-3">
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Courses</p>
                                    <p className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold">
                                        <span><Link to="/search" state={{term: searchTerm, cat: "Program"}}>See All</Link></span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        courses.map( (course: any, index: number) => {
                                            return(<Link to={`/courses/${course.slug}`} state={{id: course.title}} className="mb-3"  key={index}>{course.title}</Link>)
                                        })
                                    }
                                    {/* <a href="" className="mb-3">Network Security</a>
                                    <a href="" className="mb-3">OT Cybersecurity</a> */}
                                </div>
                            </div> : ""
                        }
                        {
                            (certs.length) ?
                            <div className="border-b mb-3">
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Certificates</p>
                                    <p className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" >
                                        <span><Link to="/search" state={{term: searchTerm, cat: "Certificate"}}>See All</Link></span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        certs.slice(0, 3).map( (cert: any, index: number) => {
                                            return(<Link to={`/courses/${cert.slug}`} state={{id: cert.title}} className="mb-3"  key={index}>{cert.title}</Link>)
                                        })
                                    }
                                    {/* <a href="" className="mb-3">Network Security</a>
                                    <a href="" className="mb-3">OT Cybersecurity</a> */}
                                </div>
                            </div> : ""
                        }
                        {
                            (paths.length) ?
                            <div className="border-b mb-3">
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Learning Path</p>
                                    <p className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold">
                                        <span><Link to="/search" state={{term: searchTerm}}>See All</Link></span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        paths.slice(0, 3).map( (path: any, index: number) => {
                                            return(<Link to={`/courses/${path.slug}`} state={{id: path.title}} className="mb-3"  key={index}>{path.title}</Link>)
                                        })
                                    }
                                    {/* <a href="" className="mb-3">Network Security</a>
                                    <a href="" className="mb-3">OT Cybersecurity</a> */}
                                </div>
                            </div> : ""
                        }
                    
                    {/* <div className="border-b mb-4">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Certificates</p>
                            <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                <span>See All</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a href="" className="mb-3">Network Security</a>
                            <a href="" className="mb-3">OT Cybersecurity</a>
                        </div>
                    </div>
                    <div className="border-b mb-4">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Learning Path</p>
                            <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                <span>See All</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a href="" className="mb-3">Network Security</a>
                        </div>
                    </div> */}
                    <div className="flex items-center justify-center">
                        <p className="text-base lg:text-[20px] flex items-center justify-center text-red-500 ff-cg--semibold">
                            <span><Link to="/search" state={{term: searchTerm}} className="mb-3">See All Results</Link></span>
                            <ChevronRightIcon className="h-5 w-5" />
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Results