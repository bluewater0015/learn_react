import './router.css';
import React,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from 'react-router-dom';

import Home from './../container/Home/Home';
import JSX from './../container/Jsx/Jsx';
import Element from './../container/Element/Element';
import NewLifeCycle from './../container/NewLiftCycle/NewLiftCycle';
import Props from './../container/Props/Props';
import State from './../container/States/States';
import DealEvent from './../container/DealEvent/DealEvent';
import Render from './../container/Render/Render';
import Lists from './../container/Lists/Lists';
import Forms from './../container/Forms/Forms';
import StatePromote from '../container/StatePromote/StatePromote';
import Composition from './../container/Composition/Composition';
import Accessibility from './../container/Accessibility/Accessibility';
import Hoc from './../container/Hoc/Hoc';
import CodeSplit from './../container/CodeSplit/CodeSplit';
import Context from './../container/Context/Context';
import NoFound from './../container/NoFound/NoFound';

import Apply from './../test/Apply/Apply';
import SonFather from './../test/SonFather/SonFather';
import MapArr from './../test/MapArr/MapArr';
import Objects from './../test/Object/Object';
import MergedArray from './../test/MergedArray/MergedArray';
import Inherit from "../test/Inherit/Inherit";
import Inherit1 from "../test/Inherit1/Inherit1";
import CreateObj from '../test/CreateObj/CreateObj';


//ES6
import Promises from './../ES6/Promises/Promises';


const selectedStyle = {
    backgroundColor: '#00c4b4',
    color: 'white'
}

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <div className='box'>
                    <ul className='silde'>
                        <li><NavLink className='navlink' to='/'>Home</NavLink></li>
                        <li><NavLink className='navlink' to='/jsx'activeStyle={selectedStyle}>Jsx</NavLink></li>
                        <li><NavLink className='navlink' to='/element' activeStyle={selectedStyle}>Element</NavLink></li>
                        <li><NavLink className='navlink' to='/newLifeCycle' activeStyle={selectedStyle}>NewLifeCycle</NavLink></li>
                        <li><NavLink className='navlink' to='/props' activeStyle={selectedStyle}>Props</NavLink></li>
                        <li><NavLink className='navlink' to='/state' activeStyle={selectedStyle}>State</NavLink></li>
                        <li><NavLink className='navlink' to='/dealEvent' activeStyle={selectedStyle}>DealEvent</NavLink></li>
                        <li><NavLink className='navlink' to='/render' activeStyle={selectedStyle}>Render</NavLink></li>
                        <li><NavLink className='navlink' to='/apply' activeStyle={selectedStyle}>Apply</NavLink></li>
                        <li><NavLink className='navlink' to='/lists' activeStyle={selectedStyle}>Lists</NavLink></li>
                        <li><NavLink className='navlink' to='/forms' activeStyle={selectedStyle}>Forms</NavLink></li>
                        <li><NavLink className='navlink' to='/sonFather' activeStyle={selectedStyle}>SonFather</NavLink></li>
                        <li><NavLink className='navlink' to='/statePromote' activeStyle={selectedStyle}>StatePromote</NavLink></li>
                        <li><NavLink className='navlink' to='/composition' activeStyle={selectedStyle}>Composition</NavLink></li>
                        <li><NavLink className='navlink' to='/mapArr' activeStyle={selectedStyle}>MapArr</NavLink></li>
                        <li><NavLink className='navlink' to='/accessibility' activeStyle={selectedStyle}>Accessibility</NavLink></li>
                        <li><NavLink className='navlink' to='/hoc' activeStyle={selectedStyle}>Hoc</NavLink></li>
                        <li><NavLink className='navlink' to='/codeSplit' activeStyle={selectedStyle}>CodeSplit</NavLink></li>
                        <li><NavLink className='navlink' to='/context' activeStyle={selectedStyle}>Context</NavLink></li>
                        <li><NavLink className='navlink' to='/objects' activeStyle={selectedStyle}>Objects</NavLink></li>
                        <li><NavLink className='navlink' to='/promises' activeStyle={selectedStyle}>Promises</NavLink></li>
                        <li><NavLink className='navlink' to='/mergedArray' activeStyle={selectedStyle}>MergedArray</NavLink></li>
                        <li><NavLink className='navlink' to='/inherit' activeStyle={selectedStyle}>Inherit</NavLink></li>
                        <li><NavLink className='navlink' to='/inherit1' activeStyle={selectedStyle}>Inherit1</NavLink></li>
                        <li><NavLink className='navlink' to='/createObj' activeStyle={selectedStyle}>CreateObj</NavLink></li>
                    </ul>
                    <div className='flex1 padding20'>
                        <Switch>
                            <Route exact path='/' component={ Home } />
                            <Route path='/jsx' component={ JSX }/>
                            <Route path='/element' component={ Element }/>
                            <Route path='/newLifeCycle' component={ NewLifeCycle }/>
                            <Route path='/props' component={ Props }/>
                            <Route path='/state' component={ State }/>
                            <Route path='/dealEvent' component={ DealEvent }/>
                            <Route path='/render' component={ Render } />
                            <Route path='/apply' component={ Apply }/>
                            <Route path='/lists' component={ Lists }/>
                            <Route path='/forms' component={ Forms }/>
                            <Route path='/sonFather' component={ SonFather }/>
                            <Route path='/statePromote' component={ StatePromote }/>
                            <Route path='/composition' component={ Composition }/>
                            <Route path='/mapArr' component={ MapArr }/>
                            <Route path='/accessibility' component={ Accessibility }/>
                            <Route path='/hoc' component={ Hoc }/>
                            <Route path='/codeSplit' component={ CodeSplit }/>
                            <Route path='/context' component={Context}/>
                            <Route path='/objects' component={Objects}/>
                            <Route path='/promises' component={Promises}/>
                            <Route path='/mergedArray' component={MergedArray}/>
                            <Route path='/inherit' component={Inherit}/>
                            <Route path='/inherit1' component={Inherit1}/>
                            <Route path='/createObj' component={CreateObj}/>
                            <Route component={ NoFound }/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default RouterMap;
