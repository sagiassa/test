const express = require('express')
const path = require('path')
const app = express()
// const testRoutes = require('../routes')
const port = process.env.SERVER_PORT || 8080
const request = require('request')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

// app.get('/sanity', function(req, res){
//     console.log("ok")
//     res.send("ok")
// })

app.get('/recipes/:ingredient', function(req, res){
    let ingredient = req.params.ingredient
    // console.log(ingredient)
    let recipes = []
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(error, responce, body){
        // console.log(body)
        let data = JSON.parse(body).results
        // console.log(data)
        for(let i of data){
            // console.log(i)
            recipes.push({
                title : i.title,
                link : i.href,
                picture : i.thumbnail,
                ingredients: i.ingredients
            })
        }
        // console.log(recipes)
        res.send(recipes)
    })
    
})

app.listen(8080, function(){
    console.log("server rnning on 8080")
})