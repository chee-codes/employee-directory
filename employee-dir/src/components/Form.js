import React from "react";
import style from "./style.css";

const Form = (props) => {
  return (
    <div className="container">
      <form className="">
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            type="text"
            className="form-control mx-auto"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
