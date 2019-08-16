import Vue from 'vue'

// import Header from '@P/header-P.vue'
import App from '@P/music.vue'
import $api from '@U/api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


import commonEntry from './common'

//初始化VUE和一些组件
commonEntry.init();

var index = {
  // createHeader(){
  //   var header = new Vue({
  //     el:"#header",
  //     template:'<Header title="页面1" />',
  //     components:{
  //       Header
  //     }
  //   });
  // },
  winMain(){
    document.title = "music";
    // this.createHeader();
  },
  winApicloud(){
    $api.ready(()=>{
      $api.openFrame({
        name:"music-frame",
        // header:$api.headerHeight(),
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
    },
  });

}

$api.init(index);
