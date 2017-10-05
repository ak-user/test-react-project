import React, { Component } from 'react';
import App_wrapper from './App_wrapper';
import App_footer from "./App_footer";
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="react-wrapper">
                <App_wrapper/>
                <App_footer/>
            </div>
        );
    }
}

