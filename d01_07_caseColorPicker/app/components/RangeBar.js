import Vue from "vue";
var RangeBar=Vue.extend({
    template: `
    <div>
       {{colorname}}:<input type="range" name="" id="" min="0" max="255" v-model="color[colorname]"> {{color[colorname]}}
    </div>`,
    props: ["color","colorname"],
})

export default RangeBar;