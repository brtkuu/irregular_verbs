import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userChoice: {
      level: '',
      testType: '',
    },
    testData: {
      response: undefined,
      finalData: undefined,
      checkData: [],
      answers: [],
      counter: 0,
    },
    globalFlags: {
      firstView: true, // flase is just for tests
      loading: false, // true is just for tests
      testView: false,
      allView: false,
      showAll: false,
      test: false,
    },
  },
});
