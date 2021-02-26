import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={props.search}
            onChange={props.handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
