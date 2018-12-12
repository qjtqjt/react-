import React,{Component} from 'react';

class Car extends Component{
     constructor(){
         super()
         this.state={
            price:[280,480,680,880,1080,1280],
            addprice:[],
            idx:1
         }
        //  console.log(this.state.price)
     }
  
    addlist(idx,addprice){
        // console.log(one)
        this.setState({
            idx:idx,
            addprice:addprice
        })
        // this.setState({
        //     addprice:addprice
        // })
        let set=new Set(this.state.addprice)
        console.log(set);
        console.log( this.state.addprice.unshift(idx))  //条
        console.log(this.state.addprice[0])
        console.log('idx:',this.state.idx)
       console.log('addprice：',this.state.addprice) //添加的数据
    }
  
    
     render(){
         return <div className='car'>
                      <div className='carheader'>选择票价</div>
                      <div className='carone'>选择场次</div>
                      <div className='carff'>
                        <p >选择票价
                         <ul className='cartwo'>
                            {this.state.price.map((one)=>{
                                return <li className='one' onClick={this.addlist.bind(this,one)}>{one}</li>
                            })}
                       </ul>
                       </p>
                      </div>
                      <ul className='pricelist'>
                          {this.state.addprice.map((two)=>{
                              return <li className='twoli'>{two}</li>
                          })} 
                      </ul>
                      <div className='sub'>确定</div>
         </div>
     }
}
export {Car}