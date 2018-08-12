import React, { Component } from 'react';
import { connect } from 'react-redux';
import addData from '../../actions/index';
import logo from './logo.svg';
import './App.css';

import Dropdown from '../Dropdown/Dropdown';

const mapDispatchToProps = dispatch => ({
  addData: payload => dispatch(addData(payload)),
});

class ConnectedApp extends Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
      showBtn: true,
    };
  }

  handleClick = e => {
    fetch('http://localhost:3002/api/response.json')
      .then(res => res.json())
      .then(data => {
        this.props.addData(data.payload);
        this.setState({ showDropdown: true, showBtn: false });
      })
      .catch(err => console.error(err));
  };

  render() {
    const { showBtn, showDropdown } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React / Redux Sample</h1>
        </header>
        <div>
          {showBtn && (
            <button className="button" onClick={this.handleClick}>
              Click me
            </button>
          )}
          {showDropdown && <Dropdown />}
        </div>
      </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
