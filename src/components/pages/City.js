import React,{Component} from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import {withRouter} from 'react-router-dom';
import {city,changTab} from '../../actions'
console.log('conm:',city)
class City extends Component{
        constructor(){
            super();
            this.state={
                city:[],
                data:[]
            } 
           
        }

        componentWillMount(){  //进来的时候 底部隐藏
            this.props.changTab(false); 
            // console.log('dsdsas', this.props.changTab)
            // http://www.juooo.com/Index/ajaxGetCityRecommendData
            axios.post('/city/Index/ajaxGetCityRecommendData').then(res=>{
            //    console.log(res.data)
                this.setState({
                    city:res.data.cityList
                })
                // console.log(this.state.city)
            })
           
            axios.post('/api/Index/getCityList').then(res=>{
                var obj=res.data.city_list;
                var keys=[];//定义一个数组用来接受key    
                var values=[];//定义一个数组用来接受value  
                  for(var key in obj){    
                    keys.push(key);    
                    values.push(obj[key]);//取得value      
                    } 
               this.setState({
                   data:values,
     
                })
             
              
            })
            
           
        }
        cityClick(cityid,cityname){
        //  console.log('ssa:',this.props)
             this.props.changecity(cityid,cityname)
            //  console.log('12212:',this.props.changecity)
             this.props.history.push('/home');
        
        }


        componentWillUnmount(){   //离开的时候 底部出现
            // console.log(this.props)
            this.props.changTab(true)
        }
       render(){
           return <div className='city'>
                        <div className='cityheader'>
                                <a  className='cityleft'> 你好</a>
                                <b className='citycenter'>切换城市</b>
                        </div>
                        <div className='citycenter'>
                               <p className='citytitle'>当前城市</p>
                               <div className='nowcity'>深圳</div>
                               <p className='citytitle'>定位城市</p>
                               <div className='nowcity'>温州</div>

                               {/* 热门城市 */}
                                <p className='citytitle'>热门城市</p>
                                <ul className='redcity'>
                                    {this.state.city.map(cc=> (
                                        <li className='nowcity' key={cc.id} onClick={this.cityClick.bind(this,cc.id,cc.name)}>{cc.name}</li>
                                    ))}
                                </ul>
                                <p className='citytitle'>全部城市</p>
                                <ul className='city_list'>
                                  {this.state.data.map((val,index)=>{
                                     return <div>
                                                <h2 className='list-h2' key={index}>{val.id}</h2>
                                                {val.lists.map((item,ind)=>{
                                                   return <li className='city-li' key={ind} >{item.name}</li>
                                                })}
                                            </div>
                                    
                                 } )}
                                 
                                     
                                </ul>

                        </div>

           </div>
       }
      
}

    //  console.log(this.props)
let mapStateToProps=state=>({}) //一个空对象
let mapDispatchToProps=dispatch=>{

    console.log('dispatch',dispatch)
    return{
         changTab(status){
             dispatch(changTab(status))
         },
         changecity(cityid,cityname){
             dispatch(city.changecity(cityid,cityname))
         }
    }
}
City=connect( mapStateToProps,mapDispatchToProps)(City);

City=withRouter(City);
export {City};