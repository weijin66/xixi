// 1、引模块
const express = require('express');
const { promises: fsPromise } = require("fs");
const url = require("url");
const path = require('path');
// 一、连接数据库
//1、导入mongoose模块
const mongose = require('mongoose')
let { log } = console;
// console.log(mongose);//对象，说明mongoose包安装并导入成功

// 2、连接数据库  hopuStus具体的数据的名称，可以根据需求修改
mongose.connect('mongodb://localhost/xixi')
    .then(() => { log('数据库连接成功') })
    .catch((err) => { log('连接失败', err) })

// 二、创建集合并往集合中添加文档
// 1、设置集合规则，用new调用构造函数mongoose.Schema,函数内传一个对象为实参，对象里根据项目需求放各种字段及其数据类型
const userSchema = new mongose.Schema({
    username: String,
    password: String,
    phone: Number,
})
// const xinfan = new mongose.Schema({})

// 2、使用规则创建集合 用model方法，参数1是集合的名字首字母大写，参数2是规则名称
const User = mongose.model('User', userSchema)
// const xinfans = mongose.model('xinfan', xinfan)


// 2、创建服务器
const app = express();
app.use(express.static('public'));
// 解析 POST 请求参数
app.use(express.urlencoded({ extended: true }));
// 设置允许跨域访问该服务 --- 解决访问时跨域报错的问题
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    next();
})
// app.get("/xinfan", (req, res) => {
//     xinfans.find().then((val) => {
//         res.send(val)
//     }).catch((err) => {
//         res.send(err)
//     })
// })
// 处理注册请求
app.post('/register', function (req, res) {
    let { username, password, phone } = req.body;
    User.findOne({ username: username }).then((val) => {
        if (val != null) {
            return res.send(false);
        } else {
            User.create({
                username: username,
                password: password,
                phone: phone
            }).then(() => { res.send(true) }).catch((err) => {
                res.send(false)
            })
        }
    })

});

// 处理登录请求
app.post('/login', function (req, res) {
    let { username, password } = req.body;
    User.findOne({ username: username, password: password }).then((val) => {
        if (val == null) {
            return res.send(false);
        } else {
            res.send(true);
        }
    })

});


app.get('/', (req, res) => {
    res.sendFile('register.html', { root: __dirname + '/public' });
})

//新建规则
const infoSchema = mongose.Schema({
    src: String,
    text: String,
    hua: String,
    day: String
})
const Infos = mongose.model('Infos', infoSchema)

app.get('/timeList', (req, res) => {
    Infos.find().then(result => {
        log(result)
        res.send(result)
    })
})


// 3、监听端口 启动服务
app.listen(3008, () => {
    console.log('服务器启动成功,端口号3008');
})