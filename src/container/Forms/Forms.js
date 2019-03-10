import React,{ Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isGoing: true,
            textareaValue: '',
            selectValue: ['b','c'],
            arr: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textareaChange = this.textareaChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    handleChange(e) {
        let newArr = this.state.arr;
        let value = e.target.value;
        const name = e.target.name;
        newArr[name] = value;
        //let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            arr: newArr,
        })
    }

    textareaChange(e) {
        let textareaValue = e.target.value;
        this.setState({
            textareaValue,
        })
    }

    selectChange(e) {
        console.log(e);
        this.setState({
            selectValue: e.target.value,
        })
    }

    handleSubmit(e) {
        console.log(this.state.arr);
        console.log(this.state.textareaValue);
        console.log(this.state.selectValue);
        e.preventDefault();
    }


    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Is Going:
                    <input type='text' name='isGoing' onChange={ this.handleChange }/>
                </label>

                <label>
                    Number of guests:
                    <input type='number' name='numberOfGuests' value={ this.state.numberOfGuests } onChange={ this.handleChange }/>
                </label>

                <label>
                    textarea
                    <textarea value={ this.state.textareaValue } onChange={ this.textareaChange }>

                    </textarea>
                </label>

                <label>
                    Select
                    <select style={{ width: '100px'}} multiple={ true } value={ this.state.selectValue } onChange={ this.selectChange }>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
                </label>

                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default Forms;