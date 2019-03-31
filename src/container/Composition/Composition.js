import React,{ Component } from 'react';

function SubComponents(props) {
    console.log('props',props);
    return (
        <div>
            { props.children }
        </div>
    )
}

function SplitPane(props) {
    return (
        <div>
            <div>{ props.left }</div>
            <div>{ props.right }</div>
        </div>
    )
}

class Composition extends  Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    getQueryVariable(variable)
    {
        //var query = window.location.search.substring(1);
        var query = 'id=1&image=awesome.jpg';
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){
                return pair[1];
            }
        }
        return(false);
    }

    render() {
        return (
            <div>
                {
                    console.log(this.getQueryVariable('id'))
                }
                <SubComponents>
                    <h1>Welcome</h1>
                    <h2>123</h2>
                </SubComponents>
                <SplitPane
                    left={<div>123</div>}
                    right = { <div>234</div>}
                />
            </div>
        )
    }
}

export default Composition;