import React, { Component } from "react";
import Nav from "./Nav";
import Form from "./Form";
import Table from "./Table";
import API from "../utils/API";

class ResultsContainer extends Component {
  state = {
    search: "",
    result: [],
    employees: [],
    direction: "ascending",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        //* console.log(res.data);
        this.setState({ employees: res.data.results });
        this.setState({ result: this.state.employees });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    const filtered = this.state.employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(value.toLowerCase()) === 0
    );
    this.setState({
      [name]: value,
      result: filtered,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let sorted = this.state.result.sort((a, b) => {
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
        <Nav />
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table
          employees={this.state.result}
          handleFormSubmit={this.handleFormSubmit}
        />
      </>
    );
  }
}
export default ResultsContainer;
