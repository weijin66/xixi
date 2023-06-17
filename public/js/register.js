window.onload = function () {//加载函数开始
    //账号正则表达式
    let reg_zh = /^(\w){3,10}$/;
    let flag;//标记变量
    //验证账号
    // console.log($);
    $('input').eq(0).on('blur', function () {
        if (reg_zh.test($('input').eq(0).val())) {
            $('.tips').eq(0).text('√');
            $('.tips').eq(0).css('color', 'green');
            flag = true;
        } else if ($('input').eq(0).val() == '') {
            $('.tips').eq(0).text('请输入');
            $('.tips').eq(0).css('color', 'red');
            flag = false;
        } else {
            $('.tips').eq(0).text('×');
            $('.tips').eq(0).css('color', 'red');
            flag = false;
        }
    })
    //密码验证
    // 密码正则表达式
    let reg_psd1 = /^[0-9]{6,10}$/;
    let reg_psd2 = /^[a-zA-Z]{6,10}$/;
    let reg_psd3 = /^[$#;-]{6,10}$/;

    let reg_psd4 = /^[0-9A-Za-z]{6,10}$/;
    let reg_psd5 = /^[0-9$#;-]{6,10}$/;
    let reg_psd6 = /^[0-9$#;-]{6,10}$/;
    let reg_psd7 = /^[a-zA-Z$#;-]{6,10}$/;

    let reg_psd8 = /^[0-9a-zA-Z$#;-]{6,10}$/;

    // console.log($('.red'));
    $('input').eq(1).on('input', function () {
        let text = $('input').eq(1).val();
        if (reg_psd1.test(text) || reg_psd2.test(text) || reg_psd3.test(text)) {
            $('.red').css('background-color', 'red');
            $('.yellow').css('background-color', 'transparent');
            $('.green').css('background-color', 'transparent');
            $('.tips').eq(1).text('√');
            $('.tips').eq(1).css('color', 'green');
            flag = true;
        } else if (reg_psd4.test(text) || reg_psd5.test(text) || reg_psd6.test(text) || reg_psd7.test(text)) {
            $('.yellow').css('background-color', 'yellow');
            $('.red').css('background-color', 'red');
            $('.green').css('background-color', 'transparent');
            $('.tips').eq(1).text('√');
            $('.tips').eq(1).css('color', 'green');
            flag = true;
        } else if (reg_psd8.test(text)) {
            $('.green').css('background-color', 'green');
            $('.red').css('background-color', 'red');
            $('.yellow').css('background-color', 'yellow');
            $('.tips').eq(1).text('√');
            $('.tips').eq(1).css('color', 'green');
            flag = true;
        } else {
            $('.tips').eq(1).text('×');
            $('.tips').eq(1).css('color', 'red');
        }
    })

    //手机号验证
    // 手机号验证正则
    let reg_phone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    $('input').eq(2).on('blur', function () {
        let text1 = $('input').eq(2).val();
        if (reg_phone.test(text1)) {
            $('.tips').eq(2).text('√');
            $('.tips').eq(2).css('color', 'green');
        } else {
            $('.tips').eq(2).text('错');
            $('.tips').eq(2).css('color', 'red');
        }
    })

    // // 判断进行跳转
    // let btn = document.querySelector('.btn');
    // console.log(btn);
    // btn.addEventListener('click', function () {
    //     if (flag == true) {
    //         location.href = 'login.html'
    //     } else {
    //         alert('请全部输入点击注册');
    //     }

    // })
    $(".btn").click((e) => {
        e.preventDefault();//阻止默认提交行为
        // 用户名和密码都验证通过
        if (flag == true) {
            // 根据项目需求写ajax请求
            dataS = {
                username: $('input[name="username"]').val() + "",
                password: $('input[name="password"]').val() + "",
                phone: $('input[name="phone"]').val()
            }
            $.ajax({
                type: 'POST',
                url: "http://localhost:3008/register", //请求的url地址  
                data: dataS,//请求发送的数据/参数值,键值对
                success: (msg) => { //请求成功时处理  弹出确认框，点击跳转到登录页
                    console.log(msg)
                    if (msg) { //请求成功了，数据操作也成功了
                        let con = confirm('注册成功！点击确定跳转');
                        if (con == true) {
                            location.href = 'login.html';
                        }

                    } else {//可能的原因是： 该用户名已存在 或者是数据存入失败
                        // (将验证的if里的条件去掉，即前端没有验证，把密码填写3位，点击注册，数据就加入数据库，但不符合长度大小，就会写入失败)
                        alert(`请求成功了,但数据操作失败,数据库有重名`);
                    }

                },
                error() {//请求出错处理  如数据库没有连接成功等
                    alert('请求失败');
                }
            })
        } else {
            alert('用户名或密码为必填项，且要填写正确，请检查');
        }
    })
}//加载函数结束
