import React, { Component } from 'react';

import {Route,Redirect,Switch,withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import { TabBar } from 'antd-mobile';
//引用ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';


import {My} from './components/pages/My/My';
import {Home} from './components/pages/Home/Home';
import {List} from './components/pages/List/List';
import {NotFound} from './components/Page';
import {City} from './components/pages/City';
import {Xiang} from './components/pages/Xiang/Xiang';
import {Car} from '../src/components/pages/Car/Car';
import axios from 'axios'


import './sass/page.scss';
// // fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faMapMarkerAlt,faHome,faMeh,faBasketballBall}  from '@fortawesome/free-solid-svg-icons'

//配置url
axios.defaults.baseURL='http://localhost:3003';



// basketball-ball
library.add(
       faMapMarkerAlt,
       faHome,
       faMeh,
       faBasketballBall
)
  

class App extends Component {
  constructor(){
    super();
    this.state={
      tabs:[
        {
          title:'首页',
          path:'/Home',
          icon:'home'

        },
        {
          title:'演出库',
          path:'/List',
          icon:'meh'
        },
        {
          title:'我的',
          path:'/My',
          icon:'basketball-ball'
        },
      ],
     
      currentTab:0
    }
  }
  //点击事件
  handlerClick(idx,path){
    this.setState({
           currentTab:idx
    });
    //利用编程式导航,
    //获取history的方式 , 利用withRouter高阶组件实现
     this.props.history.push(path);    
    //  console.log(this.props)  //history:用来路由跳转   location:获取参数   match:匹配url地址
  }

  //生命周期
  componentWillMount(){
    //  console.log(this.props)
    //获取hash值
    let hash=window.location.hash.slice(1);   //console.log(hash)
    //找出对应的索引值
    let currentTab = 0
      this.state.tabs.some((item,idx)=>{  //some:找到就退出
          currentTab = idx;
          return item.path === hash
      });
      this.setState({
        currentTab
    });
//  console.log('props:',this.props)
  }

  render() {
    // console.log('a',this.props)
    return (
      <div className="container">
          <div className='content'>
               <Switch>
                   <Route path='/Home' component={Home} replace/>
                   <Route path='/List' component={List} replace/>
                   <Route path='/My'   component={My} replace/>
                   <Route path='/City' component={City} />
                   <Route path='/Xiang' component={Xiang} />
                   <Route path='/Car' component={Car} />
                   <Route path="/404" component={NotFound} replace/>
                   <Redirect from='/'  to='/Home' exact/>
                   <Redirect to="/404"/>
                </Switch>
          </div>
          
          <TabBar
              tintColor='#df3838'
              noRenderContent={true}
              hidden={!this.props.tabber}
              >
              {
                 this.state.tabs.map((tab,idx)=>{
                    return <TabBar.Item
                              title={tab.title}
                              key={tab.path}
                              icon={<FontAwesomeIcon icon={tab.icon}/>}
                              selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}//选中后的展示图片
                              selected={this.state.currentTab==idx}//选中的图片的下标
                              onPress={this.handlerClick.bind(this,idx,tab.path)} //bar点击触发,自己改组件

                          >
                          {tab.title}
                          </TabBar.Item>
                 })
              }
          </TabBar>
     

            
        
      </div>
    );
  }
}
      let  mapStateToProps =state=>{  
        // console.log("lll",state)
            return{
              //把state.creatTabbar.tabber  映射到porps
              tabber:state.creatTabbar.tabber //得到数据映射到本组件中 
            }
      }
   
App=connect(mapStateToProps)(App)

//利用高阶组件传递路由参数
App=withRouter(App); 
export default App;
