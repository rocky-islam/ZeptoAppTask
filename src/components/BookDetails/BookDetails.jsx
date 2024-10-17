import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails.id);

  const { title, formats, authors, subjects, bookshelves } = bookDetails;

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`${formats['image/jpeg']}`}
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
              <strong>Authors:</strong> {authors[0].name} ({authors[0].birth_year} - {authors[0].death_year})
            </p>
            <p>
                <strong>Subject:</strong> {subjects[0]}
            </p>
            <p>
                <strong>Bookshelves:</strong> {bookshelves[0]}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
