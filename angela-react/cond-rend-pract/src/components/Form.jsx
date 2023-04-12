import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      <button type="submit">{props.IsRegistered ? "Register" : "Login"}</button>
    </form>
  );
}

export default Form;
