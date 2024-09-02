import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Thumbnail3 from '../../../public/images/thumbnails/site.JPG';

class InfoSection extends Component {
    render() {
        return (
            <div className="w-full">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                <div className="xl:grid xl:grid-cols-2 xl:gap-4">
                    <div className="py-20">
                        {/* Heading */}
                        <h1 className="capitalize font-medium text-stone-700 xl:text-2xl"> full year results </h1>
                        <div className="py-10 xl:pr-20">
                            <ul>
                                <li className="py-5 border-y border-stone-600">
                                    <Link href="#">
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>Watch our full year results webcast</span>
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
                                    <Link href="#">
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>Visit our Results Center</span>
                                        <span>
                                            <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="py-5 border-y border-stone-600">
                                    <Link href="#">
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>Download our Annual Report & Accounts 2021</span>
                                        <span> 
                                            <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>

                                <li className="py-5 border-y border-stone-600">
                                    <Link href="#">
                                        <a className="capitalize hover:text-red-600 text-stone-700 flex items-center  justify-between" id="newsLink">
                                        <span>Download our full year results presentation</span>
                                        <span> 
                                            <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-red-200 z-0 hidden xl:block relative" style={{height: '550px'}}>
                        <Image src={Thumbnail3} alt={"Home"} className="w-full h-full" layout='fill'/>
                        <div className="z-50 absolute mt-96 py-4 px-5 border-l-2 border-red-600 w-5/12 mx-auto ml-4">
                            <span className="text-white font-medium capitalize"> equally working towards a bright future, with a community that cares. </span>                       
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        );
    }
}

export default InfoSection;
