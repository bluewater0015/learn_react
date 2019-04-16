import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RouterMap from "./router/router";
import MainMenu from './Menus/Menus';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <RouterMap />
                {/*<div className='width200' style={{ height: '100vh',background: '#f7f7f7'}}>*/}
                    {/*<MainMenu></MainMenu>*/}
                {/*</div>*/}
                {/*<section className='flex1' style={{ height: '100vh',background: '#f99'}}>*/}
                    {/*<h1>企业大事件</h1>*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default App;
