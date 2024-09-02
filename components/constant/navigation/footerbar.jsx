import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'


class Footerbar extends Component {
    render() {
        return (
            <>
                <div className="w-full bg-stone-700">
                    <div className="xl:w-10/12 mx-auto text-white px-6 xl:px-0">
                    <div className="xl:flex xl:justify-between py-24  xl:flex-row flex-col space-y-6 xl:space-y-0">
                        <div className="xl:flex xl:space-x-10  xl:flex-row flex-col space-y-4 xl:space-y-0">
                            <div className="flex flex-col space-y-5 text-sm xl:w-1/4 w-8/12">
                                <h1 className="font-medium text-lg capitalize"> contact us </h1>
                                <p className="capitalize"> We welcome queries from all our stakeholders and would like to hear from you </p>
                                <Link href='/contacts'>
                                    <a className="flex">
                                        <span className="text-white mr-1"> view contacts </span>
                                        <span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg></span>
                                    </a>
                                </Link>
                            </div>
                            <div className="xl:pl-10">
                                <h1 className="font-medium text-lg capitalize"> group websites</h1>
                                <div className="py-5 flex flex-col space-y-3">
                                <Link href='https://conceptconstruction.netlify.app/' className="flex items-center space-x-2  font-medium">
                                    <a className="flex text-white mr-1 capitalize hover:text-red-600"> concept construction
                                        <span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"><path
                                         d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path
                                         d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></span>
                                    </a>
                                </Link>
                                <Link href='http://dut.or.ke/' className="flex items-center space-x-2  font-medium">
                                    <a className="flex text-white mr-1 capitalize hover:text-red-600"> diaspora university town
                                        <span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"><path
                                         d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path
                                         d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></span>
                                    </a>
                                </Link>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center space-x-8">
                                <Link href='#'>
                                    <a className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-stone-700 hover:text-red-600">
                                    <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl"/>
                                    </a>
                                </Link>
                                <Link href='#'>
                                    <a className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-stone-700 hover:text-red-600">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl"/>
                                    </a>
                                </Link>
                                <Link href='#'>
                                    <a className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-stone-700 hover:text-red-600">
                                    <FontAwesomeIcon icon={faYoutube} className="text-2xl"/>
                                    </a>
                                </Link>
                        </div>
                    </div>
                    <div className="flex xl:flex-row xl:items-center xl:justify-between w-full pb-10  flex-col space-y-3 xl:space-y-0">
                        <Link href='#'>
                            <a className="hover:text-red-600 uppercase">
                                nema approval document
                            </a>
                        </Link>
                        <p>
                            &copy; {new Date().getFullYear()} Ndara B Company. All Rights Reserved.
                        </p>
                    </div>

                    </div>
                
                </div>
            </>
           
        );
    }
}

export default Footerbar;
