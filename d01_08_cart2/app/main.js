
import Vue from "vue";
import CartBar from "./components/CartBar";

new Vue({
    el:"#app",
    data:{
      cart:[]
    },
    components:{

    },
    methods:{
        
    },
    ready:function(){
        //console.log("lifeCycle: i am ready!!!")
        //console.log(this)
        const self=this;

        $.get("/api/api.txt", function(data){
          //console.log(data) 
          //console.log(typeof data) // String
          console.log(JSON.parse(data)) // obj
          self.cart=JSON.parse(data).cart;
        })
    },
    components:{
      "cart-bar":CartBar
    },
    computed:{
      "total":function(){
        let sum=0;
        this.cart.forEach(item => {
            if(!item.amount) item.amount=0;
            sum+=item.amount
        });
        return sum;
      }
    }

})
