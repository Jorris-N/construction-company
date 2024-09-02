import React, { Component } from 'react';
import data from '../../../pages/Data/achievementData.json';
import Link from 'next/link';
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

class AchievementSection extends Component {
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
                <div className="px-6 xl:px-0 mx-auto xl:w-10/12">
                    <h1 className="capitalize text-stone-700 font-medium pb-2">our latest achievements</h1>
                    
                        <OwlCarousel responsiveClass={true} loop={false} autoplay={false} dots={true} nav={true} smartSpeed={400} autoplayTimeout={4000} autoplayHoverPause={true} responsive={state.responsive}>
                        {/* <div className="py-6 xl:grid-cols-3 lg:grid-cols-3 xl:gap-6 grid grid-col-1 gap-6 justify-between xl:space-y-0"> */}
                            {
                                data.map ((item) => (
                                <div className="xl:w-96 w-full bg-white pb-8 border border-gray-200 justify-between" key={item.id}>
                                <div className="w-full h-60 overflow-hidden cursor-pointer relative" id="newsHeader">
                                    <Image src={item.image} alt={item.link} id="newsImage" layout='fill' className="w-full"/>
                                </div>
                                <div className="w-11/12 mx-auto pl-3">
                                    <div className="py-5 text-stone-700 font-medium">
                                        <p>{item.date}</p>
                                        <h1 className="xl:text-2xl text-xl py-2">{item.description}</h1>
                                    </div>
                                    <div>
                                    <Link href="#">
                                        <a className="flex xl:flex-row xl:items-center space-x-2 text-red-600 text-lg capitalize hover:text-stone-700" id="newsLink">
                                            <span> read more </span>
                                            <span id="right-arrow">
                                            <svg className="w-6 h-6" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </span>
                                        </a>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                                ))
                            }
                            
                        </OwlCarousel>
                    
                </div>
            </div>
        );
    }
}

export default AchievementSection;
