import React from "react";
import youtube from "../apis/youtube";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const response = await youtube.get("/search", {
      params: {
        q: this.state.term,
      },
    });
    this.props.onTermSubmit(response.data.items);
  };

  render() {
    return (
      <div className="search-bar ui segmant">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Videos Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
