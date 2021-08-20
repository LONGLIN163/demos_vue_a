import Vue from "vue";
var CartBar=Vue.extend({
    template: `
    <tr>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
            <button @click="minus"> - </button>
            {{item.quantity}}
            <button @click="add"> + </button>
        </td>
        <td> {{calc()}}</td>
        <td> {{amount}}</td>
    </tr>`,
    props: ["item"],
    methods:{
        minus:function(){
            this.item.quantity--
            //this.item.amount=this.item.quantity*this.item.price
            this.item.amount=this.calc()
        },
        add:function(){
            this.item.quantity++
            //this.item.amount=this.item.quantity*this.item.price
            this.item.amount=this.calc()
        },
        calc:function() {
            return this.item.quantity*this.item.price
        }
    },
    computed:{
        "amount":function(){
            return this.calc()
        }
    }
})

//CartBar.$watch(CartBar.item,function(newValue,oldValue){
//})

export default CartBar;