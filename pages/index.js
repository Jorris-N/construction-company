import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout/layout'
import AboutSection from '../components/pages/HomePage/aboutSection';
import BannerSection from '../components/pages/HomePage/bannerSection';
import BoardDirectors from '../components/pages/HomePage/boardSection';
import CareerSection from '../components/pages/HomePage/careerSection';
import InfoSection from '../components/pages/HomePage/infoSection';
import NewsSection from '../components/pages/HomePage/newsSection';
import ParallaxSection from '../components/pages/HomePage/parallaxSection';
import WhySection from '../components/pages/HomePage/whySection';


export default function Home() {

  useEffect(() => {
    document.title = "Welcome | Ndara B Materials Company";
  }, [] );

  return (
    <div className='bg-white'>
    <Layout>
      {/* Bannner Section */}
      <BannerSection/>

      {/* about section */}
      <AboutSection/>

      {/* News Section */}
      <NewsSection/>
      
      {/* Parallax section */}
      <ParallaxSection/>

      {/* Year's Progress and results */}
      <InfoSection/>

      {/* Board of Directors */}
      <BoardDirectors/>

      {/* Why Us  Section */}
      <WhySection/>

      {/* Career Section */}
      <CareerSection/>
   
    </Layout>
    </div>
  )
}
