// reducers文件用来预设修改逻辑

let initState={
    //是否显示底部
    tabber:true
}
let commonReducer=(state=initState,action)=>{
    switch(action.type){
        case 'change_tabbar_status':
           return{
               ...state, //复制之前的数据,在更新数据
               tabber:action.payload
           }
           default:
              return state;     //如果数据没有更改就返回原来的
    }
}


export default commonReducer;  //抛出  stat或者action(新的状态)