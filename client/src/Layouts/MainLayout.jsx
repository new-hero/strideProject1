import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between relative m-auto max-w-5xl">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
