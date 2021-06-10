const express = require('express')
const app = express()
const port = 5000 // 아무렇게 해도 된다 back server
const bodyParser = require('body-parser');
const { User } = require("./models/User");

// 어플리케이션/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// 어플리케이션/json
app.use(bodyParser.json());

const config = require('./config/key');
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI , {
    useNewUrlParser : true 
    , useUnifiedTopology: true
    , useCreateIndex :true
    , useFindAndModify : false
}).then( () => console.log('mongo good!!!'))
  .catch(err => console.log(err))

  
// package에서 backend : nodeMon 선언 함 그러면 서버 안내려도 바로 적용됨
app.get('/', (req, res) => {
  res.send('왜 깃헙 안되니 ㅎㅎ!-수정')
})

app.post('/register', (rep, res) => {
  // 회원가입 할떄 필요한 정보를을 클라이언트에서 가져오면 
  // 그것들을 데이터 베이스에 넣는다?
  const user = new User(rep.body)
  // mongoDB에서 오는 메소드
  user.save((err, dob) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})