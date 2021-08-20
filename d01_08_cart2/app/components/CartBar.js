import Vue from "vue";
var CartBar=Vue.extend({
    template: `
    <tr>
        <td>{{cart[index].name}}</td>
        <td>{{cart[index].price}}</td>
        <td>
            <button @click="minus"> - </button>
            {{cart[index].quantity}}
            <button @click="add"> + </button>
        </td>
        <td>{{calc()}}</td>
    </tr>`,
    props: ["cart","index"],
    methods:{
        minus:function(){
            this.cart[this.index].quantity--
            this.cart[this.index].amount=this.calc()

        },
        add:function(){
            this.cart[this.index].quantity++
            this.cart[this.index].amount=this.calc()


        },
        calc:function() {
            return this.cart[this.index].quantity*this.cart[this.index].price
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