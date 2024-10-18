import { useContext, useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";
import { addToLS, getStoreWishlist, removeFromLS } from "../../utilities/localstorage";
import { AuthContext } from "../AuthProvider/AuthProvider";
//import { Fade } from "react-reveal";

const Book = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [genre, setGenre] = useState("all");
  const [isLoading, setIsLoading] = useState(true); //loading

  // //pagination
  const [currentPage, setCurrentPage] = useState(1);
  //const count = filteredBooks.length;
  // // console.log(count);
  const [itemsPerPage] = useState(10);
  //const numberOfPages = Math.ceil(count / itemsPerPage);
  const [totalPages, setTotalPages] = useState(1);
  const pages = [...Array(totalPages).keys()];
  

  //const [wishlist, setWishlist] = useState([]); // Wishlist state
  const {wishlist, setWishlist} = useContext(AuthContext)
  


  useEffect(() => {
    fetch(`https://gutendex.com/books/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data.results);
        // setItem(data.results);
        setFilteredBooks(data.results);
        setTotalPages(Math.ceil(data.results.length / itemsPerPage));
        setIsLoading(false);
        
      });
  }, [itemsPerPage, currentPage]);

  const search = (e) => {
    setFilteredBooks(
      filteredBooks.filter((f) =>
        f.title.toLowerCase().includes(e.target.value)
      )
    );
  };

  useEffect(() => {
    const firstItemIndex = currentPage * itemsPerPage;
    const lastItemIndex = firstItemIndex + itemsPerPage;
    setFilteredBooks(allBooks.slice(firstItemIndex, lastItemIndex));
    //setIsLoading(false)
  }, [currentPage, itemsPerPage, allBooks]);

  // Function to handle genre change and filter books
  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);

    if (selectedGenre === "all") {
      setFilteredBooks(
        allBooks.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      ); // Show all books if 'All Genres' is selected
    } else {
      // Filter books by selected genre
      const filtered = allBooks.filter((book) =>
        book.subjects.some((subject) => subject.includes(selectedGenre))
      );
      setFilteredBooks(
        filtered.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      );
      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    }
  };

  // const handlePageChange = (newPage) => {
  //   if (newPage > 0 && newPage <= totalPages) {
  //     setCurrentPage(newPage);
  //   }
  // };

  //wishlist
  const handleWishlist = (book) =>{
    const newWishlist = [...wishlist, book];
    setWishlist(newWishlist)
    addToLS(book.id)
  }

  const handleRemoveWishlist = id =>{
    const remainingWishlist = wishlist.filter(idx => idx.id !== id);
    setWishlist(remainingWishlist);
    removeFromLS(id);
  }

  useEffect(() =>{
    if(filteredBooks.length > 0){
      const storeWishlist = getStoreWishlist();
      console.log(storeWishlist);
      const saveWishlist = [];
      for(const id of storeWishlist){
        console.log(id);
        const filterBook = filteredBooks.find(filterBook => filterBook.id === id);
        if(filterBook){
          saveWishlist.push(filterBook)
        }
      }
      setWishlist(saveWishlist);
      console.log('wishlist', saveWishlist)
    }
  },[filteredBooks, setWishlist])

   // Check if a book is in the wishlist
   const isBookInWishlist = (bookId) => {
    return wishlist.some(item => item.id === bookId);
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
          <div>
            
          </div>
          {/* Filter */}
          <div className="flex justify-center items-center gap-2 my-8">
            <label htmlFor="genre">Filter by Genre: </label>
            <select
              id="genre"
              className="select select-info"
              value={genre}
              onChange={handleGenreChange}
            >
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center md:my-14">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((books) => (
                <SingleBook 
                  key={books.id} 
                  books={books}
                  handleWishlist={handleWishlist}
                  handleRemoveWishlist={handleRemoveWishlist}
                  isBookInWishlist={isBookInWishlist}
                ></SingleBook>
              ))
            ) : (
              <p>No books founds</p>
            )}
          </div>
          <div className="flex items-center justify-center gap-2 my-14">
            <button
              className={`btn btn-info`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage == 0}
            >
              Prev
            </button>

            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                className={`btn btn-info`}
                key={page}
              >
                {page + 1}
              </button>
            ))}

            <button
              className={`btn btn-info`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage == totalPages - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
