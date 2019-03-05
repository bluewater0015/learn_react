import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// function Clock(props) {
//     return (
//         <div>
//             <h1>Helo,World!</h1>
//             <div>It is { props.date }</div>
//         </div>
//     )
// }
//
// function trick() {
//     ReactDOM.render(
//         <Clock date={ new Date().toLocaleTimeString() }/>,
//         document.getElementById('root')
//     );
// }
// setInterval(trick,1000);


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
