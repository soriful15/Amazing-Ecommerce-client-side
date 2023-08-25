import React from 'react';
import Banner from '../Banner/Banner';
import CustomerSay from '../CustomerSay/CustomerSay';
import AddPostBox from '../AddPostBox/AddPostBox';
import SpecialOffers from '../SpecialOffers/SpecialOffers';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <CustomerSay></CustomerSay>
            <AddPostBox></AddPostBox>
        </>
    );
};

export default Home;