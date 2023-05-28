import React from "react";
import "./book.css";

const Image = () => <img src="./imges/bookImg.jpg" alt="Adult-Children" />;
const Title = () => {
  return <h2>Adult Children of Emotionally Immature Parents</h2>;
};
const Author = () => {
  const myHeadingStyle = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return (
    <>
      <h4 style={myHeadingStyle}>Lindsay C. Gibson PsyD</h4>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        Lindsay C. Gibson PsyD
      </h4>
    </>
  );
};

const ABook = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
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
  );
}

export default BookList;
