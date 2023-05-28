import React from "react";

const Greeting = () => {
  return <div>
    <Person />
    <Message />
  </div>;
};

const Person = () => <h1>My Name is John Doe</h1>;
const Message = () => <p>This is my Message</p>;

export default Greeting;
