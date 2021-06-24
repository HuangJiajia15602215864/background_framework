<template>
  <div>
    <button @click="export2Excel">导出</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      export2Excel() {
        var a = document.createElement("a");
        var url = window.URL.createObjectURL(
          new Blob([this.gethtml()], {
            type: ''
          })
        );
        a.href = url;
        a.download = "file.html";
        a.click();
        window.URL.revokeObjectURL(url);
      },

      gethtml() {
        const img1 = "http://hsjg.rapidinnovative.com/img/feature/1.png"
        let html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="http://hsjg.rapidinnovative.com/owlcarousel/owl.carousel.css">
    <link rel="stylesheet" href="http://hsjg.rapidinnovative.com/css/index.css">
    <title>幻世九歌</title>
    <script src='http://hsjg.rapidinnovative.com/js/jquery-3.1.1.min.js'></scr`+`ipt>
    <script src="http://hsjg.rapidinnovative.com/owlcarousel/owl.carousel.js"></scr`+`ipt>
    <script src="http://hsjg.rapidinnovative.com/js/run.js"></scr`+`ipt>
</head>
<body>
    <div>
        <div class="mobile-contanier">
            <div class="top">
                <div class="top-bar">
                    <div class="top-button" onclick="download()"></div>
                </div>
            </div>
            <div class="middle">
                <div class="middle-button" onclick="download()"></div>
            </div>
            <div class="bottom">
                <div class="game-features">
                    <div class="item active"><img src=${img1} alt="..."></div>
                    <div class="item"><img src="http://hsjg.rapidinnovative.com/img/feature/2.png" alt="..."></div>
                    <div class="item"><img src="http://hsjg.rapidinnovative.com/img/feature/3.png" alt="..."></div>
                    <div class="item"><img src="http://hsjg.rapidinnovative.com/img/feature/4.png" alt="..."></div>
                    <div class="item"><img src="http://hsjg.rapidinnovative.com/img/feature/5.png" alt="..."></div>
                </div>
                <div class="game-control">
                    <div class="switch" onclick="jump(0)"></div>
                    <div class="switch" onclick="jump(1)"></div>
                    <div class="switch" onclick="jump(2)"></div>
                    <div class="switch" onclick="jump(3)"></div>
                    <div class="switch" onclick="jump(4)"></div>
                </div>
                <div class="download-buttom" onclick="download()">
                    <img src="../img/btn/bottom.png"/>
                </div>
                <div class="company-info">
                    <div>深圳市迅龙创威网络技术有限公司</div>
                    <div>深圳市南山区高新南四道18号创维半导体设计大厦东座1801</div>
                    <div>电话：26901915-8086 | 粤B2-20160190</div>
                </div>
            </div>
        </div>
    </div>
    <script>
        (function (doc, win) {
            let docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    let clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    if (clientWidth >= 640) {
                        docEl.style.fontSize = '100px';
                    } else {
                        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                    }
                };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    </scr`+`ipt>
</body>

</html>
`;
return html;
},
}
}

</script>
<style lang="scss" scoped>
</style>
