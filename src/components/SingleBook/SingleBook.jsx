import { Link } from "react-router-dom";

const SingleBook = ({ books }) => {
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
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
            <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleBook;
