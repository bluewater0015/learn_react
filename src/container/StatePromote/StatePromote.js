import React,{ Component } from 'react';

function Bilo(props) {
    if(props.celsius >= 100){
        return <h1>水开了</h1>
    }
    return <div>水还没有开</div>
}

const scaleName = {
    c: 'Ceisius',
    f: 'Fahrenheit',
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.props.onTemperatureChange(value);
    }
    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>请输入{ scaleName[scale] }温度：</legend>
                <input onChange={ this.handleChange } value={ temperature }/>
            </fieldset>
        )
    }
}

class Calulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature,
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature,
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ?  tryConvert(temperature, toCelsius): temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature = { celsius }
                    onTemperatureChange = { this.handleCelsiusChange }
                />
                <TemperatureInput
                    scale="f"
                    temperature = { fahrenheit }
                    onTemperatureChange = { this.handleFahrenheitChange }
                />
                <Bilo celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}
export default Calulator;