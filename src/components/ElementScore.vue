<template>
  <div class="element" v-html="this.finallElement"></div>
</template>
<script>
export default {
  name: 'Element',
  props: { element: Object, scoreElement: Array },
  data() {
    return {
      finallElement: undefined,
    };
  },
  methods: {
    empty() {
      let result = '';
      // eslint-disable-next-line eqeqeq
      // eslint-disable-next-line max-len
      if (this.$store.state.testData.answers[this.$store.state.testData.counter] !== this.$store.state.testData.checkData[this.$store.state.testData.counter]) {
        result = `<span style="color: red">${this.$store.state.testData.answers[this.$store.state.testData.counter]}</span>`;
      }
      // eslint-disable-next-line max-len
      if (this.$store.state.testData.answers[this.$store.state.testData.counter] === this.$store.state.testData.checkData[this.$store.state.testData.counter]) {
        result = `<span style="color: green">${this.$store.state.testData.answers[this.$store.state.testData.counter]}</span>`;
      }
      this.$store.state.testData.counter += 1;
      return result;
    },
  },
  mounted() {
    this.finallElement = `<h3>${this.element.Present !== '' ? this.element.Present : this.empty()}</h3><h3>${this.element.Past !== '' ? this.element.Past : this.empty()}</h3><h3>${this.element.Past_Participle !== '' ? this.element.Past_Participle : this.empty()}</h3>`;
  },
};
</script>
<style lang="scss" scoped>
.element{
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
  align-items: center;
  height: 50px;
  h3{
    flex-basis: 33%;
    text-align: center;
  }
}
</style>
