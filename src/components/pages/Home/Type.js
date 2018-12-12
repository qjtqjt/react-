import React,{Component} from 'react';
import axios from 'axios';


import '../../../sass/_mixin.scss'
class Type extends Component{
    constructor(){
         super();
         this.state={
                tabs: [
                        {
                        img:'http://image.juooo.com/group1/M00/02/63/rAoKNVv3wYCAX0bZAAAfbg9q4H8171.png',
                        title:'演唱会'
                        },
                        {
                            img:'http://image.juooo.com/group1/M00/01/BA/rAoKmVv3wYqALz2-AAAskFG2SQQ804.png',
                            title:'音乐会'
                        },
                        {
                            img:'http://image.juooo.com/group1/M00/02/63/rAoKNVv3wZOASJlrAAAf8WnEEP4854.png',
                            title:'舞台剧'
                        },
                        {
                            img:'http://image.juooo.com/group1/M00/01/BA/rAoKmVv3wZyADjFbAAAe9Wwhzaw344.png',
                            title:'音乐剧'
                        },
                        {
                            img:'http://image.juooo.com/group1/M00/02/63/rAoKNVv3waWAEfwqAAAi3ihMit4397.png',
                            title:'儿童'
                        },
                        
                      ],
                four:[
                        {
                        a:'https://m.juooo.com/calendar/index',
                        src:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png',
                        txt:'演出日历'
                        },
                        {
                        a:'https://m.juooo.com/activity/index',
                        src:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png',
                        txt:'聚特惠'
                        },
                        {
                        a:'https://m.juooo.com/Student/index',
                        src:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png',
                        txt:'学生专区'
                        },
                        {
                        a:'https://m.juooo.com/Cardproduct/index',
                        src:'http://image.juooo.com/group1/M00/02/59/rAoKNVvpE6yALBlLAAA5L1UVFII012.png',
                        txt:'欢聚橙卡'
                        },
                ],
                 showlist:[]
            }
               
       
    }
    componentDidMount(){
        axios.post('/api/Tour/ShowList').then(res=>{
            //  console.log(res.data.data);
             this.setState({
                 showlist:res.data.data
             })
        })
       
    }
    render(){
        return <div className='type'>
                 {/* 分类 */}
                   <div className='typetop'>
                        {
                            this.state.tabs.map((tab,idx)=>{
                                return  <div className='img_box' key={tab.title}>
                                            <img className='type_img' src={tab.img}/>
                                            <p className='img_title'>{tab.title}</p>
                                        </div>
                            })
                        }
                   </div>
                   {/* 日历 */}
                   <div className='typebottom'>
                        {
                            this.state.four.map((item)=>{
                                return <a className='privilege' href={item.a} key={item.txt}>
                                        <img className='typebottom_img' src={item.src}/>
                                        <p className='item-txt'>{item.txt}</p>
                                    </a>
                                 
                            })
                           
                        }
                        
                   </div>
                   {/* 巡回演出 */}
                   <div className='active'>
                         <div className='active-top'>
                             <b>巡回演出</b>
                             
            		        <div className='mone'>
                               <a href=''/> 更多巡演
                            </div>
                         </div>
            
                      <div className='lun'> 
                           <ul className='lun-ul'>
                                {
                                    this.state.showlist.map((li,idx)=>{
                                       return    <li className='ul-list' key={li.show_id}>
                                                <img className='list-img' src={li.pic}/>
                                            </li>
                                    })
                                }
                                   
                           </ul>
                          
                     

                   </div>
               </div>
         </div>
    }
     
}

export {Type};