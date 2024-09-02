import React, { Component } from 'react';
import Image from 'next/image';
import info from '../../../public/images/home/info.jpg';
import Link from 'next/link';

class Projectinfo extends Component {
    render() {
        return (
            <div className="w-full bg-stone-100">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                    <div className="xl:grid xl:grid-cols-2 xl:gap-4">
                    <div className="bg-red-200 z-0 hidden xl:block relative" style={{height: '550px'}}>
                        <Image src={info} alt={"Home"} className="w-full h-full" layout='fill'/>
                        <div className="z-50 absolute mt-96 py-4 px-5 border-l-2 border-red-600 w-5/12 mx-auto ml-4">
                            <span className="text-white font-medium capitalize"> equally working towards a bright future, with a community that cares. </span>                       
                        </div>
                    </div>
                    <div className="py-20 xl:px-8">
                        {/* Heading */}
                        <h1 className="capitalize font-medium text-stone-700 xl:text-2xl"> project highlights </h1>
                        <div className="py-10 xl:pr-20">
                            <ul>
                                <li className="py-5 border-y border-stone-600">
                                    <Link href="https://dut.or.ke/sme" target={"_blank"}>
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>diaspora university town</span>
                                        <span> 
                                            <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="py-5 border-y border-stone-600">
                                    <Link href="https://dktb.co.ke/" target={"_blank"}>
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>daktari biotechnology</span>
                                        <span>
                                            <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="py-5 border-y border-stone-600">
                                    <Link href="https://dutcredit.co.ke" target={"_blank"}>
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>DUT credit</span>
                                        <span> 
                                        <   svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="py-5 border-y border-stone-600">
                                    <Link href="https://dktb.co.ke/" target={"_blank"}>
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>VIEW THE NEMA APPROVAL DOCUMENT</span>
                                        <span> 
                                            <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Projectinfo;
