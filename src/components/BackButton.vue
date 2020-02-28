<template>
  <div @click="back()" class='backButton'>
      <h3>BACK</h3>
  </div>
</template>
<script>
export default {
  name: 'BackButton',
  methods: {
    back() {
      this.$store.state.globalFlags.firstView = true;
      this.$store.state.globalFlags.testView = false;
      this.$store.state.globalFlags.allView = false;
      this.$store.state.globalFlags.showAll = false;
      this.$store.state.globalFlags.test = false;
      this.$store.state.userChoice.level = '';
      this.$store.state.userChoice.testType = '';
    },
  },
};
</script>
<style lang="scss" scoped>
.backButton{
    margin-top: 0;
    font-size: 20px;
    height: 30px;
    cursor: pointer;
    background-color:  rgba(237, 200, 243, 0.699);
}
h3{
  margin: 5px 0 0 5px;
}
</style>
