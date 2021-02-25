import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import API from "../utils/API";

class ResultsContainer extends Component {
  state = {
    result: [],
    employees: [],
    direction: "ascending",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res.data);
        this.setState({ employees: res.data.results });
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    const filtered = this.state.employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(value.toLowerCase()) == 0
    );
    this.setState({
      [name]: value,
      result: filtered,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const sorted = this.state.results.sort((a, b) => {
      if (this.state.direction === "ascending") {
        this.setState({ direction: "descending" });
        return a.name.first < b.name.first ? 1 : -1;
      } else if (this.state.direction === "descending") {
        this.setState({ direction: "ascending" });
        return a.name.first > b.name.first ? 1 : -1;
      }
    });
    this.setState({ result: sorted });
  };

  render() {
    return (
      <>
        <Form />
        <Table employees={this.state.employees} />
      </>
    );
  }
}
export default ResultsContainer;
