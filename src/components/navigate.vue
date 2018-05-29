<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="navigate">
        
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'guide'">
            <Menu-item v-for="item in navigate.guide" :key="item.path" :name="item.path">
                <template>{{ item.title }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item.path" :name="item.path">
                <template v-if="item.title !== '更新日志'">
                    <template>{{ item.title }}</template>
                </template>
                <template v-if="item.title === '更新日志'">
                    <Badge dot>
                        <template>{{ item.title }}</template>
                    </Badge>
                </template>
            </Menu-item>
            <div class="navigate-group">组件</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="item.type">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    <template>
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                </Menu-item>
            </Menu-group>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'practice'">
            <Menu-item v-for="item in navigate.practice" :key="item.path" :name="item.path">
                <template>{{ item.title }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'live'">
            <Menu-item v-for="item in navigate.live" :key="item.path" :name="item.path">
                <template>{{ item.title }}</template>
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
    import navigate from '../config/navigate';
    import version from '../config/config';
    import bus from './bus';

    export default {
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                navigate: navigate,
                showDot: false,
                activeKey: this.$route.path,
                lang: this.$lang,
                showAd: false
            }
        },
        methods: {
            handleSelect (path) {
                if (this.lang === 'en-US') path += '-en';
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            }
        },
        created () {
            this.lang = this.$lang;
            const path = this.$route.path;
            this.activeKey = path;
        },
        mounted () {
            // 判断是否已阅读更新日志
            const dotVersion = window.localStorage.getItem('version');
            if (dotVersion) {
                this.showDot = dotVersion < version.version;
            } else {
                this.showDot = true;
            }
        }
    }
</script>