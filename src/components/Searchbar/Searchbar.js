import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    request: "",
  };

  handleChange = (event) => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.request.trim() === "") {
      return toast.info("Type something to find a picture");
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: "" });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={handleChange}
            type="text"
            name="request"
            value={this.state.request}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
