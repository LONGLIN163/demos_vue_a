import Vue from 'vue'
import Vuex from 'vuex'
import { createLogger } from 'vuex'
import todoActions from "./actions/todoActions"
import * as todoTypes from "./todo_types"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations:{
    [todoTypes.INIT](state,todos){
      state.todos=todos
    },
    [todoTypes.CHANGETITLE](state,pl){
      state.todos.forEach(item=>{
        if(item.id==pl.id){
          item.title=pl.title
        }
      })
    },
    [todoTypes.CHANGEDONE](state,pl){
      if(item.id==pl.id){
        item.done=pl.done
      }
    },
    [todoTypes.ADD](state,pl){
      state.todos.push({
        "id":state.todos.length,
        "title":pl.title
      })
    }
  },
  getters:{
    all:(state)=>{
      return state.todos
    },
    undo:(state)=>{
      return state.todos.filter((item) => {
        return item.done==false
      })
    },
    done:(state)=>{
      return state.todos.filter((item) => {
        return item.done==true
      })
    }
  },
  actions:{
    ...todoActions
  },
  plugins: [createLogger()],
})

export default store;