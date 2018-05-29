<template>
  <i-article>
        <article>
            <Anchor title="业务内容" h2></Anchor>
            <p>此栏目用于分享大数据相关业务内容。</p>
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
    };
  },
  methods: {
    _linkClick() {
      
    }
  },
  mounted() {
    this._linkClick();
  }
};
</script>