//store:仓库   //用于放数据

import {createStore} from 'redux';

import reducer from './reducers';
// console.log('ewqw:',reducer)
// import  from ''

let store = createStore(reducer); //将预设修改逻辑放在产库中


export default store;