import {combineReducers} from 'redux'; 
import creatTabbar from './creatTabbar';
import common from './common';

//将reducers文件下的预设修改逻辑合并一起
let rootReducer=combineReducers({
    creatTabbar,
    common
})
export default rootReducer;