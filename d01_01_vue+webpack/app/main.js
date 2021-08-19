// var [a,b,c]=[1,2,3]
// alert("haha")
// alert(a)

import Vue from "vue";
// new Vue({
//     el:"#app",
//     data:{
//         a:100,
//         gender:"male",
//         students:[
//             {"name":"xixi","gender":"female","age":15},
//             {"name":"haha","gender":"male","age":20},
//             {"name":"hehe","gender":"female","age":10}
//         ]
//     },
//     methods:{
//         add:function() {
//             console.log(this)
//             this.a++;
//         }
//     }
// })

// todo
new Vue({
    el:"#app",
    data:{
        info:"",
        todos:[]
    },
    methods:{
        add:function() {
            this.todos.push(this.info)
            this.info=""
        },
        del:function(index) {
            console.log(index)
            this.todos.splice(index,1)
        }
    }
})