import React,{ Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please sign in</h1>
}

function Greeting(props) {
    let isToggleIn = props.isToggleIn;
    if(isToggleIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

function LoginButton(props) {
   return (
       <button onClick={ props.onClick }>
            Login
       </button>
   )
}

function LogoutButton(props) {
    return (
        <button onClick={ props.onClick }>
            Logout
        </button>
    )
}

function MessageMail(props) {
    return <div>
        <h1>Hello</h1>
        {
            props.message.length > 0  && <h2>You have { props.message.length } unread.</h2>
        }
    </div>
}

// class Render extends Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {
//             isToggleIn: false,
//         }
//     }
//
//     handleLoginClick() {
//         this.setState({
//             isToggleIn: true,
//         })
//     }
//
//     handleLogoutClick() {
//         this.setState({
//             isToggleIn: false,
//         })
//     }
//
//
//
//     render() {
//         const isToggleIn = this.state.isToggleIn;
//         let button;
//
//         // if(isToggleIn) {
//         //     //登陆成功
//         //     button =  <LogoutButton onClick={ this.handleLogoutClick }/>
//         // }else {
//         //     button =  <LoginButton onClick={ this.handleLoginClick }/>
//         // }
//
//         {
//             isToggleIn ?  button =  <LogoutButton onClick={ this.handleLogoutClick }/>:
//                 button =  <LoginButton onClick={ this.handleLoginClick }/>
//         }
//
//         let message = ['react','angular','vue'];
//
//         return (
//             <div>
//                 <Greeting isToggleIn={ isToggleIn }/>
//                 { button }
//                 <div>
//                     <MessageMail message={ message }/>
//                 </div>
//             </div>
//         )
//     }
// }

function Warning(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div>Warning!</div>
    )
}

class Render extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isShowWarn: false,
        }
    }

    handleClick=()=> {
        //preState 上一次的state
        this.setState(preState=>({
            isShowWarn: !preState.isShowWarn,
        }))
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleClick }>
                    { this.state.isShowWarn ? 'Show':'Hide'}
                </button>
                <Warning warn={ this.state.isShowWarn }/>
            </div>
        )
    }
}

export default Render;