<template>
    <div>
        haha
        <h1>count is : {{count}}</h1>
        <button @click="addHandler(m)">add</button>
        <button @click="minusHandler">minus</button>
        <input type="text" v-model.number="m">
        <h1>female is : {{females}}</h1>
    </div>
</template>
  
<script>
    //import store from "./store.js"
    export default {
        data(){
            return {
              m:3
            }
        },
        methods:{
          addHandler(m){
              //store.commit("add")
              //this.$store.commit("add",m)

            //   this.$store.commit("add",{
            //       m:this.m
            //    }

            //   this.$store.dispatch("add",{
            //       m:this.m
            //    })

              this.$store.dispatch("add",{
                  m:this.m
               })
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
            },
            females(){
                return this.$store.getters.femaleStudents;
            }

        }
    }
</script>
  
<style>


</style> 