import React, { Component } from 'react';
import Link from 'next/link';

class AboutSection extends Component {
    render() {
        return (
            <>
            <div className="w-full">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0 ">
                    <div className="py-16">
                        <div className="xl:w-11/12">
                            <h3 className="capitalize font-medium text-stone-700 xl:text-xl pb-2">Approach</h3>
                        <h1 className="xl:text-3xl text-2xl  font-medium text-stone-700">We recognise that being sustainable makes us more efficient, helps us to win work, engages our employees and benefits communities and the environment. This is why our sustainability commitments are integral to our strategy. Importantly, they are at the core of delivering stakeholder value.</h1>
    
                        </div>
                        <div className="pt-5">
                            <h3 className="capitalize font-medium text-stone-700 xl:text-xl pb-2">Our commitment to sustainability</h3>
                            <p className="pt-3 text-stone-700 xl:text-xl">As a responsible business, we manage our impacts in relation to six fundamental areas: our people, health and safety, environment and climate change, communities, clients, and supply chain. As part of our strategy update, we have reviewed the sustainability priorities of our principal stakeholder groups and renewed our key commitments across these six pillars. </p>
                        </div>
                        <div className="xl:pt-6 capitalize font-medium xl:text-xl text-sm pt-3 xl:w-1/4" id="bannerCta">
                            <Link href ="#" >
                                <a className="flex xl:flex-row  xl:items-center space-x-2 ">
                                <span className="text-red-600 text-lg">read more</span>
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
            </>
        );
    }
}

export default AboutSection;
