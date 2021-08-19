
import Vue from "vue";

const vm =new Vue({
    el:"#app",
    data:{
        a:5,
        b:10,
        c:6,
        getA2:function(){ // we also can put a func here as in angular. but not recommented
            return this.a*this.a;
        },
        iscur:true,
        ashow:true,
        man:false,
        //arr:["xixi","haha","hehe","sisi"]
        arr:[
            {"sid":10001, "name":"xixixi"},
            {"sid":10002, "name":"hahaha"},
            {"sid":10003, "name":"hehehe"},
        ]
    },   
    methods:{
        aadd: function(){
            this.a++;
        },
        aminus: function(){ 
            this.a--;
        },
        badd: function(){
            this.b++; // if b is related with a, b can not be change from here.
        },
        changeShow:function(){
            this.ashow=!this.ashow;
        },
        changeArr:function(){
            //this.arr.push(Math.random())

            //this would not trigger view updates,because vue can not watch the change of an arr.
            //only few fixed method can trigger view updates.
            //this.arr[0]="aa"

            //this.arr.$set(0,"aa");// but we also can call its setter to change its value.

            // but we can change entire arr
            //this.arr=["xixi","haha","hehe","sisi",2,2,2,2,2] // we need use track-by in the html,otherwise 2 will be merged.

            this.arr = [
                {"sid":10001, "name":"www"},
                {"sid":10004, "name":"eee"},
            ]
            
        }
        
    },
    computed:{
        // b is not inside data, and b is function depending on "a"
        b:function(){
            return this.a*this.a
        }
    }
})

