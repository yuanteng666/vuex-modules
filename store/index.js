import Vue from 'vue';
import Vuex from 'vuex';
import collect from './modules/collect'
import footers from './modules/footers'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		collect,
		footers
	}
});

export default store;