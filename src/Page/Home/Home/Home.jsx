import React from 'react';
import Banner from '../Banner/Banner';
import CustomerSay from '../CustomerSay/CustomerSay';
import AddPostBox from '../AddPostBox/AddPostBox';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
        <Helmet>
                <title>Amazing Ecommerce | Home Page</title>
            </Helmet>
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <CustomerSay></CustomerSay>
            <AddPostBox></AddPostBox>
        </>
    );
};

export default Home;