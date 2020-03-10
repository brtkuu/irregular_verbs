<template>
<div>
    <back-button></back-button>
    <div class='testConteiner'>
        <h1 class="title">All Verbs</h1>
    <div class="titles">
        <h2>Present</h2>
        <div class='vl'></div>
        <h2>Past</h2>
        <div class='vl'></div>
        <h2>Past Participle</h2>
    </div>
    <div v-for="(item, index) in verbs" v-bind:key="index">
      <all-element v-bind:element='item'></all-element>
    </div>
    </div>
</div>
</template>
<script>
import AllElement from './Element.vue';
import BackButton from './BackButton.vue';

export default {
  name: 'ShowAll',
  components: {
    AllElement, BackButton,
  },
  data() {
    return {
      verbs: this.$store.state.testData.finalData,
    };
  },
};
</script>
<style lang="scss" scoped>
.vl{
    height: 100%;
    border-right: 1px solid black;
}
h2{
    text-align: center;
    font-size: 20px;
    display: inline;
    flex-basis: 33%;
}
.testConteiner{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 10vh);
    height: 120vh;
    width: 100%;
    grid-gap: 10p
}
.title{
    grid-column: 1/-1;
    text-align: center;
    line-height: 12vh;
    font-size: 50px;
}
input{
    width: 90%;
    margin: 5px;
    border: 1px solid black;
    line-height: 100%;
}
.titles{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
}
</style>
