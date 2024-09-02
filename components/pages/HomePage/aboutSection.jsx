import React, { Component } from 'react';
import Link from 'next/link';

class AboutSection extends Component {
    render() {
        return (
            <div className="w-full">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                    <div className="py-16">
                        <h1 className="capitalize text-stone-700 font-medium pb-2">about us</h1>
                        <h1 className="xl:text-3xl text-2xl xl:w-11/12 font-medium text-stone-700"> Ndara B Company products and services incorporate: Natural Construction Materials; Concrete and Wood Building Materials; Environmental Management and Sustainability. </h1>
                        <div className="xl:pt-6 capitalize font-medium xl:text-xl text-sm pt-3" id="bannerCta">
                            <Link href='/about'>
                                <a className="flex xl:flex-row  xl:items-center space-x-2 w-44">
                                    <span className="text-red-600 text-lg capitalize">read more</span>
                                    <div className="h-7 w-7 bg-red-600 rounded-full text-white flex items-center justify-center" id="right-arrow">
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

export default AboutSection;
