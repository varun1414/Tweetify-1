import React, { Component } from 'react'
import {Table,Button,Modal} from 'react-bootstrap'
import axios from "axios"
import '../../App.css';
import '../ClientDashboard.css';
export default class ClientDashboard extends Component{
  constructor(props){

    super(props)
    
    this.state={
      data:[]
    
      
    }
    
    } 


componentDidMount(){
  
  var c = window.location.search.split('c=')[1]
  console.log("printurl",c)
  axios.get("http://localhost:8000/login",{params:{id:c}}).then((res)=>this.setState({data:res.data}))

}
renderFullnames() { return this.state.data.map((name) => { return (<div>{name} <button>view</button> <button>compare</button> </div>); }) }
render(){
  return(
    

   <div> {this.renderFullnames()} </div> 
  )
}
}