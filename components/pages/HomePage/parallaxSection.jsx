import React, { Component } from 'react';
import Link from 'next/link';

class ParallaxSection extends Component {
    render() {
        return (
            <div className="w-full parallaxBanner bg-cover bg-center h-96">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="xl:w-10/12 mx-auto px-6 xl:px-0 w-full">
                        <div className="xl:w-9/12 xl:text-3xl lg:text-2xl flex flex-col space-y-2 text-2xl">
                            <h1 className="xl:font-extralight font-medium">Committed to capturing the best parts of our community resources,</h1>
                            <h1 className="font-medium">towards sustainable growth</h1>
                        </div>
                        <div className="xl:pt-8 capitalize font-medium xl:text-xl pt-3" id="bannerCta">
                            <Link href="https://dut.or.ke">
                                 <a className="flex xl:flex-row flex-col xl:items-center xl:space-x-2 space-y-2 xl:space-y-0" target={"_blank"}>
                                <span>learn about our trusted project</span>
                                <div className="h-8 w-8 bg-red-600 rounded-full text-white flex items-center justify-center" id="right-arrow">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
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

export default ParallaxSection;
