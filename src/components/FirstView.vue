<template>
  <div class="conteiner">
    <h1 class="firstView_title">Irregular verbs</h1>
      <div v-on:click="levelMenu($event)" class="buttonConteinerOne">
        <div class="buttonConteinerOne_btn">A2</div>
        <div class="buttonConteinerOne_btn">B1</div>
        <div class="buttonConteinerOne_btn">B2</div>
        <div class="buttonConteinerOne_btn">C1</div>
      </div>
      <div v-on:click="typeMenu($event)" class="buttonConteinerOne">
        <div class="buttonConteinerOne_btn">Short</div>
        <div class="buttonConteinerOne_btn">Long</div>
        <div class="buttonConteinerOne_btn">Random</div>
      </div>
    <div class="startBtn" :class="{isActive: !buttonActive}">
        <h2>Let's do it!</h2>
    </div>
    <div class="startBtn">
        <h2>Show all</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FirstView',
  data() {
    return {
      // eslint-disable-next-line no-self-compare
      buttonOneActive: false,
      buttonTwoActive: false,
      buttonActive: (this.buttonOneActive && this.buttonTwoActive),
    };
  },
  computed: {
    allLevelElement() {
      return document.querySelectorAll('.buttonConteinerOne_btn');
    },
  },
  methods: {
    levelMenu(event) {
      this.$store.state.userChoice.level = event.target.innerHTML;
      this.buttonOneActive = true;
      this.colorChange();
    },
    typeMenu(event) {
      this.$store.state.userChoice.testType = event.target.innerHTML;
      this.buttonTwoActive = true;
      this.colorChange();
    },
    colorChange() {
      this.buttonActive = (this.buttonOneActive && this.buttonTwoActive);
      console.log(this.buttonActive);
      const allEle = this.allLevelElement;
      allEle.forEach((element) => {
        // eslint-disable-next-line max-len
        if (element.innerHTML === this.$store.state.userChoice.level) {
          // eslint-disable-next-line no-param-reassign
          element.style.backgroundColor = 'rgba(172, 127, 179, 0.699)';
        } else if (element.innerHTML === this.$store.state.userChoice.testType) {
          // eslint-disable-next-line no-param-reassign
          element.style.backgroundColor = 'rgba(172, 127, 179, 0.699)';
        } else {
          // eslint-disable-next-line no-param-reassign
          element.style.backgroundColor = 'rgba(237, 200, 243, 0.699)';
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.conteiner{
  height: 110vh;
  width: 100%;
  background-color: rgba(237, 200, 243, 0.699);
}
  .firstView_title{
    text-align: center;
    padding-top: 30px;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.747);
  }
  .buttonConteinerOne{
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    // height: 50px;
    width: 90%;
    border: 1px solid black;
    border-radius: 6px;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.212);
    &_btn{
      flex-basis: 20%;
      border: 1px solid black;
      height: 40px;
      margin: 6px 0;
      border-radius: 6px;
      font-size: 30px;
      text-align: center;
      line-height: 40px;
      &:focus{
        color: pink;
      }
    }
    @media (min-width: 500px) {
      width: 40%;
    }
  }
  .startBtn{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 50px;
    font-size: 30px;
    border: 1px solid black;
    border-radius: 4px;
    width: 50%;
    background-color: rgba(65, 65, 65, 0.411);
    @media (min-width: 500px) {
      width: 25%;
    }
    &:focus{
        color: pink;
      }
  }
 .isActive{
   opacity: 0.45;
 }
</style>
