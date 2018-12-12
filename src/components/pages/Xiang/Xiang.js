import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changTab} from '../../../actions';
import { ActionSheet, Toast } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class Xiang extends Component{
    constructor(){
       super();
       this.state={
           xianglist:{},
           scrolltrue:false
       }
    }
    componentWillMount(){
        this.props.changTab(false); 
        // console.log('Xiang:',this.props.location)
        let {state:xianglist}=this.props.location;
       console.log(xianglist)
       if(xianglist){
           localStorage.setItem('xianglist',JSON.stringify(xianglist))
       }else{
           xianglist=JSON.parse(localStorage.getItem('xianglist'))
       }

       window.addEventListener('scroll',this.windowscroll.bind(this))


       this.setState({
           xianglist
      })
    }


    windowscroll(){
        // console.log(window.scrollY)
        var top=window.scrollY;
        if(top>50){
           this.setState({
            scrolltrue:true
           })
        }else{
            this.setState({
                scrolltrue:false
               })
        }
        // console.log(this.state.scrolltrue)
    }






   
    componentWillUnmount(){
        this.props.changTab(true)
    }
 
    dataList = [
  
        // { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        // { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        // { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        // { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        // { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    //   ].map(obj => ({
    //     icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    //     title: obj.title,
    //   }));
    ]


    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
          // title: 'title',
          message: '欢聚橙卡',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            Toast.info('closed after 1000ms');
            setTimeout(resolve, 1000);
          });
        });
      }

      goCar(){
         let{history}=this.props
          history.push({
              pathname:'/Car/'
          })
    }

    render(){
        let {xianglist}=this.state;
        let {scrolltrue} = this.state
        // console.log('goodes',xianglist)
        return<div className='Xiang'>
                 <div className='xiangheader' style={{display:scrolltrue?"":'none'}}>
                   <div className='xheaderleft'>goback</div>
                   <div className='xheadercom'><b>演出详情</b></div>
                   <div className='xheaderright'>...</div>
                 </div>
                 <div className='haeder'>
        
                      <div className='headertop'>
                          <div className='img-top'>
                           <img className='headeimg' src={xianglist.pic}/>
                          </div>
                         <div className='img-bottom'>
                         </div>
                      </div>
                      <div className='headerbottom'>
                            <p className='headertile'><b>{xianglist.show_name}</b></p>
                            <p className='headertime'>时间：{xianglist.display_show_time}</p>
                             <p className='headeradress'>场馆：{xianglist.venue_name}</p>
                            <p className='headerprice'><b>￥{xianglist.show_price}</b></p>
                           <div className='hah'>
                                  <span className='car1'>欢聚橙卡</span>
                                <span onClick={this.showShareActionSheet}>.....</span>
                           </div>
                            
                      </div>
                 </div>
                 <div className='bommon'>
                   <div className='bommonleft'>客服</div>
                   <div className='bommonright' onClick={this.goCar.bind(this)}>
                      立即购票1
                   </div>
                 </div>
        </div>
    }
}
let mapStateToProps=state=>({})
let mapDispatchToProps=dispatch=>{
    return{
        changTab(status){
            dispatch(changTab(status))
        }
    }   
}

Xiang=connect(mapStateToProps,mapDispatchToProps)(Xiang)
export {Xiang}