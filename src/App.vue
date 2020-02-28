<template>
<div>
    <first-view v-if="$store.state.globalFlags.firstView"></first-view>
    <transition name='slide-fade'>
    <loading-icon v-if="$store.state.globalFlags.loading"></loading-icon>
    </transition>
    <transition name='fade'>
    <test-view v-if="($store.state.globalFlags.testView)" >
    </test-view>
    </transition>
    <transition name='fade'>
    <show-all v-if="($store.state.globalFlags.allView)" >
    </show-all>
    </transition>
</div>
</template>
<script>
import FirstView from './components/FirstView.vue';
import LoadingIcon from './components/Loading.vue';
import TestView from './components/TestView.vue';
import ShowAll from './components/ShowAll.vue';

export default {
  components: {
    FirstView, LoadingIcon, TestView, ShowAll,
  },
  data() {
    return {
      firstFlag: true,
    };
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(15px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  transform: translateY(5px);
  opacity: 0;
}
</style>
