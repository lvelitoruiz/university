import React, { forwardRef, useEffect } from 'react'

interface ISuccessList {
    items: any
}

const SuccessList = forwardRef<HTMLDivElement, ISuccessList>(({ items }: ISuccessList, ref) => {


    return (
        <div className="col-span-12" ref={ref}>
            <div className='show-to-print p-6'>
                {/* <p>solo salgo en impresión</p> */}
                <div className="w-full">
                    <h2 className='text-3xl font-bold py-4'>Successful purchase</h2>
                    <div className="rounded-xl bg-white shadow-lg h-full">
                        <div className="grid grid-cols-12 lg:grid lg:grid-cols-12">
                            <div className="col-span-4 lg:col-span-4 p-6 border-r border-solid">
                                <p className="ff-cg--semibold mb-1">Order Number</p>
                                <p className="text-base lg:text-[20px]">3789-909390</p>
                            </div>
                            <div className="col-span-4 lg:col-span-4 p-6 border-r border-solid">
                                <p className="ff-cg--semibold mb-1">Order Date</p>
                                <p className="text-base lg:text-[20px]">September 26, 2022</p>
                            </div>
                            <div className="col-span-4 lg:col-span-4 p-6">
                                <div>
                                <p className="text-base lg:text-[20px]">****** 0039</p>
                                <p className="ff-cg--semibold mt-1">Expires 09/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg h-full p-6">
                <h3 className="ff-cg--semibold text-base lg:text-[20px] mb-6">Order Items</h3>
                <div className="overflow-x-auto">
                    <table className="w-full lg:w-full rounded-2xl mb-5">
                        <thead className="bg-[#da1a32] text-white rounded-2xl border-l border-solid border-[#da1a32]">
                            <tr>
                                <th className="text-left ff-cg--semibold py-4 px-8">Title</th>
                                <th className="text-center ff-cg--semibold py-4 px-8">Type</th>
                                <th className="text-center ff-cg--semibold py-4 px-8">Price</th>
                                <th className="text-center ff-cg--semibold py-4 px-8">Seats</th>
                                <th className="text-right ff-cg--semibold py-4 px-8">Total</th>
                            </tr>
                        </thead>
                        {
                            (items.length) &&
                            <tbody className="border-l border-r border-solid">
                                {
                                    items.map((item: any, index: number) => {
                                        return (
                                            <tr className="border-b border-solid" key={index}>
                                                <td className="text-left py-4 px-8">
                                                    <span className="flex flex-col">
                                                        <span className="underline decoration-solid">{item.title}</span>
                                                        <span className="text-sm">{item.sponsorId}</span>
                                                    </span>
                                                </td>
                                                <td className="text-center py-4 px-8">{item.typeId}</td>
                                                <td className="text-center py-4 px-8">${item.price}</td>
                                                <td className="text-center py-4 px-8">1</td>
                                                <td className="text-right py-4 px-8">${item.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    )
})


export default SuccessList;