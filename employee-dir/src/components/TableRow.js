import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">
        <img alt="" src={props.image.medium} />
      </th>
      <td>
        {props.employee.first} {props.employee.last}
      </td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default TableRow;
