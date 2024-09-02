import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div className="w-full bg-stone-100">
                <div className="xl:w-8/12 mx-auto px-6 xl:px-0 py-24 flex xl:flex-row flex-col xl:space-x-6">
                    <span> 
                        <svg className="h-12 w-12 text-red-600" viewBox="0 0 16 16" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 7V14H0V6.9C0 2.1 4.5 1.5 4.5 1.5L5.1 2.9C5.1 2.9 3.1 3.2 2.7 4.8C2.3 6 3.1 7 3.1 7H7ZM16 7V14H9V6.9C9 2.1 13.5 1.5 13.5 1.5L14.1 2.9C14.1 2.9 12.1 3.2 11.7 4.8C11.3 6 12.1 7 12.1 7H16Z" /></svg>
                    </span>
                    <div className="flex flex-col space-y-4 mt-4">
                        <h1 className="xl:text-xl text-lg">Our offering is defined by our people, so we are committed to developing you personally and professionally at every stage of your career, working in a fast-paced, exciting environment that guides, challenges and develops you, so that we attract and retain the right talent for our business.&quot;</h1>
                            <div>
                                <h1 className="text-red-600">Ronald Thomas</h1>
                                <p className="text-stone-400 font-light">Director, Ndara B Company</p>
                            </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Quote;
