import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { removeFromLS } from "../../utilities/localstorage";
import { useContext } from "react";


const WishlistItem = ({wishlistItem}) => {
    const { id, title, formats } = wishlistItem;
    console.log(wishlistItem)
    const {wishlist, setWishlist} = useContext(AuthContext);

    const handleRemoveWishlist = id =>{
        const remainingWishlist = wishlist.filter(idx => idx.id !== id);
        setWishlist(remainingWishlist);
        removeFromLS(id);
      }


    return (
        <div>
            <div className="card bg-base-100 w-96 md:w-80 xl:w-96 md:h-[560px] shadow-xl border">
        <figure>
          <img
          className=""
            src={`${formats['image/jpeg']}`}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p><strong>Book Id:</strong> {id}</p>
          <p><strong>Authors:</strong> {wishlistItem.authors[0]?.name || 'No Name'}</p>
          <p><strong>Genre: </strong>{wishlistItem.subjects?.[0] || 'Unknown'}</p>
          <div className="card-actions justify-between items-center">
            <Link to={`/details/${id}`}>
            <button className="btn btn-info">See Details</button>
            </Link>
            <button onClick={() => handleRemoveWishlist(id)} className="btn btn-warning">Remove</button> 
              
          </div>
        </div>
      </div>
        </div>
    );
};

export default WishlistItem;