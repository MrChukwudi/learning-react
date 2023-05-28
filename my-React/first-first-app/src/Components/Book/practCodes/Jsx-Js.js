
//Basically this is dedicated to explainning how JSX codes works with vanila JS codes ising {}, and only how it takes expressions alone and never statements.

const ABook = () => {
  let imgSrc = "./imges/bookImg.jpg";
  let title = "Adult Children of Emotionally Immature Parents";
  return (
    <article className="book">
      <img src={imgSrc} alt="Adult-Children" />
      <h2>{title.toUpperCase()}</h2>
      <h4>Lindsay C. Gibson PsyD</h4>
    </article>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <ABook />
      <ABook />
      <ABook />
      <ABook />
    </section>
  )};


