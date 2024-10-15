import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;