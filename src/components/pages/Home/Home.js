import React,{Component} from 'react';
import axios from 'axios';
import { Swiper } from './Swiper.js';
import {Type} from './Type.js';
import {Hotshow} from './Hotshow.js'
import {Header} from '../../commons/Header';
import {connect} from 'react-redux';
import {city} from '../../../actions/index';
// console.log('city',city)

class Home extends Component{
   constructor(){
       super();
       this.state={
           city:{

           }
       }
   }
    componentWillMount(){
        // console.log('compo:',this.props.city)
        let {state:city}=this.props.city;
        // console.log(this.state.city)
        let {state:cc}=this.props.location
        // console.log('state:',this.state)
        if(cc){
            localStorage.setItem('cityList',JSON.stringify(cc))
        }
        else{
            cc=JSON.parse(localStorage.getItem('cityList'))
            // console.log(cc)
        }
       
        this.setState({
             cc
        })
        
        axios.post('/api/Tour/ShowList').then(res=>{
           
        })
        
    }

    render(){
        let {cc}=this.state
        return <div>
           
            <Header />
            <Swiper/>
            <Type/>
            <Hotshow/>
        </div>
    }
}

let mapStateToProps=state=>{
    // console.log('home',state.common.city)
    return{
        city:state.common.city
    }
}

Home=connect(mapStateToProps)(Home)
export {Home};