
<template>
    <transition name="slidedown"> 
      <div id="list">
         {{this.$route.query.msg}}
      </div>
    </transition>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      items: [{ text: "第一组" }, { text: "第二组" }, { text: "第三组" }]
    };
  }
};
</script>

<style scoped>
.slidedown-enter {
  opacity: 0;
}

.slidedown-leave {
  opacity: 1;
}

.slidedown-enter-active {
  transition: opacity 0.5s;
  /* background-color: red; */
}

.slidedown-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
  /* background-color: green; */
}
</style>