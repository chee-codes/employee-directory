import React from "react";
import TableRow from "./TableRow";

const TableBody = (props) => {
  return (
    <tbody>
      {props.employees.map((employee) => (
        <TableRow
          key={employee.index}
          employee={employee.name}
          phone={employee.phone}
          email={employee.email}
          image={employee.picture}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
