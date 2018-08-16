<style scoped>
    .demo-font-img{
        width: 250px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>常用工具库</h1>
            <Anchor title="概述" h2></Anchor>
            <p>这里整合了一些常用的工具库，适用场景不局限于大屏，所有业务都可以用。</p>
            
            <Anchor title="帧动画" h2></Anchor>
            <p>帧动画由每一帧的图片素材动态改变来达到动画的效果，内部使用了requestAnimationFrame这个api来实现,需要引入<a href="./assets/jquery.frameAnimation.js" download>jquery.frameAnimation.js</a></p>
            <alert show-icon><a href="./demos/frameAnimation" target="_blank">参考实例</a></alert>
            <p>使用方法</p>
            <i-code lang="html" bg>{{code.requestAnimationFrame.html}}</i-code>
            <br>
            <i-code lang="css" bg>{{code.requestAnimationFrame.css}}</i-code>
            <br>
            <i-code lang="javascript" bg>{{code.requestAnimationFrame.javascript}}</i-code>

            <Anchor title="滚动加载数字" h2></Anchor>
            <p>每个数字作为一个单独dom，dom的内容为单个数字，需要UI提供数字背景素材，基于jQuery，需要引入<a href="./assets/scrollNumber.rar" download>scrollNumber.js</a></p>
            <alert show-icon>
                <a href="./demos/scrollNumber" target="_blank">参考实例</a>
            </alert>
            <p>使用方法</p>
            <i-code lang="html" bg>{{code.scrollNumber.html}}</i-code>
            <br>
            <i-code lang="css" bg>{{code.scrollNumber.css}}</i-code>
            <br>
            <i-code lang="javascript" bg>{{code.scrollNumber.javascript}}</i-code>

            <Anchor title="元素缓动载入效果" h2></Anchor>
            <p>基于WOW.js + animate.min.css,不依赖jQuery，兼容ie9+(部分效果ie10+),能够实现酷炫的缓动效果。<a href="./assets/WOW.zip" download>下载</a></p>
            <alert show-icon>
                <a href="./demos/wow" target="_blank">参考实例</a>&nbsp;
                <a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a>&nbsp;
                <a href="https://www.cnblogs.com/yangjunfei/p/6746926.html" target="_blank">使用教程</a>
            </alert>
            <p>使用方法</p>
            <i-code lang="html" bg>{{code.WOW}}</i-code>

            <Anchor title="给我画个时钟" h2></Anchor>
            <p>canvas实现一个简单的时钟，不依赖jQuery。需要传入时钟状态，时分秒针的样式,表盘背景图。绘制容器为正方形（因为钟表容器就是正方形）<a href="./assets/giveMeClock.rar" download>下载</a></p>
            <alert show-icon><a href="./demos/giveMeClock" target="_blank">参考实例</a></alert>
            <p>使用方法</p>
            <i-code lang="html" bg>{{code.clock.html}}</i-code>
            <br>
            <i-code lang="css" bg>{{code.clock.css}}</i-code>
            <br>
            <i-code lang="javascript" bg>{{code.clock.javascript}}</i-code>

            <Anchor title="神器-swiper" h2></Anchor>
            <p>功能强大，配置灵活，api齐全，基本能够满足所有的滑动切换效果。<a href="http://www.swiper.com.cn/api/index.html" target="_blank">官方文档</a> <a href="http://www.swiper.com.cn/download/index.html" target="_blank">下载</a></p>
            <iframe src="http://www.swiper.com.cn/demo/110-slides-per-view.html" width="100%" height="300" style="border: 1px solid #f7f7f7;" frameborder="0"></iframe>

            <Anchor title="动态加载数字" h2></Anchor>
            <p>依赖jQuery,能够实现数字动态载入的效果。<a href="https://github.com/aishek/jquery-animateNumber" target="_blank">使用方法</a> <a href="./assets/jquery.animateNumber.min.js" download>jquery.animateNumber.min.js</a></p>
            <alert show-icon><a href="./demos/animateNumber" target="_blank">参考实例</a></alert>
            <p>使用方法</p>
            <i-code lang="javascript" bg>{{code.animateNumber}}</i-code>

            <Anchor title="基于ajax的loading效果" h2></Anchor>
            <p>利用 ajaxStart 和 ajaxStop 来控制loading的显示隐藏，推荐结合layer的loading效果使用（layer兼容性较好）。</p>
            <i-code lang="javascript" bg>{{code.ajaxLoading}}</i-code>

            <Anchor title="animsition.js-页面的动画载入" h2></Anchor>
            <p>基于jquery的一个动画效果插件，使用起来比较简单，常用语大屏项目的页面切换效果。</p>
            <alert show-icon>
                <a href="//git.blivesta.com/animsition/fade/" target="_blank">官网示例及教程</a>
            </alert>
            <p>使用方法</p>
            <i-code lang="html" bg>{{code.animsition.html}}</i-code>
            <br>
            <i-code lang="javascript" bg>{{code.animsition.js}}</i-code>

            <Anchor title="浮动的气泡" h2></Anchor>
            <p>基于jquery实现的气泡生成插件，有两个版本：适合低版本浏览器需求的<a href="./assets/BisBubble.zip" download="">业务系统版本</a>和效果加强的<a href="./assets/BsBubble.zip" download="">大屏版本</a>。</p>
            <alert show-icon>
                <a href="./demos/bubble/BisBubble/demo.html" target="_blank">业务系统版参考实例</a>
                <a href="./demos/bubble/BsBubble/demo.html" target="_blank">大屏版参考实例</a>
            </alert>

            <Anchor title="Fly.js" h2></Anchor>
            <p>元素的飞入效果，比较常见的应用场景是添加购物车效果，也可以做水滴效果等。需要引入<a href="./assets/libs/fly.js" download="">fly.js</a></p>
            <alert show-icon>
                <a href="./demos/fly/fly.html" target="_blank">参考实例</a>
            </alert>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Anchor from '../../components/anchor.vue';
    import code from '../../code/libs';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
              code
            }
        }
    }
</script>