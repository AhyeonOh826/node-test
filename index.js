const express = require('express')
const app = express()
const port = 5000 // 아무렇게 해도 된다 back server

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ahyeon:dkdus826@cluster0.yc677.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true 
    , useUnifiedTopology: true
    , useCreateIndex :true
    , useFindAndModify : false
}).then( () => console.log('mongo good!!!'))
  .catch(err => console.log(err))

  

app.get('/', (req, res) => {
  res.send('와 개짱이다')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})