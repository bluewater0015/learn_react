import React,{ Component,Fragment } from 'react';
import { Button } from 'antd';

function ListItem({item}) {
    return (
        <Fragment>
            <li>{ item.name }</li>
            <li>{ item.age }</li>
        </Fragment>
    )
}

function CustomerTextInput(props) {
    return (
        <div>
            <input ref={ props.inputRef}/>
        </div>
    )
}
class Animal extends Component {
    render() {
        return (
            <div>
                hello,{ this.props.name }
            </div>
        )
    }
}

class Accessibility extends Component {
    constructor(props){
        super(props);
        this.createInput = React.createRef();
        this.inputElement = React.createRef();
        this.toggleContainer = React.createRef();
        console.log('this.toggleContainer',this.toggleContainer);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
        this.onBlurHandle = this.onBlurHandle.bind(this);
        this.onFocusHandle = this.onFocusHandle.bind(this);

        this.state = {
            isOpen: false,
        }
    }

    // componentDidMount() {
    //     window.addEventListener("click",this.onClickOutsideHandler);
    // }
    //
    // componentWillUnmount() {
    //     window.addEventListener("click",this.onClickOutsideHandler);
    // }


    handleClick() {
        this.createInput.focus();
    }

    handleClick1() {
        this.inputElement.current.focus();
    }

    ulClick() {
        this.setState(currentState=>({
            isOpen: !currentState.isOpen
        }))
    }

    onClickOutsideHandler(event) {
        console.log('event',this.toggleContainer);
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
           this.setState({isOpen: false})
        }
    }
    onBlurHandle() {
        console.log('onBlurHandle');
        this.timeOutId = setTimeout(()=>{
            this.setState({
                isOpen: false
            })
        })
    }

    onFocusHandle() {
        console.log('onFocusHandle');
        clearTimeout(this.timeOutId);
    }

    render() {
        let items = [
            {name: 'tianxia',age: 18},
            {name: 'xiaoxiao',age: 22 }
        ]
        return(
            <div>
                <div className='margin-bottom10'>
                    <input type='text' ref={(input)=> this.createInput = input}/>
                </div>

                <div className='margin-bottom10'>
                    <Button type='primary' onClick = { this.handleClick.bind(this) }>
                        点我输入框获取焦点
                    </Button>
                </div>

                <Animal name='猫咪'/>

                <ul>
                    {
                        items.map(item=>{
                            return (
                                <ListItem item={item} key={ item.age }/>
                            )
                        })
                    }
                </ul>

                <CustomerTextInput inputRef={ this.inputElement }/>
                <div className='margin-bottom10'>
                    <Button type='primary' onClick = { this.handleClick1.bind(this) }>点击</Button>
                </div>
                <div className='border background'
                     ref={ this.toggleContainer}
                     onBlur={ this.onBlurHandle }
                     onFocus={ this.onFocusHandle }
                >
                    <Button type='primary'
                            onClick={ this.ulClick.bind(this)}
                    >
                        Select an option
                    </Button>
                    { this.state.isOpen ?
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>:null
                    }

                </div>
            </div>
        )
    }
}

export default Accessibility;