import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useAuth();
  const [userInDb, setUserInDb] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setUserInDb(json));
  }, [user]);
  return (
    <div className="flex justify-between">
      <div className="text-2xl font-semibold capitalize">
        {userInDb?.img &&  <img className="h-[200px] w-[200px]" src={userInDb?.img} alt="" />}
       
        <p>Email:- {userInDb?.email}</p>
        {userInDb?.displayName && <p>displayName:- {userInDb?.displayName}</p>}
        {userInDb?.age && <p>age:- {userInDb?.age} Years</p>}
        {userInDb?.role && <p>Role:- {userInDb?.role}</p>}
        {userInDb?.description && <p>description:- <br /> {userInDb?.description}</p>}
      </div>
      <Link
        to={`/dashboard/editProfile/${userInDb?._id}`}
        className="btn btn-primary"
      >
        Edit Profile
      </Link>
    </div>
  );
};

export default DashboardHome;
