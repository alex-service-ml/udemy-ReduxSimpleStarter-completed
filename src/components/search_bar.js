import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props) {
    super(props);

    this.state = {term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    if (term){
      this.props.onSearchTermChange(term);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} //makes this a controlled component
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
