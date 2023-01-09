import axios from "axios";
import { Component } from "react";

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
    <>
    <h2>Welcome</h2>
    <form onSubmit={this.getWeather}>
        <p>Write the name of the city that you want to know the weather</p>
        <input type='text' name='city' placeholder='City' />
        <button>Get weather</button>
    </form>

    <p>Temperature: {this.state.temperature}</p>
    <p>Wind: {this.state.wind}</p>
    <p>Description: {this.state.description}</p>
    {this.state.forecast.map( (element) => {
        return(
        <ul>
            <li>Day: {element.day}</li>
            <li>Temperature: {element.temperature}</li>
            <li>Wind: {element.wind}</li>
        </ul>
        )   
    })}
    </>
    )
}
}
export default Home;