import React, { Component } from 'react';

class BannerSection extends Component {
    render() {
        return (
            <div className="w-full aboutBanner bg-cover bg-center h-96">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                        <div className="xl:w-7/12 xl:text-xl flex flex-col space-y-2 text-xl">
                            <h1 className="font-mdium capitalize">
                                about us
                            </h1>
                            <h1 className="font-medium xl:text-3xl text-2xl capitalize">
                                ndara b company is a leading kenyan materials extraction business employing over 3300 people across the country.
                            </h1>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BannerSection;
