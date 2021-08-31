import Vue from 'vue'

import axios from 'axios'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 20,
    students:[
      {"name":"xixi", "gender":"female"},
      {"name":"haha", "gender":"male"},
      {"name":"hehe", "gender":"female"},
      {"name":"huhu", "gender":"female"}
    ]
  },
  mutations: {
    // add (state,aNumber) {
    //   state.count+=aNumber
    // },
    // add (state,aNumber) {
    //   state.count+=aNumber
    // },
    // add (state,haha) {
    //   state.count+=haha.m
    // },
    add (state,haha) {
      state.count+=haha
    },
    minus (state) {
      state.count-- 
    }
  },
  getters:{
    femaleStudents:(state) => {
       return state.students.filter(item=>{
         return item.gender=="female"
       })
     }
  },
  actions:{
    // add(context,anotherPayload){
    //   console.log(context)
    //   context.commit("add",anotherPayload) 
    // }
    add(context,anotherPayload){
      axios.get('./api.txt')
      .then(function (res) {
        //console.log(res);
        context.commit("add",res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})

export default store;