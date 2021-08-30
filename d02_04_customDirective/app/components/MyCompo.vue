<template>
    <div>
       <!-- <div class="box" v-red></div> -->
       <div class="box" v-setcolor:color="green"></div>
       <div class="box" v-setcolor:color="'blue'"></div>
    </div>
</template>
  
<script>
    export default {
    //   directives:{
    //     red:function(el){
    //         el.style.background="red";
    //     }
    //   }
        data(){
            return {
                green:"red"
            }
        }
    }
</script>
  
<style>
   .box{
       height: 200px;
       width: 200px;
       background-color: orange;
   }

</style> 