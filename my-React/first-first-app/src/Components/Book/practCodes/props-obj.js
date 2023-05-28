const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts about Curios minds",
  imgSrc:
    "https://m.media-amazon.com/images/I/51wuXTvVORL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  imgSrc:
    "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
};
const thirdBook = {
  author: "Lindsay C. Gibson PsyD",
  title: "Adult Children of Emotionally Immature Parents",
  imgSrc: "./imges/bookImg.jpg",
};

const ABook = (props) => {
  // console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="Adult-Children" />
      <h2>{props.Tiltles}</h2>
      <h4>{props.Authors}</h4>
    </article>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <ABook
        img={firstBook.imgSrc}
        Tiltles={firstBook.title}
        Authors={firstBook.author}
      />
      <ABook
        img={secondBook.imgSrc}
        Tiltles={secondBook.title}
        Authors={secondBook.author}
      />
      <ABook
        img={thirdBook.imgSrc}
        Tiltles={thirdBook.title}
        Authors={thirdBook.author}
      />
      <ABook
        img={thirdBook.imgSrc}
        Tiltles={thirdBook.title}
        Authors={thirdBook.author}
      />
    </section>
  );
}

export default BookList;
