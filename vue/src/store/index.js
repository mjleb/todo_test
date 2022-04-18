import Vuex from 'vuex';
import users from './modules/users';



const store = new Vuex.Store({
  modules: {
    users
  }

});
export default store;