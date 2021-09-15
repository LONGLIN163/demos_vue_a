const express = require('express')
const app = express()
const port = 3000
const fs= require("fs")
const url= require("url")
const { LoaderTargetPlugin } = require('webpack')

app.use(express.static('www'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/getAll",(req,res) => {
    fs.readFile("./data/todos.json",(err,data) => {
        //console.log(data.toString())
        res.json({"results": JSON.parse(data.toString()).result})
    })
})
app.get("/add",(req,res) => {
    let title=url.parse(req.url,true).query.title
    //let id=url.parse(req.url,true).query.id

    fs.readFile("./data/todos.json",(err,data) => {
        let arr=JSON.parse(data.toString()).result;
        arr.push({"id":arr.length, "title":title, "done":false})
        fs.writeFile("./data/todos.json",JSON.stringify({"result":arr}),(err,data) => {
            res.send("ok")
        })
    })
})
app.get("/changedone",(req,res) => {
    let id=url.parse(req.url,true).query.id
    //let done=Boolean(url.parse(req.url,true).query.done)
    let done=url.parse(req.url,true).query.done==1?true:false

    fs.readFile("./data/todos.json",(err,data) => {
        let arr=JSON.parse(data.toString()).result;
 
        arr=arr.map((item) => {
            if(item.id==id){
                item.done=done
            }
            return item
        })
        
        fs.writeFile("./data/todos.json",JSON.stringify({"result":arr}),(err,data) => {
            res.send("ok")
        })
    })
})
app.get("/changetitle",(req,res) => {
    let id=url.parse(req.url,true).query.id
    let title=url.parse(req.url,true).query.title

    fs.readFile("./data/todos.json",(err,data) => {
        let arr=JSON.parse(data.toString()).result;
 
        arr=arr.map((item) => {
            if(item.id==id){
                item.title=title
            }
            return item
        })
        
        fs.writeFile("./data/todos.json",JSON.stringify({"result":arr}),(err,data) => {
            console.log(data)
            res.send("ok")
        })
    })
})
app.get("/del",(req,res) => {
    let id=url.parse(req.url,true).query.id

    fs.readFile("./data/todos.json",(err,data) => {
        let arr=JSON.parse(data.toString()).result;
 
        arr=arr.filter((item) => {
            return item.id != id
        })
        
        fs.writeFile("./data/todos.json",JSON.stringify({"result":arr}),(err,data) => {
            res.send("ok")
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
