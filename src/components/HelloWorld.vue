<template>
  <div class="hello">

  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'HelloWorld',
  methods: {
    toggleContainer() {
      store.commit('toggleContainer');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/global_styles/variables';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
