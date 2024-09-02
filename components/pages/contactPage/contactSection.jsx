import React, { Component } from 'react';

class ContactSection extends Component {
    render() {
        return (
            <div className="w-full pb-10  mx-auto px-4 xl:px-0 pb-20">
                <div className="xl:w-10/12 mx-auto px-4 xl:px-0">
                    <div className="py-16">
                        <h1 className="capitalize text-stone-700 font-semibold text-3xl pb-2">enquiries</h1>
                        <p className="mt-4 text-lg leading-6 text-gray-500 capitalize">please fill out the form belowe if you have any enquiries regarding to our business</p>
                    </div>
                    <div className="mt-12 ">
      <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 border-t-2 p-12 bg-white">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
          <div className="mt-1">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="form-input block w-full py-3 px-4 border placeholder-gray-400 bg-white transition focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200" required/>
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
          <div className="mt-1">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="form-input block w-full py-3 px-4 border placeholder-gray-400 bg-white transition focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200" required/>
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <div className="mt-1">
            <input type="text" name="company" id="company" autoComplete="organization" className="form-input block w-full py-3 px-4 border placeholder-gray-400 bg-white transition focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200" required/>
          </div>
        </div>
        <div>
        <label htmlFor="company" className="block text-sm font-medium text-stone-700">
                  Enquiry
                </label>
                <div className="mt-1">
                <select
                    id="enquiry"
                    name="enquiry"
                    className="py-3 px-4 block w-full bg-white border justify-evenly text-center focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200"
                  >
                    <option value="Please Select Here" className="block text-sm font-medium text-stone-700" selected>Please select Here</option>
                    <option value="General enquiry"  className="block text-sm font-medium text-stone-700" >General Enquiry</option>
                    <option value="Feedback"  className="block text-sm font-medium text-stone-700" >Feedback</option>
                    <option value="shareholders & Corporate"  className="block text-sm font-medium text-stone-700" >Shareholders & Corporate</option>
                    <option value="suggestions"  className="block text-sm font-medium text-stone-700" >Suggestions</option>
                  </select>
                </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" className="form-input block w-full py-3 px-4 border placeholder-gray-400 bg-white transition focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200" placeholder="someone@example.com" required/>
          </div>
        </div>
        <div>
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="phone-number" id="phone-number" autoComplete="tel" className="form-input block w-full py-3 px-4 border placeholder-gray-400 bg-white transition focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200" placeholder="+254 721 987 654"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <div className="mt-1">
            <textarea id="message" name="message" rows="6" className="form-input block w-full py-3 px-4 border placeholder-gray-400 bg-white transition focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 transition ease-in-out duration-200" placeholder='Message'></textarea>
          </div>
        </div>
        
        <div className="sm:col-span-2">
        <button
                  type="submit"
                  className={"flex xl:flex-row  xl:items-center space-x-2 text-red-600 font-semibold text-xl hover:scale-110 ease-in-out duration-300"}
                >
                 Submit &nbsp; <svg className={"w-6 h-6 bg-red-600 rounded-full text-white items-center justify-center"}  fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clipRule="evenodd">
                            </path>
                        </svg>

                </button>
        </div>
      </form>
    </div>
                </div>
                
            </div>
        );
    }
}

export default ContactSection;
