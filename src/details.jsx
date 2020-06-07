import React, { Component } from 'react';
import Titles from './titles';

class Details extends Component{
constructor(){
  super()
  this.state={
    datas:[],change:"",final:'eminem'
  }
}

async componentDidMount(){
   
   const response= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.final}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "4c8d98963amshee9855643106757p1722eejsnf83ad3bd9350"
	}
})
  const max= await response.json();
  console.log(max.data);
  this.setState({datas:max.data})
}

Change=(e)=>{
this.setState({change:e.target.value})
console.log(this.state.change);
};
Final=()=>{
 
    this.setState({final:this.state.change})
}
  render(){
    return(
<div>
    <form>
    <input type="search" onChange={this.Change}/>
    <button type="submit" onClick={this.Final}>CLICK HERE</button>
    </form>

    {this.state.datas.map((data)=><Titles titles={data.title}/>)}
    </div>

    );
  }
}

export default Details;