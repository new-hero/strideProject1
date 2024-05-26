import { useLoaderData } from "react-router-dom";
import Banner from "../Components/HomePageCom/Banner";
import ProductCard from "../Components/HomePageCom/ProductCard";
import Service from "../Components/HomePageCom/Service";
import Products from "./Products";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="text-center">
      <Banner />
      <Service />
      <Products products={products}/>
    </div>
  );
};

export default Home;
