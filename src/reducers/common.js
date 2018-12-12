//获取city
let initcity={
   city:[]
}
let  commoncity=(state=initcity,action)=>{
    switch(action.type){
        case 'change_city':
        return{
            ...state,
            city:action.payload
        }
        default:
        return state
    }
}
export default commoncity;