
import * as city from './currentCity';
export function changTab(status){
    return {
        type:'change_tabbar_status',
        payload:status
    }
}
export {city};