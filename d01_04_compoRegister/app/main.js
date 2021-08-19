
import Vue from "vue";

var SubCompo=Vue.extend({
    template: '<h2>A sub component!</h2>'
})

var MyCompo=Vue.extend({
    template: `
    <div>
        <h1>A custom component!</h1>
        <sub-component></sub-component>
        <my-component2></my-component2>
        <my-component3></my-component3>
    </div>`,
    components:{
        'sub-component': SubCompo,
        'my-component3':{
            template: `<div>A custom component3!</div>`
        }
    }
})


Vue.component('my-component', MyCompo)

Vue.component('my-component2',{
    template: `<div>A custom component2!</div>`
})

const vm =new Vue({
    el:"#app",
})
