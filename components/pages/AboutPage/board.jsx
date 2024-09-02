import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Thumbnail2 from '../../../public/images/thumbnails/thumbnail2.png';

export default function BoardSection () {
    return(
        <div className="w-full">
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                <div className="xl:grid xl:grid-cols-2">
                    <div className="py-20 px-6">
                        <div>
                            <h3 className="capitalize font-medium text-stone-700 xl:text-xl">our board</h3>
                            <h1 className="xl:text-4xl text-2xl xl:w-10/12 font-medium text-stone-700 capitalize">ndara b company is overseen by its highly experienced DUT board which sets the strategic direction for our business</h1>
                        </div>
                        <div className="xl:pt-6 capitalize font-medium xl:text-xl text-sm pt-3" id="bannerCta">
                                <Link href="#">
                                    <a className="flex xl:flex-row  xl:items-center space-x-2">
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
                    <div className="bg-red-200 hidden xl:block relative" style={{height: '500px'}}>
                        <Image src={Thumbnail2} alt="Board" className="w-full h-full" layout='fill'/>
                    </div>
                </div>
            </div>
        </div>
    )
}