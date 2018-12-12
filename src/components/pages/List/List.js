import React,{Component} from 'react';
import {Tabs,Badge} from 'antd-mobile';
import {Header} from '../../commons/Header';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
class List extends Component{
    constructor(){
        super();
        this.state={
            tabs:[
                {
                    text:'全部',
                    path:'/List',
                    total:'925'
                },
                {
                    text:'演唱会',
                    path:'/sing',
                    total:'107'
                },
                {
                    text:'音乐会',
                    path:'/music',
                    total:'261'
                },
    
                {
                    text:'话剧歌剧',
                    path:'/spack',
                    total:'261'
                },
                {
                    text:'儿童亲子',
                    path:'/child',
                    total:'118'
                },
              
                
            ]
        }
        this.listClick=this.listClick.bind(this)
    }
    listClick(tab,idx){
           //编程式导航
        let {history,match}=this.props;
        // console.log(history,match)
        let url=match.path+tab.path;
        history.push(url);
        // console.log(url)

    }
    render(){
        // console.log(this.props)
        let {match} = this.props;
        // console.log(match)
        return <div className='List'>
                     <Header/>
                    <Tabs tabs={this.state.tabs}
                        initialPage={1}
                        renderTab={tab => <span className='headerlist'>{tab.text}</span>}
                        onChange={(tab, index) => {}}
                        onTabClick={this.listClick}
                        >
                    </Tabs>
                    <Switch>
                        {/* 路由嵌套 */}
                          <Route path={match.url+'/List'} render={()=><strong>全部</strong>}/>  
                          <Route path={match.url+'/sing'} render={()=><strong>演唱会</strong>}/>
                          <Route path={match.url+'/music'}  render={()=><strong>音乐会</strong>}/>
                         
                          <Route path={match.url+'/spack'} render={()=><strong>话剧歌剧</strong>}/>
                          <Route path={match.url+'/child'} render={()=><strong>儿童亲子</strong>}/>
                    </Switch>
             </div>

    }
}

export {List};