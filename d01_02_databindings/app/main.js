
import Vue from "vue";

const vm =new Vue({
    el:"#app",
    data:{
        a:1,
        b:2,
        c:3,
        somehtml:`
          <ul>
            <li>haha</li>
            <li>haha</li>
            <li>haha</li>
          </ul>
        `,
        txt:"hasdfasdfasdfDDfadfaE",
        boxShow:true
    },
    methods:{
        add: function(){
            this.a++;
        },
        min: function(){
            this.a--;
        },
        hideAndShow:function() {
            this.boxShow=!this.boxShow;
        }
    }
})

// 1. get a properties "vm." directly, not vm.data
//alert(vm.a)

// 2. we can get "all" data obj, use "$data".
//console.log(vm.data) // incorrect
//console.log(vm.$data) 

// 3. we can add new properties after new instance created, but it would not trigger view updates.
//vm.d=4;
//alert(vm.d) // it is exist,
//console.log(vm.$data) // but not in the obj 

vm.$watch("a",function(newvalue,oldvalue) {
    console.log(newvalue,oldvalue)
})