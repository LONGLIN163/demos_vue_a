<template>
    <div>
        <h1>MyCompo</h1>
        <ul>
            <li v-for="(value,index) in arr" :key="index">{{value}}-{{index}}</li>
        </ul>
        <ul>
            <li v-for="(v,k) in obj">{{k}}-{{v}}</li>
        </ul>
        <!-- <h1>{{a}}</h1> -->
        <h1>{{capitalA}}</h1>
    </div>
</template>
  
<script>
    export default {
        props:["a"],
        beforeCreate(){
            console.log("beforeCreate")
        },
        created(){
            console.log("created")
        },
        mounted(){
            console.log("mounted")
        },
        beforeMount(){
            console.log("beforeMount")
        },
        data(){
            return {
                arr:["xixi","haha","hehe"],
                obj:{
                    "name":"vue",
                    "age":15,
                    "gender":"female"
                }
            }
        },
        computed: {
            capitalA: function () {
                return this.a[0].toUpperCase()+this.a.slice(1)
            }
        }
    }
</script>
  
<style>

</style> 