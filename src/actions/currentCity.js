export function changecity(cityid,cityname){
    return {
        type:'change_city',
        payload:{cityid,cityname}
    }
}