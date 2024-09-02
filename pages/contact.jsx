import React, { Component, useEffect } from 'react';
import Layout from '../components/constant/layout/layout';
import BannerSection from '../components/pages/contactPage/bannerSection';
import ContactSection from '../components/pages/contactPage/contactSection';

class Contact extends Component {
    componentDidMount(){
        document.title = "Contact Us | Ndara B Materials Company"
      }

    render() {
        return (
            <div>
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* contact section */}
                    <ContactSection/>
                </Layout>
            </div>
        );
    }
}

export default Contact;
