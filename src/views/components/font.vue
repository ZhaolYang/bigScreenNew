<style scoped>
    .demo-font-img{
        width: 250px;
    }
    .api table{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Font 字体</h1>
            <Anchor title="概述" h2></Anchor>
            <p>大数据的展示常常会用到不同的字体，用于区分数据和描述内容，能够突出重点，通常情况下，由于所用特殊字体在用户电脑上是不一定存在的，所以需要另外引入第三方字体资源，通常使用ttf格式字体包，如果需要兼容低版本浏览器（如ie8），则需要另外引入eot字体包，不过按照目前大屏开发的趋势，相较其他业务线，大屏开发对于兼容性的要求偏低，用到eot资源的场景相对较少，但并不排除兼容低版本浏览器的情况，所以实际开发还是需要按需引入。</p>
            <Alert show-icon>针对单独大屏，考虑到中文字体包文件较大，可以采用直接在大屏电脑上安装字体包，提高加载速度和用户体验。</Alert>
            <Anchor title="字体预览" h2></Anchor>
            <ul>
                <li>中文字体</li>
                <img class="demo-font-img" src="../../images/HappyZcool.png">
                <p>
                    <a href="./assets/font/HappyZcool.rar" download>HappyZcool</a>
                </p>
                <li>英文字体</li>
                <img class="demo-font-img" src="../../images/DS-digitalbold.png">
                <p>
                    <a href="./assets/font/DS-digitalbold.rar" download>DS-digitalbold</a>
                </p>
                <img class="demo-font-img" src="../../images/Digiface Regular.png">
                <p>
                    <a href="./assets/font/Digiface Regular.rar" download>Digiface Regular</a>
                </p>
                <img class="demo-font-img" src="../../images/LcdD.png">
                <p>
                    <a href="./assets/font/LcdD.rar" download>LcdD</a>
                </p>
            </ul>
            <Anchor title="字体使用示例" h2></Anchor>
            <i-code lang="css" bg>
@font-face {
    font-family: 'DS-digitalbold';
    src: url("./DS-DigitalBold.TTF"),
    url("./ds-digitalbold-webfont.eot");
}

.num {
    font-family: 'DS-digitalbold';
}
            </i-code>
            <br>
            <Alert show-icon>
                更多关于使用三方web字体内容请参考<a href="http://www.runoob.com/cssref/css3-pr-font-face-rule.html" target="_blank">CSS3 @font-face 规则</a>
            </Alert>

            <Anchor title="字体格式转换" h2></Anchor>
            <p>部分项目UI提供的字体包可能是其他格式的，此处就需要将字体转换为ttf格式</p>
            <p>转换工具为<a href="./assets/font/FontCreator.zip" download>FontCreator</a></p>
            <p>使用方法：下载解压后直接打开需要转换格式的字体包，菜单选择另存为-选择需要转换的格式即可</p>
            <Alert show-icon>该方法只支持转换为ttf，足够应付大部分需求。如需转换为其他格式，可以使用<a href="https://www.fontsquirrel.com/tools/webfont-generator">webfont-generator</a></Alert>
            <p>另外，针对一些字体，项目中实际需要用到的可能只有数字字符或英文字符，可以使用<a href="https://github.com/ecomfe/fontmin-app/releases" target="_blank">字体子集化工具</a></p>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {

            }
        }
    }
</script>