import React, { Component } from 'react';
import Layout from '../components/constant/layout/layout';
import AboutSection from '../components/pages/PartnersPage/aboutSection';
import PartnersGrid from '../components/pages/PartnersPage/partnerSection';

class Partners extends Component {

    componentDidMount(){
        document.title = "Our Partners | Ndara B Materials Company"
      }
      
    render() {
        return (
            <div>
                <Layout>
                    <div className="w-full pb-32 pt-20">
                    {/* About Section */}
                    <AboutSection/>

                    {/* Our Patners */}
                    <PartnersGrid/>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Partners;
