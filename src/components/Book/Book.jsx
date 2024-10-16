import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Book = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [genre, setGenre] = useState("all");
  const [isLoading, setIsLoading] = useState(true); //loading

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data.results);
        // setItem(data.results);
        setFilteredBooks(data.results);
        setIsLoading(false);
      });
  }, []);

  const search = (e) => {
    setFilteredBooks(
      filteredBooks.filter((f) =>
        f.title.toLowerCase().includes(e.target.value)
      )
    );
  };

  // Function to handle genre change and filter books
  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);

    if (selectedGenre === "all") {
      setFilteredBooks(allBooks); // Show all books if 'All Genres' is selected
    } else {
      // Filter books by selected genre
      const filtered = allBooks.filter((book) =>
        book.subjects.some((subject) => subject.includes(selectedGenre))
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center md:h-screen items-center flex-col">
          <span className="loading loading-spinner text-info lg:w-24"></span>
          <p className="text-lg font-semibold">Loading Please wait........</p>
        </div>
      ) : (
        <div className="px-6">
          <div className="mx-auto w-2/4 md:my-6">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Search Your Book Here </span>
              </div>
              <input
                onChange={search}
                type="text"
                placeholder="Type here"
                className="input input-bordered "
              />
            </label>
          </div>
          {/* Filter */}
          <div className="flex justify-center my-8">
            <label htmlFor="genre">Filter by Genre: </label>
            <select id="genre" value={genre} onChange={handleGenreChange}>
              <option value="all">All Genres</option>
              <option value="Fiction">Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Science">Science</option>
            </select>
          </div>
          {/* Filter */}
          <div>
            <h1 className="text-center md:text-2xl font-semibold">
              See Your {filteredBooks.length} Books
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-5 justify-items-center my-14">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((books) => (
                <SingleBook key={books.id} books={books}></SingleBook>
              ))
            ) : (
              <p>No books founds</p>
            )}
          </div>
          <div className="flex items-center justify-center gap-2 mb-24"></div>
        </div>
      )}
    </>
  );
};

export default Book;
