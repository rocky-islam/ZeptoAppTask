 import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Wishlist = () => {
     const {wishlist} = useContext(AuthContext);
    return (
        <div className="mx-6">
            <p className="text-3xl font-semibold text-center">Total Items of My Wishlist {wishlist.length}</p>
            <p>{wishlist.length}</p>
        </div>
    );
};

export default Wishlist;