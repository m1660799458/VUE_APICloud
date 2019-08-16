import Vue from 'vue'

import Header from '@P/header-P.vue'
import Footer from '@P/footer-P.vue'
import App from '@P/page1-P.vue'
import $api from '@U/api'

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
  // createFooter(){
  //   var footer = new Vue({
  //     el:"#footer",
  //     template:'<Footer />',
  //     components:{
  //       Footer
  //     }
  //   });
  // },
  winMain(){
    document.title = "首页";
    // this.createHeader();
    // this.createFooter();
    // console.log("asdasdasd首页asdasdasdasdasdasdasdasdasdpage1page1page1page1page1page1page1page1page1page1page1page1");
  },
  winApicloud(){
    $api.ready(()=>{
      // let vConsole = new VConsole()
      // console.log(JSON.stringify($api))
      $api.openFrame({
        name:"page1-frame",
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
