import About from "../Components/HomePagesCom/About";
import Banner from "../Components/HomePagesCom/Banner";
import Blog from "../Components/HomePagesCom/Blog";
import Card from "../Components/HomePagesCom/Card";
import Doctors from "../Components/HomePagesCom/Doctors";
import Offers from "../Components/HomePagesCom/Offers";
import Service from "../Components/HomePagesCom/Service";
import SpecialOffer from "../Components/HomePagesCom/SpecialOffer";
import TestCategory from "../Components/HomePagesCom/TestCategory";
import Testimonial from "../Components/HomePagesCom/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <TestCategory />
      <About />
      <Offers />
      <Service />
      <Doctors />
      <Testimonial />
      <SpecialOffer />
      <Blog />
    </div>
  );
};

export default Home;
