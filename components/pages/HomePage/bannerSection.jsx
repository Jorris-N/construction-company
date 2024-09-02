import React, { Component } from 'react';
import Link from 'next/link';

class BannerSection extends Component {
    render() {
        return (
            <div className="w-full homeBanner bg-cover bg-center h-96">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="xl:w-10/12 mx-auto px-6 xl:px-0 w-full">
                        <div className="xl:w-9/12 xl:text-6xl lg:text-3xl flex flex-col space-y-2 text-2xl">
                            <h1 className="xl:font-extralight font-medium capitalize">we are people-oriented, progressive business, </h1>
                            <h1 className="font-medium capitalize">driven by our values</h1>
                        </div>
                        <div className="xl:pt-8 capitalize font-medium xl:text-xl text-sm pt-3" id="bannerCta">
                            <Link href='/sustainability'>
                                <a className="capitalize flex xl:flex-row flex-col xl:items-center xl:space-x-2 lg:items-center lg:space-x-2 space-y-2 xl:space-y-0">
                                    <span>learn about the ndara b community materials company</span>
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
