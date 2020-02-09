<template>
<transition name="firstTransition">
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
    <div @click="start()" class="startBtn" :class="{isActive: !buttonActive}">
        <h2>Let's do it!</h2>
    </div>
    <div class="startBtn">
        <h2>Show all</h2>
    </div>
  </div>
</transition>
</template>
<script>
import Swal from 'sweetalert2';
import axios from 'axios';

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
    async start() {
      if (this.buttonActive) {
        this.$store.state.globalFlags.firstView = false;
        setTimeout(() => {
          this.$store.state.globalFlags.loading = true;
        }, 600);
        // eslint-disable-next-line arrow-body-style
        await axios.get('https://sheet.best/api/sheets/d44602f4-c63f-468c-af8b-dac26d1d7f82?_limit=10').then((response) => {
          this.$store.state.testData.finalData = response.data;
          console.log(this.$store.state.testData.finalData);
          setTimeout(() => {
            this.$store.state.globalFlags.loading = false;
            setTimeout(() => {
              this.$store.state.globalFlags.testView = true;
            }, 300);
          }, 600);
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'You have to choose level and test type',
          icon: 'error',
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.conteiner{
  border: 2px solid black;
  height: 120vh;
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
      cursor: pointer;
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
    cursor: pointer;
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
 .firstTransition-enter-active, .firstTransition-leave-active {
  transition: all 0.8s;;
  overflow: hidden;
}
.firstTransition-enter, .firstTransition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
  border: 0;
}
</style>
