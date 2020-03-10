<template>
    <div  v-if="!this.$store.state.globalFlags.showAll">
    <div v-for="(item, index) in verbs" v-bind:key="index">
      <test-element v-bind:element="item"></test-element>
    </div>
    </div>
</template>
<script>
import TestElement from './TestElement.vue';

export default {
  name: 'Test',
  components: {
    TestElement,
  },
  data() {
    return {
      verbs: this.$store.state.testData.finalData,
    };
  },
  mounted() {
    const emptyElements = document.querySelectorAll('#testElement');
    // console.log(emptyElements);
    emptyElements.forEach((element, index) => {
      if (element.innerText === '') {
        // eslint-disable-next-line no-param-reassign
        element.innerHTML = `<input id='${index}' class="inputTest" style="
       padding: 2px; font-size: 15px; text-align: center; border: 1px dashed black; width: 80px" type="text">`;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
