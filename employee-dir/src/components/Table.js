import React from "react";
import TableBody from "./TableBody";

const Table = (props) => {
  return (
    <div className="container-fluid">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <TableBody employees={props.employees} />
      </table>
    </div>
  );
};

export default Table;
