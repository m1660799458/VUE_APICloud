import Vue from 'vue'

import App from '@P/page2-P.vue'
import $api from '@U/api'

import commonEntry from './common'

//初始化VUE和一些组件
commonEntry.init();

var index = {
  winMain(){
    document.title = "page2";
    // console.log("page2page2page2page2page2page2page2page2page2page2page2page2page2page2page2page2");
  },
  winApicloud(){
    $api.ready(()=>{
      // let vConsole = new VConsole()
      // console.log(JSON.stringify($api))
      $api.openFrame({
        name:"page2-frame",
        header:$api.headerHeight(),
        // url:"html/win-layout.html"
      });
    });
  },
  winWeb(){
    main();
  },
  frameMain:main
};

function main(){
  var indexP = new Vue({
    el:"#app",
    template:'<App >',
    components:{
      App
    }
  });

}

$api.init(index);
