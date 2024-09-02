import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Director from '../../../public/images/about/director.jpg'

class PurposeSection extends Component {
    render() {
        return (
            <div className="w-full">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                    <div className="xl:grid xl:grid-cols-2">
                        <div className="py-20 px-6">
                            <div>
                                <h3 className="capitalize font-medium text-stone-700 xl:text-xl">Our purpose</h3>
                                <h1 className="xl:text-4xl text-2xl xl:w-11/12 font-medium text-stone-700">What gives a company like Ndara B  purpose?</h1>
                            </div>
                            <div className={"xl:pt-6 capitalize font-medium xl:text-xl text-sm pt-3"} id="bannerCta">
                                <Link href="#">
                                    <a className="flex xl:flex-row  xl:items-center space-x-2">
                                    <span className="text-red-600 text-lg">Watch the video</span>
                                    <div className="rounded-full hover:scale-110 hover:shadow hover:transition hover:duration-500 ">
                                        <svg className="w-8 h-8 text-red-600 hover:text-stone-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-red-200 hidden xl:block relative" style={{height: '550px'}}>
                            <Image src={Director} alt="Director" className="w-full h-full" layout='fill'/>
                        </div>
                    </div>
                </div>  
                
            </div>
        );
    }
}

export default PurposeSection;
