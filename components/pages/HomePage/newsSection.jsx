import React, { Component } from 'react';
import Link from 'next/link';
import News from './../../../pages/Data/newsData.json'
import Image from 'next/image';

let $ =require("jquery");
if(typeof window !== "undefined"){
    window.$ =window.jQuery = require("jquery");
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel =dynamic(()=> import("@ntegral/react-owl-carousel"),{
    ssr:false,
})

class NewsSection extends Component {
    render() {
        const state= {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1024: {
                    items: 2,
                },
                1366: {
                    items: 3,
                },
                1920: {
                    items: 4,
                },
            },
        }
        return (
            <div className="w-full bg-stone-50 py-20">
                <>
                    <div className="px-6 xl:px-0 mx-auto xl:w-10/12">
                        {/* Heading */}
                        <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between space-x-4 py-4">
                            <h1 className="capitalize text-stone-700 font-medium pb-2">articles from jamhuri magazine</h1>
                                <Link href='https://jamhurimagazine.co.ke' target={"_blank"}>
                                    <a className="capitalize hover:text-stone-700 text-red-600 flex items-center space-x-2" id="newsLink">
                                        <span>see more</span>
                                        <span> <svg className="w-5 h-5" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></span>
                                    </a>
                                </Link>
                        </div>

                    
                    <OwlCarousel responsiveClass={true} loop={true} autoplay={true} dots={true} nav={true} smartSpeed={400} autoplayTimeout={4000} autoplayHoverPause={true} responsive={state.responsive}>
                        {
                            News.map((News) => (
                               <div className="mx-3 bg-white flex flex-col md:flex md:flex-col overflow-hidden gap-5 mb-4 mt-6" key={News.id}>
                                    <div className="w-full bg-white pb-8 border border-gray-200">
                                        <div className=" h-72 overflow-hidden cursor-pointer relative" id="Header">
                                            <Image src={News.image} alt={News.title} layout='fill' id="newsImage"/>
                                        </div>
                                       
                                        <div className="w-11/12 mx-auto pl-3">
                                            <div className="py-5 text-stone-700 font-medium">
                                                <p>{News.date}</p>
                                                <h1 className="text-xl py-2">{News.description}</h1>
                                            </div>
                                            <Link href='#'>
                                            <a className="capitalize text-red-600 hover:text-stone-700 flex items-center space-x-2" id="newsLink">
                                                <span>read More</span>
                                                <span><svg className="w-6 h-6" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></span> 
                                            
                                            </a>
                                        </Link>  
                                        </div>
                                    </div>
                               </div>
                                   

                            ))
                        }

                    </OwlCarousel>
                    </div>
                </>
                
            </div>
        );
    }
}

export default NewsSection;
