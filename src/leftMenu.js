import React, { Component } from 'react';
import './App.css'

class LeftMenu extends React.Component {
    render() {
        return (
            <div className="App-left">
                <div onClick={() => { this.props.selectedMenu("dashboard") }}>
                    Dashboard
            </div>

                <div onClick={() => { this.props.selectedMenu("contextMenu") }}>
                    Context Menu
            </div>

                <div onClick={() => { this.props.selectedMenu("table") }}>
                    Table
            </div>

            </div>
        )
    }
}

export default LeftMenu;
