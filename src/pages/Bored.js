import axios from "axios";
import { Component } from "react";
import "./Home.css";

class Bored extends Component{

state={
    activity:'',
    type:'',
    participants:'',
    price:'',
    link:'',
    key:'',
    accessibility:''
}

componentDidMount(){
    axios.get('https://www.boredapi.com/api/activity').then(res =>{
        console.log(res.data);
        this.setState({ 
            activity: res.data.activity,
            type: res.data.type,
            participants: res.data.participants,
            price: res.data.price,
            link: res.data.link,
            key: res.data.key,
            accessibility: res.data.accessibility
    })
})
}

render(){
    return(
    <div className="content">
        <p>Activity: {this.state.activity}</p>
        <p>Type: {this.state.type}</p>
        <p>Participants: {this.state.participants}</p>
        <p>Price: {this.state.price}</p>
    </div>
    )
}
}
export default Bored;