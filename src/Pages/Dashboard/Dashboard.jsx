import { useContext } from "react";
import { FaBook, FaHome, FaList, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Component/Providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-black">

                <div className="ml-5 flex gap-3 items-center py-3">
                    {/* <img className="w-10 rounded-full" alt="Tailwind CSS Navbar component" src="" /> */}
                    <p className="text-white"></p>
                </div>

                <ul className="menu p-4 text-white text-lg">
                    {
                        <>
                            <li>
                                <NavLink to="/dashboard/add-task">
                                    <FaBook></FaBook>
                                    Add A Task</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/do-list">
                                    <FaList></FaList>
                                    To-do List</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/my-profile">
                                    <FaUser></FaUser>
                                    My Profile</NavLink>
                            </li> */}
                        </>
                    }
                    
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Return To Home</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;