import axios from "axios";
import { Component } from "react";
import "./Home.css";

class Home extends Component{

state={
    temperature:'',
    wind:'',
    description:'',
    forecast:[
        {        
            day: '',
            temperature: '',
            wind: ''
        },
        {        
            day: '',
            temperature: '',
            wind: ''
        },
        {        
            day: '',
            temperature: '',
            wind: ''
        }
    ]
}

componentDidMount(){
    axios.get("https://goweather.herokuapp.com/weather/oslo").then(res =>{
        console.log(res.data);
        this.setState({ 
            temperature: res.data.temperature,
            wind: res.data.wind,
            description: res.data.description,
            forecast: 
            [
            res.data.forecast[0],
            res.data.forecast[1],
            res.data.forecast[2]
            ]
    })
})
} 

getWeather=(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    axios.get(`https://goweather.herokuapp.com/weather/${city}`).then(res =>{
        console.log(res.data);
        this.setState({ 
            temperature: res.data.temperature,
            wind: res.data.wind,
            description: res.data.description,
            forecast: 
            [
            res.data.forecast[0],
            res.data.forecast[1],
            res.data.forecast[2]
            ]
    })
})
}

render(){
    return(
    <div className="content">
    <h2>Welcome</h2>
    <form onSubmit={this.getWeather}>
        <h4>Write the name of the city where you want to know the weather</h4>
        <input type='text' name='city' placeholder='City' />&emsp;
        <button>Get weather</button>
    </form>
    <p>Temperature: {this.state.temperature}</p>
    <p>Wind: {this.state.wind}</p>
    <p>Description: {this.state.description}</p>
    {this.state.forecast.map( (element) => {
        return(
        <ul>
            <li>Day: {element.day}&ensp;</li>
            <li>Temperature: {element.temperature}&ensp;</li>
            <li>Wind: {element.wind}</li>
        </ul>
        )   
    })}
    </div>
    )
}
}
export default Home;