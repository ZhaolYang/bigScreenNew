<style scoped>

</style>
<template>
    <i-article>
        <article>
            <h1>时间</h1>
            <Anchor title="规范" h2></Anchor>
            <p>大屏时间需要动态展示，通过js定时器对页面进行动态渲染。</p>
            <p id="bs-time" ref="time"></p>
            <i-code lang="js" bg>{{ code.base }}</i-code>
            <p>该代码片段为常用时间获取方法及调用方法，可根据实际需求改写。</p>
            <Alert show-icon>
                <span>时间样式请根据实际设计稿样式进行重构！</span>
            </Alert>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/time';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                timer: null
            }
        },
        computed: {
        },
        methods: {
            getNow() {
                var now = new Date();
                var year = now.getFullYear();
                var month = now.getMonth() + 1;
                var weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                if (month < 10) month = "0" + month;
                var day = now.getDate();
                var weekday = now.getDay() - 0;
                var hours = now.getHours();
                if (hours < 10) hours = "0" + hours;
                var minutes = now.getMinutes();
                if (minutes < 10) minutes = "0" + minutes;
                var seconds = now.getSeconds();
                if (seconds < 10) seconds = "0" + seconds;
                var timeStr = year + '年' + month + '月' + day + '日 ' + weekArr[weekday] + ' ' + hours + ':' + minutes + ':' + seconds;
                return timeStr;
            }
        },
        mounted: function() {
            let time = this.$refs.time;
            this.timer = setInterval(()=>{
                time.innerHTML = this.getNow();
            },1000)
        },
        beforeDestroy: function() {
            clearInterval(this.timer);
        }
    }
</script>