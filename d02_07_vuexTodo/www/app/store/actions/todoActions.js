// import axios from 'axios'
// export default {
//     init({commit}){
//         axios.get('/getAll')
//         .then(function (res) {
//           //console.log(res);
//           commit("init",res.data)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//       }
// }

import axios from 'axios'
import * as todoTypes from "../todo_types"

export default {
    [todoTypes.INIT]({commit}){
        axios.get('/getAll')
        .then(function (res) {
          //console.log(res);
          commit(todoTypes.INIT,res.data.results)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [todoTypes.CHANGETITLE]({commit},pl){
        axios.get('/changetitle',{
          params:{
            "id":pl.id,
            "title":pl.title 
          }
            // "id":pl.id,
            // "title":pl.title 
        })
        .then(function (res) {
          console.log(res);
          if(res.data=="ok"){
            commit(todoTypes.CHANGETITLE,pl)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [todoTypes.CHANGEDONE]({commit},pl){
        axios.get('/changedone',{
          params:{
            "id":pl.id,
            "done":pl.done ? 1 : -1
          }
        })
        .then(function (res) { 
          console.log(res);
          if(res.data=="ok"){
            commit(todoTypes.CHANGEDONE,pl)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [todoTypes.ADD]({commit},pl){
        axios.get('/add',{
          params:{
            //"id":pl.id, 
            "title":pl.title 
          }
        })
        .then(function (res) { 
          console.log(res);
          if(res.data=="ok"){
            commit(todoTypes.ADD,pl)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}