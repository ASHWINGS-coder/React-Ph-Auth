import React, { Component } from 'react'
import Stats from './Stats'

export class Home extends Component {
    constructor(){
        super();
        this.state ={
            items:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        fetch('https://demo5636362.mockable.io/stats')
        .then(res => res.json())
        .then(result => {
            this.setState({
                isLoaded:true,
                items:result
            })
        })
    }
    render() {
        const {items,isLoaded} = this.state;
        const data1 = items.data
        if(!isLoaded){
            return <div>Loading ...</div>
        }else{
            return(
                <div style={{margin:"0px"}}>
                {data1.map(function(d){
                   return <Stats stat={d.stat}/>
                 })}
                </div>
            )
        }
    }
}

export default Home
