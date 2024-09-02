import React, { Component } from 'react';
import Link from 'next/link';

class BannerSection extends Component {
    render() {
        return (
            <div className="w-full aboutBanner bg-cover bg-center h-96">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                        <div className="xl:w-7/12 xl:text-xl flex flex-col space-y-2 text-xl">
                            <h1 className="font-medium"> Delivering Sustainable Growth </h1>
                        <h1 className="font-medium xl:text-3xl text-2xl">Sustainability is central to our strategy</h1>
                    </div>
                    <div className="xl:pt-8 capitalize font-medium xl:text-xl text-sm pt-3" id="bannerCta">
                        <Link href="#">
                            <a className="flex xl:flex-row flex-col xl:items-center xl:space-x-2 space-y-2 xl:space-y-0">
                            <span>Read about our commitment to achieving Net Zero carbon by 2030</span>
                            <div className="h-8 w-8 bg-red-600 rounded-full text-white flex items-center justify-center" id="right-arrow">
                                <svg className="w-6 h-6"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            </a>
                        </Link>
                    </div>


                </div>

            </div>
                
            </div>
        );
    }
}

export default BannerSection;
