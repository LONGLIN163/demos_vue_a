<template>
    <div>
        <input type="text" v-model="something" @keyup.enter="add">
        <input type="button" value="add" @click="add">
        <hr>
        <h3>all todos:</h3>

        <ul>
            <li 
              is="todo-li" 
              v-for="(item, index) in todos" 
              :item="item"
              :key="index"
            ></li>
        </ul>


        <hr>
        <h3>total todos:{{this.$store.state.todos.length}}</h3>
        <h3>done:{{this.$store.getters.done.length}}</h3>
        <h3>undo:{{this.$store.getters.undo.length}}</h3>
        <hr>
        <input type="button" value="show all" @click="checkall"   v-bind:class="{'cur':this.state=='all'}">
        <input type="button" value="show done" @click="checkdone" v-bind:class="{'cur':this.state=='done'}">
        <input type="button" value="show undo" @click="checkundo" v-bind:class="{'cur':this.state=='undo'}">

    </div>
</template>
  
<script>
    import TodoLi from "./TodoLi"
    import * as todoTypes from "../store/todo_types"
    export default {
        data(){
            return {
                something:"",
                state:"all"
            }
        },
        components:{
            TodoLi
        },
        methods:{
            add(){
                this.$store.dispatch(todoTypes.ADD,{
                    //"id": this.something,
                    "title": this.something
                })
                this.something=""
            },
            checkundo(){
                this.state = "undo"
            },
            checkdone(){
                this.state = "done"
            },
            checkall(){
                this.state = "all"
            }
        },
        computed:{
            todos(){
                if(this.state=="all"){
                    return this.$store.state.todos
                }else if(this.state=="undo"){
                    return this.$store.getters.undo
                }else if(this.state=="done"){
                    return this.$store.getters.done
                }
            }
        },
        // pull init data before Dom created
        created(){
           //this.$store.dispatch("init")
           this.$store.dispatch(todoTypes.INIT)
        }
    }
</script>
  
<style> 

.cur{
    background-color: blue;
}
 

</style> 