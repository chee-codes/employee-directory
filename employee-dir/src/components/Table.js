import React from "react";
import TableBody from "./TableBody";

const Table = (props) => {
  return (
    <div className="container-fluid">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th
              className="name-click"
              scope="col"
              onClick={props.handleFormSubmit}
            >
              Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Blank</th> */}
          </tr>
        </thead>
        <TableBody employees={props.employees} />
      </table>
    </div>
  );
};

export default Table;
