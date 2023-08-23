let express = require('express') // ประกาศ object ชื่อ express
let bodyParser = require('body-parser') 
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express() //ไม่เปลี่ยนความจำ app

app.use(bodyParser.json()) // ไว้รู้จัก format ข้อมูลจาก json มาเรียกผ่านใช้ง่ายๆ ในกรอบ
app.use(bodyParser.urlencoded({extended: true})) //ทำหน้าที่ เอาข้อมูล url มาใช้

require('./route')(app) // ตัว app ใช้ route

app.get('/status', function(req,res){ 
    res.send('Hello nodejs server belong to chanattawan')
})

app.get('/hello/:name', function (req,res) {
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

let port = 8081

app.listen(port, function (){
    console.log('server running on ' + port)
})
