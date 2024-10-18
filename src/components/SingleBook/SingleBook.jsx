import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBook = ({ books, handleWishlist, handleRemoveWishlist, isBookInWishlist }) => {
  const { id, title, formats } = books;
//   const {name} = books.authors[0];
//   console.log(books.authors[0].name)
  return (
    <div>
      <div className="card bg-base-100 md:w-96 md:h-[560px] shadow-xl border">
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
          <p><strong>Authors:</strong> {books.authors[0]?.name || 'No Name'}</p>
          <p><strong>Genre: </strong>{books.subjects?.[0] || 'Unknown'}</p>
          <div className="card-actions justify-between items-center">
            {
              isBookInWishlist(id) ? <button onClick={() => handleRemoveWishlist(id)} className="btn btn-warning">Remove</button> 
              :
              <button onClick={() => handleWishlist(books)} className="btn btn-info">Wishlist</button> 
            }
            <div>
              {
                isBookInWishlist(id) ? <p><FaHeart size={30} className="text-red-600"></FaHeart></p> : <p><FaRegHeart size={30} /></p>
              }
            
            </div>
            <Link to={`/details/${id}`}>
            <button className="btn btn-info">See Details</button>
            </Link>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleBook;
