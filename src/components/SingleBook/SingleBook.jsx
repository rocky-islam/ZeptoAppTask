const SingleBook = ({ books }) => {
  const { id, title, formats } = books;
//   const {name} = books.authors[0];
//   console.log(books.authors[0].name)
  return (
    <div>
      <div className="card bg-base-100 w-96 h-[560px] shadow-xl">
        <figure>
          <img
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
