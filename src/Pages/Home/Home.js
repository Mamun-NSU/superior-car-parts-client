import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <h2 className="text-primary text-center mt-5">This is Home</h2>
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
