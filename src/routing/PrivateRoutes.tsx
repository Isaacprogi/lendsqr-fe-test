import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";

const PrivateRoutes = ({ auth}:{auth:boolean}) => {
  return auth ? (
    <>
      <NavBar />
      <div className="body-section">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="main-content">
          <div className="outlet-section">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
