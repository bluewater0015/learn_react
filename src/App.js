import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RouterMap from "./router/router";

class App extends Component {
    render() {
        return (
            <div className='app'>
                <RouterMap />
            </div>
        );
    }
}

export default App;
