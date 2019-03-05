import React,{ Component } from 'react';

function Welcome(props) {
    return <h1>Hello,{ props.name }</h1>
}

function Text(props) {
    return <div>{ props.text }</div>
}
function Comment(props) {
    return (
        <div>
            <Text text="文本"/>
            <div>{ props.author.name }</div>
        </div>
    )
}
class Props extends Component {
    render() {
        return (
            <div>
                <Welcome name='tianixa'/>
                <Welcome name='hha'/>
                <Welcome name='好美'/>

                <div>
                    <Comment author={{name: 'tixia'}} />
                </div>
            </div>
        )
    }
}

export default Props;