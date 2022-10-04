import React from "react";
import { connect } from "react-redux";
import { getVideogames, searchByName } from "../../actions/index";
import s from "./searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handlename = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.searchByName(this.state.name);
  };
  showAll = (e) => {
    e.preventDefault();
    this.props.getVideogames();
  };
  render() {
    return (
      <div className={s.searchBarContainer}>
        <form>
          <input
            name="name"
            placeholder="Search game..."
            onChange={(e) => this.handlename(e)}
            value={this.state.name}
            autoComplete="off"
          />
          <button
            type="submit"
            className={s.searchButton}
            onClick={(e) => this.handleSearch(e)}
          >
            <AiOutlineSearch />
          </button>
          <button className={s.searchButton} onClick={(e) => this.showAll(e)}>
            Show all games
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { getVideogames, searchByName })(SearchBar);
