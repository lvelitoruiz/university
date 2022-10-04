import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

const Results = (items: any) => {

    const [itemsToShow,setItemsToShow] = useState([]);
    const [courses,setCourses] = useState<any>([]);
    const [certs,setCerts] = useState<any>([]);
    const [paths,setPaths] = useState<any>([]);
    const [others,setOthers] = useState<any>([]);

     useEffect( () => {
        setItemsToShow(items.items);
        let courseArray: any = [];
        let certArray: any = [];
        let pathArray: any = [];
        let otherArray: any = [];
        items.items.map((item: any) => {
            if(item.type.name == 'Program') {
                courseArray.push(item)
            } else if(item.type.name == 'Certificate') {
                certArray.push(item)
            } else if(item.type.name == 'Learning Path') {
                pathArray.push(item)
            } else {
                otherArray.push(item)
            }
        })
        setCourses(courseArray);
        setCerts(certArray);
        setPaths(pathArray);
        setOthers(otherArray);
     },[items] )

    return (
        <div className={`absolute left-0 right-0 top-[70px] rounded-2xl z-10 overflow-hidden max-h-[1200px] shadow-lg`}>
                <div className="rounded-2xl bg-white w-full p-4">
                    <div className="border-b mb-4">
                        <div className="mb-4">
                            <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Suggestions</p>
                        </div>
                        <div className="flex flex-col">
                            {
                                itemsToShow.map( (item: any,index: number) => {
                                    return(
                                        <a href="" className="mb-3" key={index}>
                                            {item.title} {index}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                        {
                            (courses.length) ?
                            <div className="border-b mb-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Courses</p>
                                    <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                        <span>See All</span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        courses.map( (course: any, index: number) => {
                                            return(<a href="" className="mb-3" key={index}>{course.title}</a>)
                                        })
                                    }
                                    {/* <a href="" className="mb-3">Network Security</a>
                                    <a href="" className="mb-3">OT Cybersecurity</a> */}
                                </div>
                            </div> : ""
                        }
                        {
                            (certs.length) ?
                            <div className="border-b mb-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Certificates</p>
                                    <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                        <span>See All</span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        certs.map( (cert: any, index: number) => {
                                            return(<a href="" className="mb-3" key={index}>{cert.title}</a>)
                                        })
                                    }
                                    {/* <a href="" className="mb-3">Network Security</a>
                                    <a href="" className="mb-3">OT Cybersecurity</a> */}
                                </div>
                            </div> : ""
                        }
                        {
                            (paths.length) ?
                            <div className="border-b mb-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Learning Path</p>
                                    <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                        <span>See All</span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        paths.map( (path: any, index: number) => {
                                            return(<a href="" className="mb-3" key={index}>{path.title}</a>)
                                        })
                                    }
                                    {/* <a href="" className="mb-3">Network Security</a>
                                    <a href="" className="mb-3">OT Cybersecurity</a> */}
                                </div>
                            </div> : ""
                        }
                        {
                            (others.length) ?
                            <div className="border-b mb-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-base lg:text-[20px] ff-cg--semibold leading-none">Others</p>
                                    <a className="text-base lg:text-[20px] flex items-center text-red-500 ff-cg--semibold" href="">
                                        <span>See All</span>
                                        <ChevronRightIcon className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        others.map( (item: any, index: number) => {
                                            return(<a href="" className="mb-3" key={index}>{item.title}</a>)
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
                        <a className="text-base lg:text-[20px] flex items-center justify-center text-red-500 ff-cg--semibold" href="">
                            <span>See All Results</span>
                            <ChevronRightIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Results