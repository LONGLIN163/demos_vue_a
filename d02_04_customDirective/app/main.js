import Vue from "vue";
import MyCompo from "./components/MyCompo.vue"
//  Vue.directive("red",{
//       inserted:function(el){
//         el.style.background="red";
//     }
//  })
 Vue.directive("setcolor",{
      inserted:function(el,binding){
        console.log(binding)
        el.style.background=binding.value;
    }
 })

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
