<template lang="html">
  <div class="musicMain">
    <h1 @click="back">music</h1>
  </div>
</template>

<script>
import $api from "@U/api";

export default {
  created() {
    console.log("musicmusicmusicmusicmusic");
    $api.ready(() => {
        // console.log(JSON.stringify(api));
          var netAudio = api.require('netAudio');
            netAudio.play({
                path: 'https://webfs.yun.kugou.com/201908151013/fa69c5715599862fc23151f9c006e7c9/G156/M00/1C/0B/fJQEAFy_JfCAUjQtACoEl8Wawq4506.mp3'
            }, function(ret, err) {
                if (ret) {
                    // alert("palying");
                } else {
                    // alert(JSON.stringify(err));
                }
            });
      var UIListMeeting = api.require("UIListMeeting");

        // $api.parseTapmode();
        // var header = $api.byId('aui-header');
        // $api.fixStatusBar(header);
        // var headerPos = $api.offset(header);
        // console.log(window.api.safeArea.top);
        console.log(api.safeArea.top);
        var a = window.api.safeArea.top
      UIListMeeting.open(
        {
          rect: {
            x: 10,
            y: a,
            w: api.winWidth - 20,
            h: api.frameHeight - 170
          },
          data: [
            {
              uid: "1001",
              head: "华",
              headBg: "#ff0000",
              name: "德华",
              title: "歌手",
              status: "fs://meeting/ring0.png",
              mark: "fs://meeting/record0.png"
            },
            {
              uid: "1002",
              head: "友",
              headBg: "#ff34b3",
              name: "学友",
              title: "歌手",
              status: "fs://meeting/ring1.png",
              mark: "fs://meeting/record1.png"
            },
            {
              uid: "1003",
              head: "黎",
              headBg: "#ffd700",
              name: "黎明",
              title: "歌手",
              status: "fs://meeting/ring2.png",
              mark: "fs://meeting/record2.png"
            },
            {
              uid: "1004",
              head: "成",
              headBg: "#fa8072",
              name: "富成",
              title: "歌手",
              status: "fs://meeting/ring3.png",
              mark: "fs://meeting/record3.png"
            },
            {
              uid: "1005",
              head: "含",
              headBg: "#ff00ff",
              name: "韩寒",
              title: "粉丝",
              status: "fs://meeting/ring0.png",
              mark: "fs://meeting/record0.png"
            },
            {
              uid: "1006",
              head: "郭",
              headBg: "#cdcd00",
              name: "敬明",
              title: "粉丝",
              status: "fs://meeting/ring2.png",
              mark: "fs://meeting/record2.png"
            },
            {
              uid: "1007",
              head: "布",
              headBg: "#a2b5cd",
              name: "布什",
              title: "屌丝",
              status: "fs://meeting/ring1.png",
              mark: "fs://meeting/record1.png"
            },
            {
              uid: "1008",
              head: "森",
              headBg: "#b8860b",
              name: "小森",
              title: "屌丝",
              status: "fs://meeting/ring4.png",
              mark: "fs://meeting/record4.png"
            }
          ],
          rightBtns: [
            {
              bgColor: "#CD3700",
              activeBgColor: "",
              width: 40,
              title: "删除",
              titleSize: 12,
              titleColor: "#fff",
              icon: "",
              iconWidth: 20
            },
            {
              bgColor: "#CD950C",
              activeBgColor: "",
              width: 40,
              title: "禁言",
              titleSize: 12,
              titleColor: "#fff",
              icon: "",
              iconWidth: 20
            },
            {
              bgColor: "#C7C7C7",
              activeBgColor: "",
              width: 40,
              title: "取消",
              titleSize: 12,
              titleColor: "#fff",
              icon: "",
              iconWidth: 20
            }
          ],
          styles: {
            border: {
              color: "#000",
              width: 0.5
            },
            item: {
              bgColor: "#F5F5F5",
              activeBgColor: "#ffffff",
              height: 50.0,
              headSize: 30,
              nameSize: 14,
              nameColor: "#000",
              titleSize: 12.0,
              titleColor: "#ff0000",
              statusSize: 20.0,
              markSize: 20
            }
          },
          fixedOn: api.frameName
        },
        function(ret, err) {
          if (ret) {
            alert(JSON.stringify(ret));
          } else {
            alert(JSON.stringify(err));
          }
        }
      );
    });
  },
  methods: {
    back: () => {
      alert("back");
      // $api.history.back()
      $api.ready(() => {
        $api.openWin(
          {
            name: "index-win"
            // pageParam: "qwe"
          },
          true
        );
      });
    }
  }
};
</script>

<style lang="scss">
.musicMain {
  text-align: center;
}
</style>
