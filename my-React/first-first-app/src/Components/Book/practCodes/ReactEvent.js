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
  const { img, Tiltles, Authors, children } = props;
  return (
    <article className="book">
      <img src={img} alt="Adult-Children" />
      <h2>{Tiltles}</h2>
      <h4>{Authors}</h4>
      {children} {/* To render the 'children' we declear it like this*/}
    </article>
  );
};

const BookCard = bookArray.map((book) => {
  return (
    <ABook
      key={book.id}
      img={book.imgSrc}
      Tiltles={book.title}
      Authors={book.author}
      children
    />
  );
});

const EventSample = () => {
  const handleFormInput = () => {
    console.log("Form input handled");
  };

  const handleButtonClick = () => {
    alert("Buttone Clicked");
  };
  return (
    <section>
      <form>
        <h2>My Form</h2>
        <input
          type="text"
          onChange={handleFormInput}
          name="example"
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <EventSample />
      {BookCard}
    </section>
  );
}

export default BookList;
