import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import Job from "./Jobs";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
      {/* <Job /> */}
    </div>
  );
};

export default Home;
