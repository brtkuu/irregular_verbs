<template>
  <div class="element"><h3>{{ element.Present }}</h3><h3>{{ element.Past }}</h3>
  <h3>{{ element.Past_Participle }}</h3></div>
</template>
<script>
export default {
  name: 'TestElements',
  props: { element: Object },
  data() {
    return {
      first: 'ESSA',
    };
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
