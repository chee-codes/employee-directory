import React from "react";
import TableRow from "./TableRow";

const TableBody = (props) => {
  return (
    <tbody>
      {props.employees.map((employee) => (
        <TableRow employee={employee} />
      ))}
    </tbody>
  );
};

export default TableBody;
