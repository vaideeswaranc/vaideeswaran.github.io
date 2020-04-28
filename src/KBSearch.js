import React, { Component } from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import SearchInput from 'react-search-input';
import PropTypes from 'prop-types';

export default class IndentSearch extends Component {

  static propTypes = {
    onSearchUpdate: PropTypes.func.isRequired,
    value: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {
    value: ``
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value && this.state.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onSearchInputValue = (term) => {
    this.setState({ value: term });
    this.props.onSearchUpdate(term);
  }


  render() {
    return (
      <div className={"domain"} style={{ "width": "600px", "margin-right": "920px" }}>
        <SearchInput id="searchInput" value={this.state.value} className="search-input" onChange={this.onSearchInputValue} />
        <MagnifyIcon style={{ "margin-right": "65px" }} className="search-icon" />
      </div>
    );
  }

}