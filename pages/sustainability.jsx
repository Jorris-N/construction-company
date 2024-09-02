import React, { Component } from 'react';
import Layout from '../components/constant/layout/layout';
import AboutSection from '../components/pages/SustainabilityPage/aboutSection';
import BannerSection from '../components/pages/SustainabilityPage/bannerSection';

class Sustainability extends Component {

    componentDidMount(){
        document.title = "Sustainability | Ndara B Materials Company"
      }
      
    render() {
        return (
            <>
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* About Section */}
                    <AboutSection/>    
                </Layout>
            </>
        );
    }
}

export default Sustainability;
