import React,{Component} from 'react';
import Axios from '../../../../node_modules/axios';
import {withRouter} from 'react-router-dom';
import {Grid} from 'antd-mobile';

 class Hotshow extends Component{
     constructor(){
         super();
         this.state={
             hotlist:[]
         }
     }
    
    componentWillMount(){
        Axios.post('/api/index/hotsShowList').then(res=>{
            // console.log('hot',res.data.data)
            this.setState({
                hotlist:res.data.data
            })
        })
    }
    hotshowclick(item){
       console.log(item)
       let {history}=this.props;
       console.log(history)
       history.push({
           pathname:'/Xiang/',
           state:item
       })
    }
     render(){
         return <div className='hotshow'>
                   <b className='b'>热门演出</b>
                   <div className='hotlist'>
                        <ul className='ul-li'>
                           {this.state.hotlist.map((item,index)=>(
                               <li className='list-li' key={index} onClick={this.hotshowclick.bind(this,item)}>
                                    <img className='list-img'src={item.pic} />
                                    <p className='titlt'><b>{item.show_name}</b></p>
                                    <span className='time'>{item.display_show_time.split(' ')[0]}</span>
                                    <span className='address'>{item.city_name}</span>
                                 </li>
                           ))}
                        </ul>
                   </div>
                   

         </div>
     }
 }
 Hotshow = withRouter(Hotshow);
 export {Hotshow};