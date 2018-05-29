<template>
  <div class="md-view" ref="ct">
    {{src}}
  </div>
</template>

<script>
import marked from '../libs/marked'
import axios from 'axios'
import 'highlight.js/styles/github.css'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
})

export default {
  data() {
    return {

    }
  },
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this._getSrc(this.src)
  },
  methods: {
    _getSrc(src) {
      if(src === '') return;
      axios.get(src).then((res)=>{
        const data = res.data
        this.$refs.ct.innerHTML = marked(data)
      })
    }
  }
}
</script>

<style scope>
pre {
  background-color: #f7f7f7;
}
</style>
