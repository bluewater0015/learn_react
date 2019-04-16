import React,{ Component } from 'react';
import { Button } from 'antd';

const ThemeContext = React.createContext('primary');

function ToolBar(props) {
    return(
        <ThemeButton/>
    )
}
class ThemeButton extends  Component {
    static conTextType = ThemeContext;
    render() {
        console.log('this.context',this.context);
        return (
            <Button type={ this.context }>点击</Button>
        )
    }
}
class Context extends Component {
    render() {
        return (
            <ThemeContext.Provider theme='primary'>
                <ToolBar/>
            </ThemeContext.Provider>
        )
    }
}
export default Context;