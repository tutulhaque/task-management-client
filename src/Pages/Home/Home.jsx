// import { useContext, useState } from "react";
// import { AuthContext } from "../../Component/Providers/AuthProvider";
import Banner from "../../Component/Header/Banner";
import Testimonial from "./Testimonial";
import HomeOffer from "./HomeOffer";
import Users from "./Users";

const Home = () => {
    // const authInfo = useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            <HomeOffer></HomeOffer>
            <Users></Users>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;