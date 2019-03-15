import React,{ Component } from 'react';

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
                Composition
                {
                    console.log(this.getQueryVariable('id'))
                }
            </div>
        )
    }
}

export default Composition;