<!-- <template>
    <div class="example">{{ msg }}</div>
</template>
  
<script>
    export default {
        data () {
        return {
            msg: 'Hello world!'
          }
        }
    }
</script>
  
<style>
    .example {
        color: red;
    }
</style>  -->


<template>
    <h1>haha</h1>
</template>
  
<script>
    export default {
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
        }
    }
</script>
  
<style>

</style> 