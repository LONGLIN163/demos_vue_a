import Vue from "vue";
import SubCompo from "./SubCompo"


var MyCompo=Vue.extend({
    template: `
    <div>
        <div>
           <h1>A custom component, its a is {{a}}! the c in in the  parent is {{c}} </h1>
           <input type="button" value=" + " @click="add" />
        </div>

        <sub-component></sub-component>
        <my-component3></my-component3>
    </div>`,
    components:{
        'sub-component': SubCompo,
        'my-component3':{
            template: `<div>A custom component3!</div>`
        }
    },
    data:function(){
        return {
            a:111,
            b:2
        }
    },
    methods:{
        add:function(){
            this.a++;
        }
    }
})

export default MyCompo;