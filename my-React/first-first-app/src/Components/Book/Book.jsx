import React from "react";
import "./book.css";
import { logRoles } from "@testing-library/react";

const bookArray = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "Interesting Facts about Curios minds",
    imgSrc:
      "https://m.media-amazon.com/images/I/51wuXTvVORL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    imgSrc:
      "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    author: "Lindsay C. Gibson PsyD",
    title: "Adult Children of Emotionally Immature Parents",
    imgSrc: "./imges/bookImg.jpg",
  },
];



const ABook = (props) => {
  //Destructuring in Function Parameters.
  const { img, Tiltles, Authors, getBook, id } = props;
  // const booker = () => {
  //   getBook(id);
  // };

  return (
    <article className="book">
      <img src={img} alt="Adult-Children" />
      <h2>{Tiltles}</h2>
      <button onClick={() => getBook(id)}>Click Me</button>
      <h4>{Authors}</h4>
    </article>
  );
};


function BookList() {
  const getBook = (clickedId) => {
    const book = bookArray.find((item) => item.id === clickedId);
    console.log(book);
  };
  return (
    <section className="booklist">
      {bookArray.map((book) => {
        return (
          <ABook
            key={book.id}
            id={book.id}
            img={book.imgSrc}
            Tiltles={book.title}
            Authors={book.author}
            getBook={getBook}
          />
        );
      })}
    </section>
  );
}

// const BookCard = bookArray.map((book) => {
//   return (
//     <ABook
//       key={book.id}
//       img={book.imgSrc}
//       Tiltles={book.title}
//       Authors={book.author}
//       children
//     />
//   );
// });

export default BookList;
