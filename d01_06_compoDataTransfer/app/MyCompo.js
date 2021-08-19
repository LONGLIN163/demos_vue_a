import Vue from "vue";
var MyCompo=Vue.extend({
    template: `
    <div>
        <div>
           <h1> This is MyCompo, its a is {{a}}! </h1>
           <h1> MyCompo get c from root: {{c}} </h1>
           <h1> MyCompo get d from root: {{d|json}} </h1>
           <input type="button" value=" + " @click="add" />
           <input type="text" v-model="d.v" />
        </div>
    </div>`,
    props: ["c","d"],
    data:function(){
        return {
            a:111,
            b:2
        }
    },
    methods:{
        add:function(){
            //this.a++;
            this.c++;
            this.d.v++; 
        }
    }
})

export default MyCompo;