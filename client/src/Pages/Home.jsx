import { useLoaderData } from "react-router-dom";
import Banner from "../Components/HomePageCom/Banner";
import Service from "../Components/HomePageCom/Service";
import Products from "./Products";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="text-center">
      <Banner />
      <Service />
      <Products products={products.slice(0, 3)}/>
    </div>
  );
};

export default Home;
