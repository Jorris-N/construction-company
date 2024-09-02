import React, { Component } from 'react';
import Link from 'next/link';

class AboutSector extends Component {
    render() {
        return (
            <div className="w-full bg-stone-100 xl:pb-32">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                    <div className="py-16">
                        <div className="xl:w-11/12">
                            <h1 className="xl:text-3xl text-2xl  font-medium text-stone-700 capitalize">The Company has diverse products for the supporting the attainment of the right to housing, the right to food, and children rights.</h1>
                            <p className="pt-5 text-stone-700 xl:text-xl">This approach enables us to deliver schemes of national distinction, with a local approach across a wide range of markets. Our spread of work for both public and private sector clients is well-balanced and widespread and we are renowned for our ability to provide sustainable, whole-life solutions. We pride ourselves on our collaborative approach, as demonstrated by our record for repeat business and our position on key frameworks.</p>
                        </div>
                        <div className="xl:pt-6 capitalize font-medium xl:text-xl text-sm pt-3 xl:w-1/4" id="bannerCta">
                            <Link href="#">
                                <a className="flex xl:flex-row  xl:items-center space-x-2">
                                    <span className="text-red-600 text-lg">Search our projects</span>
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

export default AboutSector;
