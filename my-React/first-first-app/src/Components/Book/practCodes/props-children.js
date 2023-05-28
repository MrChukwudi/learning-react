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

const ABook = ({ img, Tiltles, Authors, children }) => {
  //Destructuring in Function Parameters.
  return (
    <article className="book">
      <img src={img} alt="Adult-Children" />
      <h2>{Tiltles}</h2>
      <h4>{Authors}</h4>
      {children} {/* To render the 'children' we declear it like this*/}
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
      >
        {/* To pass Children value to be rendered in any component, we use openning and closing tags and push the children between them.*/}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          non ea omnis corrupti, minus minima.
        </p>
        <button>click me</button>
        {/* To pass Children value to be rendered in any component, we use openning and closing tags and push the children between them.*/}
      </ABook>
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
      >
        {/* To pass Children value to be rendered in any component, we use openning and closing tags and push the children between them.*/}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          non ea omnis corrupti, minus minima.
        </p>
        <button>click me</button>
        {/* To pass Children value to be rendered in any component, we use openning and closing tags and push the children between them.*/}
      </ABook>
    </section>
  );
}

export default BookList;
