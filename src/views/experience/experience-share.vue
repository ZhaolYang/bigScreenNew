<template>
  <i-article>
        <article>
            <p>工作经验分享，欢迎投稿！</p>
            <div v-for="(item, index) in experiences" :key="index">
              <Anchor :title="item.title" h2 class="hidden"></Anchor>
              <Collapse>
                <Panel >
                  {{item.title}}
                  <div slot="content">
                    <mdView :src="item.src"></mdView>
                  </div>
                </Panel>
              </Collapse>
            </div>
            
        </article>
    </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Anchor from "../../components/anchor.vue";
import mdView from "../../components/md-view.vue";

export default {
  components: {
    iArticle,
    Anchor,
    mdView
  },
  data() {
    return {
      experiences: [{
        title: '你需要知道的requestAnimationFrame',
        src: 'assets/md/requestAnimationFrame.md'
      },{
        title: '常见设计模式',
        src: 'assets/md/designMode.md'
      }]
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style>
.hidden {
  opacity: 0;
  height: 20px;
  overflow: hidden;
}
</style>
