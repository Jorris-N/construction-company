import * as React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Pagination } from "react-pagination-bar";
import data from '../../../pages/Data/productData.json';



export default function ProductSection () {

    const [currentPage, setCurrentPage] = useState(1);
    const pagePostsLimit = 9;

    return (
        <div className="w-full pb-10  mx-auto px-4 xl:px-0 pb-20">
            <div className="xl:w-10/12 mx-auto px-4 xl:px-0 z-30 xl:-mt-32 lg:-mt-20">
                <div className="w-full flex-items-center xl:justify-between space-x-4 py-4 lg:py-4  xl:-mt-20 lg:mt-20">
                    <h1 className="capitalize text-stone-700 font-medium pb-2">Our Products</h1>
                </div>
                <div className="w-full xl:grid xl:grid-cols-3 xl:gap-4 lg:grid lg:grid-cols-2 lg:gap-6 flex flex-col space-y-4 xl:space-y-0 lg:space-y-0">
                    {
                        data
                            .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
                        .map ((item) => (
                            <div className="h-72 xl:w-80 relative hover:shadow-md cursor-pointer" id ="card-container" key={item.id}>
                                    <Image src={item.image} className="block w-full h-full" id="image" layout='fill' alt={item.title}/>

                                    <div className="absolute inset-x-0 inset-y-0 w-full h-full opacity-0 transition duration-500 ease px-4 flex flex-col space-y-1 justify-center " id="overlay">
                                        <h1 className="text-red-600 font-medium text-lg">{item.title}</h1>
                                        <div className="text-stone-600 text-sm">
                                            <p>{item.description}</p>

                                        </div>
                                    </div>
                                    <div className="absolute inset-x-0  w-full  bg-stone-50 shadow" style={{ bottom: '0px'}}>
                                        <div className="py-3 px-4 transition duration-300 scale-y-100 opacity-100" id="product">
                                            <h1 className="font-semibold xl:text-lg lg:text-lg tracking-wide text-red-600">{item.title}</h1>
                                        </div>
                                    </div>
                                </div>  
                        ) )
                    }
                </div>
                <div className=' mt-8 text-center'>
                <Pagination
                    currentPage={currentPage}
                    itemPerPage={pagePostsLimit}
                    onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                    totalItems={data.length}
                    pageNeighbours={5}
                />
                </div>
            </div>
        </div>
    );
}