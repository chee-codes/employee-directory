import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import API from "../utils/API";

class ResultsContainer extends Component {
  state = {
    search: "",
    result: [],
    employees: [],
  };

  componentDidMount() {
    API.search()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Form />
        <Table />
      </>
    );
  }
}
export default ResultsContainer;
