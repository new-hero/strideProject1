import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  const menu = (
    <>
      <NavLink className=" capitalize m-1" to="/">
        Home
      </NavLink>
      <NavLink className=" capitalize m-1" to="">
        Dashboard
      </NavLink>
      <NavLink className=" capitalize m-1" to="manageProducts">
        Products
      </NavLink>
      <NavLink className=" capitalize m-1" to="addProduct">
        Add Product
      </NavLink>
    </>
  );
  return (
    <div className="flex ">
      <div className="w-2/12 bg-slate-300 m-2 h-screen">
        <div className="flex flex-col gap-2">{menu}</div>
      </div>
      <div className="w-10/12">
        <div><Outlet/></div>
      </div>
    </div>
  );
};

export default UserLayout;
