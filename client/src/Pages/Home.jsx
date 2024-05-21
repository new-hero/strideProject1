import Banner from "../Components/HomePagesCom/Banner";
import Card from "../Components/HomePagesCom/Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="flex gap-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
