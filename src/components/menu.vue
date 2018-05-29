<style>
    .wrapper-header-nav .ivu-menu-item i{
        margin-right: 6px;
    }
    .wrapper-header .ivu-menu{
        z-index: 901;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
</style>
<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <img src="../images/logo.png">
            </router-link>
            <div class="wrapper-header-nav-search">
                <i-select
                    ref="select"
                    v-model="search"
                    filterable
                    :placeholder="searchText"
                    :not-found-text="notFoundText"
                    @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[1] }}</template>
                    </i-option>
                </i-select>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="component">
                    <Icon type="ios-keypad"></Icon>
                    组件
                </Menu-item>
            </div>
        </div>
    </Menu>
</template>
<script>
    import navigate from '../config/navigate';
    import Config from '../config/config';
    import bus from './bus';

    export default {
        props: {
            activeKey: String
        },
        data () {
            return {
                search: '',
                navigateList: [],
                liveDot: false,
                currentActiveKey: this.activeKey,
                searchText: '搜索组件...',
                notFoundText: '没有找到相关组件',
                lang: 'zh-CN'
            };
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        methods: {
            handleSearch (path) {
                if (this.lang === 'en-US') path += '-en';
                this.search = '';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.push(path);
                    }, 300);
                });
            },
            handleSelect (type) {
                if (type === 'donate') {
                    bus.$emit('on-donate-show');
                } else if (type === 'github') {
                    window.open('https://github.com/iview/iview');
                } else if (type === 'guide') {
                    this.$router.push(navigate.guide[0].path);
                } else if (type === 'component') {
                    this.$router.push(navigate.beforeComponents[0].path);
                } else if (type === 'practice') {
                    this.$router.push(navigate.practice[0].path);
                } else if (type === 'cli') {
                    this.$router.push('/cli');
                } else if (type === 'live') {
                    this.$router.push('/live');
                } else if (type === 'iview-loader') {
                    this.$router.push('/docs/guide/iview-loader');
                } else if (type === 'iview-admin') {
                    window.open('https://github.com/iview/iview-admin');
                } else if (type === 'iview-area') {
                    window.open('https://github.com/iview/iview-area');
                }
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/start',
                    '/docs/guide/i18n',
                    '/docs/guide/theme',
                    '/docs/guide/iview-loader',
                    '/overview',
                    '/docs/guide/update'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.currentActiveKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.currentActiveKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.currentActiveKey = 'live';
                } else {
                    this.currentActiveKey = 'guide';
                }
            },
            handleVersion (v) {
                if (v == 1) {
                    window.location.href = 'http://v1.iviewui.com';
                }
            }
        },
        created () {
            this.lang = this.$lang;
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
            // 设置直播 dot
            const liveDotVersion = window.localStorage.getItem('liveVersion');
            if (liveDotVersion) {
                this.liveDot = liveDotVersion < Config.liveVersion;
            } else {
                this.liveDot = true;
            }
        }
    };
</script>