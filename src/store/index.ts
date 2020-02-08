import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userChoice: {
      level: '',
      testType: '',
    },
    globalFlags: {
      firstView: true, // flase is just for tests
      loading: false, // true is just for tests
    },
  },
});
