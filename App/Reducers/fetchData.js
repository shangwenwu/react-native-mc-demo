

import {AJAX_DATA, AJAX_SUCCEED, AJAX_FAILED} from '../Config/actionType'
import defaultData from '../Config/defaultData'
import Api from '../Api'


function FetchData(state = defaultData, action){
    console.log('fetchData'+'|||||||||||||||||');
    console.log(action.type);
    switch (action.type) {
        case AJAX_DATA:
            var getParas='',postParas={};
            if(action.data.method.toLowerCase() == 'get'){
                getParas='?'+action.data.body;
            }else{
                postParas = {
                    method:'post',
                    headers:{"Content-Type": "application/x-www-form-urlencoded"},
                    body:action.data.body
                }
            }
            fetch(Api[action.data.url]+getParas,postParas).then( response => {
                return response.json();
            }).then( json => {
                if(json.ret){
                      json[action.data.url]=true;
                      action.data.succeed({json:json,name:action.data.url})
                }else{
                      alert('请求'+action.data.url+'列表错误信息：'+json.error.code +' '+json.error.msg);
                }
            }).catch( err => {
                alert('请求 '+action.data.url+' error');
            })
            return [...state]

        case AJAX_SUCCEED:
            var actionJson = {};
            actionJson[action.data.name+'Info'] = action.data.json;
            actionJson[action.data.name+'Info'][action.data.name] = true;
            var obj =  Object.assign(...state,actionJson);
            return [obj]

        case AJAX_FAILED:
            console.log('FAILED FAILED FAILED');
            return [...state]

        default:
        console.log('fetchData'+'|||||||||||||||||')
            return [...state]
    }
}


module.exports =  FetchData