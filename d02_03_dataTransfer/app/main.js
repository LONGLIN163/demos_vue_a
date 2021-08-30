import Vue from "vue";
import MyCompo from "./components/MyCompo.vue"

new Vue({
    el:"#app",
    data:{
      a:222
    },
    components:{

    },
    methods:{
      changea:function(number){
        this.a+=number;
      }  
    },
    components:{
       MyCompo
    },
    computed:{

    }
})
