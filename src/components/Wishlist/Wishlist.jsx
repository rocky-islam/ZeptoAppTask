 import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import WishlistItem from "./WishlistItem";



const Wishlist = () => {
     const {wishlist} = useContext(AuthContext);
    return (
        <div className="mx-6 my-6">
           <div>
           <p className="md:text-3xl font-semibold text-center ">Total Items of My Wishlist {wishlist.length}</p>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-8">
            {
                wishlist.map(wishlistItem => <WishlistItem
                key={wishlistItem.id}
                wishlistItem={wishlistItem}
                ></WishlistItem>)
            }
           </div>
           </div>
        </div>
    );
};

export default Wishlist;