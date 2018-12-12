import React,{Component} from 'react';
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import axiox from 'axios';
import qs from 'qs';
import '../../../sass/_mixin.scss'

class Swiper  extends Component{
    constructor() {
        super();
        this.state = {
            swiper:[],
            
        }
    }

  //设置cookie
    setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    componentWillMount(){
        var str='UM_distinctid=167595b2f83e7-02097b5b531c87-424f0928-100200-167595b2f84649; ag_fid=paIuwE5HHCeCsnBF; MEIQIA_EXTRA_TRACK_ID=1DbkvWTK0V4AmnZYpjWhEDZw5Gk; juooo_location_city=V2EGPAYjW3MNUQE7VDZVPFYyVi0HMgJsUXQHeVtdBjpQZFRqADRVOVB2U0UAM1UkBGhQOAd0VRNSO1d1XUEHYFcnBmwGFVsvDUwBFlR0VWhWcVZUBzICbFF0B3lbPwZlUCNURgAzVWZQIVNlAHBVaAQxUHkHOFU9Um1XbQ; juooo_sessionid=pn8vrorpcmfimq8852ofpc1s02; Hm_lvt_214739940fca835e1b074f9d8be81ccb=1543392408,1543392411,1543547534,1543559849; OZ_SI_2151=sTime=1543559849&sIndex=2; OZ_1U_2151=vid=vbfe4c98a13567.0&ctime=1543559851&ltime=1543559849; OZ_1Y_2151=erefer=https%3A//www.sogou.com/link%3Furl%3DDSOYnZeCC_r8v185YdI9FwDydjxbYhws&eurl=http%3A//www.juooo.com/&etime=1543559849&ctime=1543559851&ltime=1543559849&compid=2151; Hm_lpvt_214739940fca835e1b074f9d8be81ccb=1543559853; Hm_lvt_10437983b03f621fea575898181666aa=1543392424,1543477241,1543546955,1543559855; MEIQIA_VISIT_ID=1Di3wSjAJC2M8nwT2eSHh6fv0Y3; isDiffCity=1; __ag_cm_=1; CNZZDATA612289=cnzz_eid%3D1226650006-1543387283-%26ntime%3D1543662882; Hm_lpvt_10437983b03f621fea575898181666aa=1543665746'
        ;
        var arr=str.split('; ');
        var arr2=[];
        for(var i=0;i<arr.length;i++){
            arr2=str[i].split('=');
            this.setCookie(arr2[0],arr2[1],7)
        }
        
    //  https://m.juooo.com/index/getNationalSildeList
        axiox.post('/api/index/getNationalSildeList',qs.stringify({
          confType:'L',
          isSymbol: 1,
          limit:6
        }),
          {
            headers:{
                  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                   }
                })
           .then((res)=>{
              let data=res.data.data;
              // console.log(data)
             this.setState({
                swiper:data
             })
         
            
                    

             
        })
    }
    render(){
        return <div className='Swiper'>
                    <Carousel
                      autoplay={true}
                      infinite
                    >
                      {this.state.swiper.map(list=> (
                        <a 
                          key={list.si_id}
                          href="#"
                          style={{ display: 'inline-block', width: '100%', height:'h(180)'}}
                        >
                          <img  className='swiper_img'
                            src={"http://image.juooo.com/"+list.image_url}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', height:'h(180)'}}
                            onLoad={() => {
                              window.dispatchEvent(new Event('resize'));
                          
                            }}
                          />
                        </a>
                      ))}
                    </Carousel>
 
             </div>
    }
} 

export {Swiper};