import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
// // fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faMapMarkerAlt}  from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

library.add(
    faMapMarkerAlt,
)

class Header extends Component{
      constructor(){
          super();
          this.state={
                city:'/City',
                name:[]
              }
          
      }
      componentWillMount(){
        // window.BMap = BMap;
        // console.log(BMap)
            /*通过百度地图获取当前位置城市信息*/
        var BMap = window.BMap;//取出window中的BMap对象
        console.log(window.BMap)
        var myCity = BMap.LocalCity;
        let WeatherLists = {};
        myCity.get(function (result) {
            console.log(result.name);          //城市名称
            if (result.name) {
                /*通过当前位置城市信息获取天气*/
                axios.get('https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922', {
                    params: {
                        city: result.name
                    }
                }).then(function (res) {
                    WeatherLists = res.data.HeWeather5[0];
                    console.log(WeatherLists);
                });
            }
        });

             this.setState({
                     name:this.props.content
             })
      }





      cityClick(){
        this.props.history.push(this.state.city);
      }


        render(){
               
              return <div className='header'>
                        <div className='headerleft'>
                                <FontAwesomeIcon icon="map-marker-alt" />
                                <span className='city' onClick={this.cityClick.bind(this)}>{}</span>
                            
                        </div>
                            <div className='headerright' >搜索演出、艺人或场馆</div>
                    </div>
        }
}
Header=withRouter(Header)
export {Header};