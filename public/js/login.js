let { log } = console;
let inps = document.querySelectorAll('input');
let oPs = document.querySelectorAll('p');
let iNode = document.querySelectorAll('i');
let checkCode = document.querySelector('.checkCode');
let register = document.querySelector('.register');
// log(inps, oPs, iNode, checkCode);

// 验证账号正则
let reg1 = /^[0-9a-zA-Z]{3,10}$/;
// 给输入框绑定事件
inps[0].addEventListener('blur', function () {
    if (reg1.test(this.value)) {
        oPs[0].innerText = '格式正确';
        oPs[0].classList.add('correct');
        oPs[0].classList.remove('error');
        iNode[0].classList.add('show');
    } else {
        oPs[0].innerText = '由3-10位的数字、字母组成';
        oPs[0].classList.remove('correct');
        oPs[0].classList.add('error');
        iNode[0].classList.remove('show');
    }
})

let reg2 = /^[0-9a-zA-Z$#;-]{6,10}$/;
inps[1].addEventListener('blur', function () {
    if (reg2.test(this.value)) {
        oPs[1].innerText = '格式正确';
        oPs[1].classList.add('correct');
        oPs[1].classList.remove('error');
        iNode[1].classList.add('show');
    } else {
        oPs[1].innerText = '由6-10位数字+字母+特殊符号$#;-组成';
        oPs[1].classList.remove('correct');
        oPs[1].classList.add('error');
        iNode[1].classList.remove('show');
    }
})

// 输入随机数
let flag = false;
inps[2].addEventListener('blur', function () {
    if (this.value.toLowerCase() === checkCode.innerText.toLowerCase() && this.value.length !== 0) {
        flag = true;
        oPs[2].innerText = '格式正确';
        oPs[2].classList.add('correct');
        oPs[2].classList.remove('error');
    } else {
        flag = false;
        oPs[2].innerText = '请输入验证码';
        oPs[2].classList.remove('correct');
        oPs[2].classList.add('error');
    }
});




//获取随机数
checkCode.addEventListener('click', function () {
    this.innerText = shu();
})

//随机数函数
let randomSrc = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function shu() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        let number = randomSrc[parseInt(Math.random() * randomSrc.length)];
        arr.push(number);
    }
    return arr.join('');
}

//登录
register.addEventListener('click', function () {
    dataS = {
        username: $('input[name="username"]').val() + "",
        password: $('input[name="password"]').val() + "",
    }
    if (verification()) {
        $.ajax({
            type: 'POST',
            url: "http://localhost:3008/login", //请求的url地址  
            data: dataS,//请求发送的数据/参数值,键值对
            success: (msg) => {
                if (msg) { //请求成功了，数据操作也成功了
                    let con = confirm('登录成功！点击确定跳转');
                    if (con == true) {
                        location.href = 'home.html';
                    }

                } else {//可能的原因是： 该用户名已存在 或者是数据存入失败
                    // (将验证的if里的条件去掉，即前端没有验证，把密码填写3位，点击注册，数据就加入数据库，但不符合长度大小，就会写入失败)
                    alert(`请求成功了,但数据操作失败,数据库没有该数据，请注册再登录`);
                }
            }
        })
    } else {
        alert('禁止提交');
    }
})

function verification() {
    let flag2 = true;
    let ticks = document.querySelectorAll('i');
    for (let i = 0; i < ticks.length; i++) {
        if (!(ticks[i].classList.contains('show'))) {
            flag2 = false;
        }
    }
    return flag2 && flag;
}
