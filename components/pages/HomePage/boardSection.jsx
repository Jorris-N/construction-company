import React, { Component } from 'react';
import Image from 'next/image';
import DirectorImg from '../../../public/images/about/director.jpg'

class BoardDirectors extends Component {
    render() {
        return (
            <div className="w-full bg-stone-50">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0 py-20">
                    <h1 className="capitalize font-medium text-stone-700 text-xl"> board of directors </h1>
                    <div className=" xl:grid xl:grid-cols-4 xl:gap-4 py-4 flex flex-col space-y-4 xl:space-y-0">
                        <div className="cursor-pointer mx-3 bg-white shadow-md overflow-hidden gap-5 mb-4">
                        <div className='flex-shrink-0 relative h-52'>
                            <Image src={DirectorImg} alt={"Director"} className=" w-full object-cover" layout='fill' id="image"/>
                        </div>
                        <div className=" w-full bg-stone-50 shadow">
                                <div className="py-3 px-4 transition duration-300 scale-y-100 opacity-100" >
                                    <h1 className="font-semibold text-sm  tracking-wide text-red-600 capitalize">ronald mwagombe </h1>
                                    <p className="text-sm italic font-light tracking-wide text-stone-500 capitalize">executive director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BoardDirectors;
