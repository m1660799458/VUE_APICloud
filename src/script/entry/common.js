import Vue from 'vue'
import $api from '@U/api'
import commonR from '@R/common-R'
import tap from '@U/tap'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
export default{
    init(){
        //注册路由
        commonR.register();
        //实现tap时间的触发
        tap.init();
        let vConsole = new VConsole()
        Vue.prototype.$api = $api;
        Vue.prototype.$route = commonR;
    }
}