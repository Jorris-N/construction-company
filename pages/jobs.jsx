import React, { Component } from 'react';
import Layout from '../components/constant/layout/layout';
import AboutSection from '../components/pages/JobsPage/aboutSection';
import BannerSection from '../components/pages/JobsPage/bannerSection';
import CareerSection from '../components/pages/JobsPage/careerSection';
import PerfomanceSection from '../components/pages/JobsPage/perfomanceSection';
import PurposeSection from '../components/pages/JobsPage/purposeSection';
import Quote from '../components/pages/JobsPage/quote';

class Jobs extends Component {

    componentDidMount(){
        document.title = "Jobs | Ndara B Materials Company"
      }
      
    render() {
        return (
            <div>
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* About Section */}
                    <AboutSection/>

                    {/* career Section */}
                    <CareerSection/>

                    {/* Performance Section */}
                    <PerfomanceSection/>

                    {/* purpose section */}
                    <PurposeSection/>

                    {/* Directors Quote */}
                    <Quote/>
                </Layout>
            </div>
        );
    }
}

export default Jobs;
