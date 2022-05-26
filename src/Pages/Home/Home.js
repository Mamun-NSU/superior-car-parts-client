import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Carousol from "./Carousol";
import Parts from "./Parts";
import Reviews from "./Reviews";
import SpecialOffer from "./SpecialOffer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <SpecialOffer></SpecialOffer>
      <Carousol></Carousol>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
