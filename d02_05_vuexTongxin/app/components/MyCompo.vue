<template>
    <div>
        haha
        <h1>count is : {{count}}</h1>
        <button @click="addHandler">add</button>
        <button @click="minusHandler">minus</button>
    </div>
</template>
  
<script>
    //import store from "./store.js"
    export default {
        data(){
            return {
                m:6
            };
        },
        methods:{
          addHandler(){
              //store.commit("add")
              this.$store.commit("add")
        },
          minusHandler(){
            //store.commit("minus")
            this.$store.commit("minus")
          }
        },
        computed:{
            count(){
                //return store.state.count
                return this.$store.state.count
            }
        }
    }
</script>
  
<style>


</style> 