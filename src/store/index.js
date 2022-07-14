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
      await axios.get('http://localhost:3000/details')
      .then((response) => {
        response.data.forEach(detail => {
          detail.id = response.data.indexOf(detail) + 1
        })
        console.log(response.data);
        this.commit('SET_TABLE', response.data)
      })
    }
  }
})

export default store