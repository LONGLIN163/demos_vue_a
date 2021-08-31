import Vue from "vue";
import MyCompo from "./components/MyCompo.vue"
import store from "./components/store"

new Vue({
    el:"#app",
    store,
    data:{
      a:222
    },
    components:{
       MyCompo
    }
})
