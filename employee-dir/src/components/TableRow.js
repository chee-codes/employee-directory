import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{props.image}/</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );
};

export default TableRow;
