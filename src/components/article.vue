<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="17">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <Affix :offset-top="75">
                            <div class="catalogue" v-show="list.length">
                                <card dis-hover>
                                    <div class="catalogue-title">
                                        <template>目录</template>
                                    </div>
                                    <div class="catalogue-content">
                                        <ul>
                                            <li v-for="item in list">
                                                <a :href="'#' + item.path" @click.stop.prevent="handleClickLink(item.path)">{{ item.title }}</a>
                                            </li>
                                            <!-- <li v-if="need_api">
                                                <a href="#API" @click.stop.prevent="handleClickLink('API')">API</a>
                                            </li> -->
                                        </ul>
                                    </div>
                                </card>
                            </div>
                        </Affix>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
                <Row>
                    <i-col span="15">
                        <h4>
                            <Icon type="link"></Icon>
                            相关站点
                        </h4>
                        <ul>
                            <li>
                                <a href="http://192.168.201.159/fedoc/?file=home-%E9%A6%96%E9%A1%B5" target="_blank">前端团队在线文档</a>
                            </li>
                            <li>
                                <a href="http://oa.epoint.com.cn" target="_blank">新点网络协同办公系统</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <div class="footer-aside">
                            <div class="footer-logo">
                                <img src="../images/logo.png">
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';

    export default {
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                need_api: false,
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang,
                adCarousel: 0
            }
        },
        methods: {
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/introduction',
                    '/docs/guide/start',
                    '/docs/guide/theme',
                    '/overview',
                    '/docs/guide/update',
                    '/docs/guide/develop-rules',
                    '/docs/guide/vue-develop-rules'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            },
            // 控制锚点跳转
            handleClickLink (id) {
                const top = document.getElementById(id).offsetTop;
                window.location.hash = id;
                let scroll_top = top + 15;
                if (id === 'API') scroll_top -= 150;
                window.scrollTo(0, scroll_top);
            },
            handleAsideAd (name, isQQGroup = false) {
                _hmt.push(['_trackEvent', name, 'click']);
                if (isQQGroup) {
                    this.ask = true;
                }
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {


            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            // 有示例时，显示示例的目录，没有，显示标题为目录
            if (examples.length) {
                this.need_api = true;
                for (let i = 0; i < examples.length; i++) {
                    const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                    this.list.push({
                        title: title,
                        path: title
                    });
                }
            } else {
                this.need_api = false;
                const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
                for (let i = 0; i < headers.length; i++) {
                    const title = headers[i].querySelectorAll('h2')[0];
                    if (title) {
                        const title_name = title.innerHTML;
                        const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                        this.list.push({
                            title: title_name,
                            path: path
                        });
                    }
                }
            }

            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>