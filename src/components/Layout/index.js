import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-11">
                    <Outlet />
                </div>
                <div className="col-1 nav-holder">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
  };
  
  export default Layout;