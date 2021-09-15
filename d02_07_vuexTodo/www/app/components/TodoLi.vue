<template>

    <li>
        <input 
            type="checkbox" 
            v-bind:checked="item.done"
            ref="cbox"
            @click="changedone"
        >
        <span 
            v-show="!onEdit" 
            @dblclick="setEdit(true)"
            v-bind:class="{'done':item.done}"
        >{{item.title}}</span>
        <input 
            ref="txt" 
            v-show="onEdit" 
            @keyup.enter="setEdit(false)"  
            type="text" 
            v-bind:value="item.title"
        >
        <!-- <input 
            type="button"
            @click="del" 
            value="x"
        > -->
    </li>

</template>

<script>
    import * as todoTypes from "../store/todo_types"
    export default {
        props:["item"],
        data(){
            return {
                onEdit:false
            }
        },
        methods:{
            setEdit(status){
                this.onEdit=status;
                //this.$refs.txt.focus();

                // after edit, can not do db binding, because it not in db
                // when finished edition, save the value to db
                //console.log(this.$refs.txt.value)
                if(status==false){
                   this.$store.dispatch(todoTypes.CHANGETITLE,{
                       "id":this.item.id,
                       "title":this.$refs.txt.value
                   })
                }
            },
            changedone(){
                this.$store.dispatch(todoTypes.CHANGEDONE,{
                       "id":this.item.id,
                       "done":this.$refs.cbox.checked
                })
            }
        }
    }
</script>

<style>
    .done{
        text-decoration: line-through;
    }

</style>