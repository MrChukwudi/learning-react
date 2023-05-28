let imgSrc = "./imges/bookImg.jpg";
let title = "Adult Children of Emotionally Immature Parents";
let author = "Lindsay C. Gibson PsyD";

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
      <ABook img={imgSrc} Tiltles={title} Authors={author} />
      <ABook img={imgSrc} Tiltles={title} Authors={author} />
      <ABook img={imgSrc} Tiltles={title} Authors={author} />
      <ABook img={imgSrc} Tiltles={title} Authors={author} />
    </section>
  );
}

export default BookList;
