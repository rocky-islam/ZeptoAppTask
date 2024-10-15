import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Book = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [item, setItem] = useState(allBooks)

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data.results);
        setItem(data.results);
      });
  }, []);


  const search = e =>{
    setItem(allBooks.filter(f => f.title.toLowerCase().includes(e.target.value)))
}

  // console.log(allBooks);

  return (
    <div className="px-6">
      <h1>this is book page {allBooks.length}</h1>
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
        <h1 className="text-center md:text-2xl font-semibold">
          See Your {item.length} Books 
        </h1>
      </div>
      <div className="grid md:grid-cols-4 gap-5 justify-items-center my-14">
        {item.map((books) => (
          <SingleBook
          key={books.id}
          books={books}
          ></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Book;
