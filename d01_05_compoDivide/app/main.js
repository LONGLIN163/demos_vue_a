
import Vue from "vue";
import MyCompo from "./MyCompo";


// Vue.component('my-component', MyCompo)
// const vm =new Vue({
//     el:"#app",
// })

const vm =new Vue({
    el:"#app",
    components:{
        'my-component': MyCompo,
    },
    data:{
        c:333
    }
})
