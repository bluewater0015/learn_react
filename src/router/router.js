import React,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import Home from './../container/Home/Home';
import JSX from './../container/Jsx/Jsx';
import Element from './../container/Element/Element';
import NewLifeCycle from './../container/NewLiftCycle/NewLiftCycle';
import Props from './../container/Props/Props';
import State from './../container/States/States';
import DealEvent from './../container/DealEvent/DealEvent';
import Render from './../container/Render/Render';
import Apply from './../test/Apply/Apply';
import Lists from './../container/Lists/Lists';
import Forms from './../container/Forms/Forms';

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/jsx'>Jsx</Link></li>
                        <li><Link to='/element'>Element</Link></li>
                        <li><Link to='/newLifeCycle'>NewLifeCycle</Link></li>
                        <li><Link to='/props'>Props</Link></li>
                        <li><Link to='/state'>State</Link></li>
                        <li><Link to='/dealEvent'>DealEvent</Link></li>
                        <li><Link to='/render'>Render</Link></li>
                        <li><Link to='/apply'>Apply</Link></li>
                        <li><Link to='/lists'>Lists</Link></li>
                        <li><Link to='/forms'>Forms</Link></li>
                    </ul>
                    <div>
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
                    </div>
                </div>
            </Router>
        )
    }
}

export default RouterMap;
