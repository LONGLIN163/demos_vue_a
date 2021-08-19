
import Vue from "vue";
import MyCompo from "./MyCompo";

const vm =new Vue({
    el:"#app",
    components:{
        'my-component': MyCompo,
    },
    data:{
        c:333,
        d:{
            v:8888
        }
    }
})
