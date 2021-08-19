
import Vue from "vue";
import RangeBar from "./components/RangeBar";

const vm =new Vue({
    el:"#app",
    data:{
        color:{
            r:100,
            g:200,
            b:100
        }
    },
    components:{
      "range-bar":RangeBar
    },
    methods:{
        
    }
})
