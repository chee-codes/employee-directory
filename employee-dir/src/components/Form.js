import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
