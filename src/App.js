import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './leftMenu'
import AppPreview from './appPreview';


class App extends React.Component {

  state: StateType = {
    selectedItem: "dashboard"
  }

  selectedMenu = (curItem) => {
    this.setState({ selectedItem: curItem })
  }

  render() {
    return (
      <div className="App" >
        <LeftMenu
          selectedMenu={this.selectedMenu} />
        <div className="App-right">
          <AppPreview
            selectedItem={this.state.selectedItem}  />
        </div>
      </div>
    );
  }
}

export default App;
