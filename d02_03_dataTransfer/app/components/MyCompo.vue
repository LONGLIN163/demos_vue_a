<template>
    <div>
        <h1>MyCompo</h1>
        <!-- <button v-on:click="changea">change a in main</button> -->
        <button v-on:click="changea(888)">change a in main</button>
    </div>
</template>
  
<script>
    export default {
        props:["changea"],
        // methods:{
        //     changea:function(){
        //         this.$emit("changea",888)
        //     }
        // }
    }
</script>
  
<style>

</style> 