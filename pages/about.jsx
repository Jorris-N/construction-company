import React, { Component } from 'react';
import Layout from '../components/constant/layout/layout';
import AboutSection from '../components/pages/AboutPage/aboutSection';
import AchievementSection from '../components/pages/AboutPage/achievementSection';
import BannerSection from '../components/pages/AboutPage/bannerSection';
import BoardSection from '../components/pages/AboutPage/board';
import CultureSection from '../components/pages/AboutPage/cultureSection';
import HistorySection from '../components/pages/AboutPage/history';
import OurPartners from '../components/pages/AboutPage/ourPartners';
import BoardDirectors from '../components/pages/HomePage/boardSection';
import CareerSection from '../components/pages/HomePage/careerSection';

class About extends Component {

    componentDidMount(){
        document.title = "About Us | Ndara B Materials Company"
      }
      
    render() {
        return (
            <div className="bg-white">
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* About Section */}
                    <AboutSection/>

                    {/* Board Section */}
                    <BoardDirectors/>

                    {/* Culture Section */}
                    <CultureSection/>

                    {/* Career Section */}
                    <CareerSection/>

                    {/* Our Achievements */}
                    <AchievementSection/>

                    {/* Partners */}
                    <OurPartners/>

                    {/* Board */}
                    <BoardSection/>

                    {/* History */}
                    <HistorySection/>
                </Layout>
            </div>
        );
    }
}

export default About;
