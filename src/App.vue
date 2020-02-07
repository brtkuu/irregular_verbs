<template>
    <first-view v-if="firstFlag"></first-view>
</template>
<script>
import FirstView from './components/FirstView.vue';

export default {
  components: {
    FirstView,
  },
  data() {
    return {
      firstFlag: true,
    };
  },
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
