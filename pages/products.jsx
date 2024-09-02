import React, { Component } from 'react';
import Layout from '../components/constant/layout/layout';
import AboutSector from '../components/pages/ProductsPage/aboutSection';
import BannerSection from '../components/pages/ProductsPage/bannerSection';
import ProductSection from '../components/pages/ProductsPage/productSection';
import Projectinfo from '../components/pages/ProductsPage/projectinfo';

class Products extends Component {

    componentDidMount(){
        document.title = "Our Products | Ndara B Materials Company"
      }
      
    render() {
        return (
            <div>
                <Layout>
                    {/* Banner Section */}
                    <BannerSection/>

                    {/* About Section */}
                    <AboutSector/>

                    {/* Products Sector */}
                    <ProductSection/>

                    {/* Project Information */}
                    <Projectinfo/>
                </Layout>
            </div>
        );
    }
}

export default Products;
