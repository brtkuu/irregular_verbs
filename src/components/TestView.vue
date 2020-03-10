<template>
<div>
<back-button></back-button>
    <div class='testConteiner'>
        <h1 class="title">GOOD LUCK!</h1>
    <div class="titles">
        <h2>Present</h2>
        <div class='vl'></div>
        <h2>Past</h2>
        <div class='vl'></div>
        <h2>Past Participle</h2>
    </div>
    <test v-if="!checkScore"></test>
    <section v-if="checkScore">
    <div  v-for="(item, index) in verbs" :key="index">
        <element-score v-bind:element="item"></element-score>
    </div>
    </section>
    <div @click="checkTest()" class='checkBtn'>Check!</div>
    </div>
</div>
</template>
<script>
import BackButton from './BackButton.vue';
import Test from './Test.vue';
import ElementScore from './ElementScore.vue';

export default {
  name: 'TestView',
  components: {
    BackButton, Test, ElementScore,
  },
  data() {
    return {
      verbs: this.$store.state.testData.finalData,
      checkScore: false,
    };
  },
  methods: {
    checkTest() {
      this.checkScore = true;
      const inputTest = document.querySelectorAll('.inputTest');
      const answers = [];
      inputTest.forEach((row, index) => {
        answers.push(row.value);
      });
      const allElements = document.querySelectorAll('input');
      allElements.forEach((element) => {
        this.$store.state.testData.answers.push(element.value);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.checkBtn{
    cursor: pointer;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 0px;
    font-size: 30px;
    border: 1px solid black;
    border-radius: 4px;
    width: 50%;
    height: 40px;
    background-color: rgba(65, 65, 65, 0.411);
}
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
    grid-template-rows: 15vh 10vh;
    height: 120vh;
    width: 100%;
    grid-gap: 10p
}
.title{
    grid-column: 1/-1;
    text-align: center;
    // line-height: 12vh;
    font-size: 50px;
    margin-top: 10px;
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
