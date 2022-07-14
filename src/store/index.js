import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    msg: 'store',
    datatable: []
  },

  mutations: {
    SET_TABLE(state, table) {
      state.datatable = table
    }
  },

  actions: {
    async getTable() {
      await axios.get('http://localhost:3000/datatable')
      .then((table) => {
        console.log(table.data);
        this.commit('SET_TABLE', table.data)
      })
    }
  }
})

export default store