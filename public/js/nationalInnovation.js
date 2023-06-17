// 渲染导航栏
let navData = [
    { text: '首页', src: 'home.html' },
    { text: '动画', src: '' },
    { text: '番剧', src: 'oparal.html' },
    { text: '国创', src: 'nationalInnovation.html' },
    { text: '舞蹈', src: '' },
    { text: '游戏', src: '' },
    { text: '鬼畜', src: '' },
    { text: '放映厅', src: 'screeningRoom.html' },
]

let navgation = document.querySelector('.navgation');
for (let key in navData) {
    navgation.innerHTML +=
        `
      <div><a href="${navData[key].src}">${navData[key].text}</a></div>
    `
}

// 选项卡功能
$('.list>li').click(function () {
    // console.log($(this));//当前点击的选项节点
    // console.log($(this).index());//节点.index()获取当前节点在集合中的索引
    $('.list>li').removeClass('active').eq($(this).index()).addClass('active');
    $('.cards>div').removeClass('show').eq($(this).index()).addClass('show');
})

// 右边信息
let msgData = [
    { txt: '狐妖小红娘 20 日本弹幕反应' },
    { txt: '【腐向·末日丧尸新剧】蛇蝎点' },
    { txt: '距狐妖小红娘南国篇开播 还有3' },
    { txt: '这也能做成动画？一部你不可能' },
    { txt: '嘉德罗斯和金声音互换' },
    { txt: '【合集】小心超人出场集数（1-5）' },
    { txt: '嘉德罗斯和金声音互换' },
]

let right_msg = document.querySelector('.right_msg');
for (let key in msgData) {
    right_msg.innerHTML +=
        `
            <li>
               ${msgData[key].txt}
            </li>
         `
}

// 最近更新数据
let updateData = [
    { src: 'a1.jpg', txta: '凹凸世界 第二季', txtb: '更新至第8话' },
    { src: 'a2.jpg', txta: '理想禁区', txtb: '更新至第5话' },
    { src: 'a3.jpg', txta: '陶渊明日记', txtb: '更新至第9话' },
    { src: 'a4.jpg', txta: '茶啊二中 嘎嘎以嘎斯', txtb: '更新至第11话' },
    { src: 'a5.jpg', txta: '霹雳狼烟之古原爭霸', txtb: '更新至第10话' },
    { src: 'a6.jpg', txta: '黄金屋', txtb: '更新至第54话' },
    { src: 'a7.png', txta: '龙王传说绝密档案', txtb: '更新至第23话' },
    { src: 'a8.jpg', txta: '霹雳谜城之九轮异谱', txtb: '更新至第54话' },
    { src: 'a9.jpg', txta: '没日没夜', txtb: '更新至第2话' },
    { src: 'a10.jpg', txta: '哈哈滑小稽', txtb: '更新至第4话' },
    { src: 'a11.jpg', txta: '血色苍穹（上篇）', txtb: '更新至第9话' },
    { src: 'a12.jpg', txta: '天行九歌', txtb: '更新至第12话' },
    { src: 'a13.jpg', txta: '菊叔5岁画', txtb: '更新至第5话' },
    { src: 'a14.jpg', txta: '狐妖小红娘 日语版', txtb: '更新至第2话' },
    { src: 'a15.jpg', txta: '一人之下 第二季', txtb: '更新至第3话' },
    { src: 'a16.jpg', txta: '叫我僵小鱼 日常篇', txtb: '更新至第8话' },
]

let pics = document.querySelector('.pics');
for (let key in updateData) {
    pics.innerHTML +=
        `
           <li>
                <img src="./images/${updateData[key].src}" alt="">
                    <div class="text">
                        <p>${updateData[key].txta}</p>
                        <p>${updateData[key].txtb}</p>
                    </div>
            </li>
        `
}


// 显示全部功能
let updataAll = document.querySelector('.updataAll');
let update = document.querySelector('.update');
// console.log(updataAll);

updataAll.addEventListener('click', () => {
    if (update.style.height < '45vw') {
        update.style.height = '45vw';
    } else {
        update.style.height = '22vw';
    }
})

// 左边国产动画数据
let gcData = [
    { src: 'v_21.jpg', txt: '南国篇，请让我来保护道士哥哥', txta: '2.8万', txtb: '2677' },
    { src: 'v_22.jpg', txt: '【国漫】拾起你丢失的信念，为国漫而战吧！', txta: '143.1万', txtb: '4.8万' },
    { src: 'v_23.jpg', txt: '这也能做成动画？一部你不可能看过的运动番', txta: '9.2万', txtb: '1412' },
    { src: 'v_24.jpg', txt: '【魔道祖师/极致画质】来了！正式预告！【2018耽美架空玄幻基番】', txta: '2.6万', txtb: '1089' }
]

let left_dh = document.querySelector('.left_dh');
for (let key in gcData) {
    left_dh.innerHTML +=
        `
          <li>
                    <img src="./images/${gcData[key].src}" alt="">
                    <p class = "msg">
                        <span>
                            ${gcData[key].txt}
                        </span>
                    </p>
                    <div class = "play">
                        <p>${gcData[key].txta}</p>
                        <p class="numbers"> ${gcData[key].txtb}</p>
                    </div>
            </li>
        `
}

let show = document.querySelectorAll('.left_dh>li');
let msg = document.querySelectorAll('.msg');
let play = document.querySelectorAll('.play');
console.log(show);

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener('mouseenter', function () {
        msg[i].style.height = '7.25vw';
        play[i].style.height = '7.25vw';
    });

    show[i].addEventListener('mouseleave', function () {
        msg[i].style.height = '1.375vw';
        play[i].style.height = '1.375vw';
    });
}

// 国产右边排行
let hotGcData = [
    { num: '1', text: '【狐妖小红娘】 南国', src: '06.png', p: '综合评分15.3' },
    { num: '2', text: '【一人之下】道长详解“炁”是什么？', src: '06.jpg', p: '综合评分15.3' },
    { num: '3', text: '愿意为魁拔而战死！', src: '05.jpg', p: '综合评分15.3' },
]

let hot_gc = document.querySelector('.hot_gc');

for (var key in hotGcData) {
    hot_gc.innerHTML +=
        `
         <ul>
                <li>
                  <div class = "number">${hotGcData[key].num}</div>
                    <div class="rank_title">
                        <p>${hotGcData[key].text}</p>
                    </div>
                    <div class="details">
                        <img src="./images/${hotGcData[key].src}" alt="">
                        <div class="dm_name">
                            <p>${hotGcData[key].text}</p>
                            <p>${hotGcData[key].p}</p>
                        </div>
                    </div>
                </li>
        </ul>
    `
}
var img = document.createElement('img');
img.src = './images/v_04.jpg'
hot_gc.appendChild(img);


// 左边国产原创数据
let ycData = [
    { src: 'v_25.jpg', txt: '【木鱼微剧场】《少年锦衣卫》', txta: '2473', txtb: '137' },
    { src: 'v_26.jpg', txt: '王权夫妇前世现世齐来道贺 南国篇还有4天上线！', txta: '67.3万', txtb: '1.7万' },
    { src: 'v_27.jpg', txt: '鬼途奇行錄片尾曲-月圓人缺', txta: '187', txtb: '1' },
    { src: 'v_28.jpg', txt: '战祸邪神【国语版抢先看】09-10', txta: '1.3万', txtb: '661' }
]

let left_gc = document.querySelector('.left_gc');
for (let key in ycData) {
    left_gc.innerHTML +=
        `
          <li>
                    <img src="./images/${ycData[key].src}" alt="">
                    <p class = "msg">
                        <span>
                            ${ycData[key].txt}
                        </span>
                    </p>
                    <div class = "play">
                        <p>${ycData[key].txta}</p>
                        <p class="numbers"> ${ycData[key].txtb}</p>
                    </div>
            </li>
        `
}

let show1 = document.querySelectorAll('.left_dh>li');
let msg1 = document.querySelectorAll('.msg');
let play1 = document.querySelectorAll('.play');
// console.log(show);

for (let i = 0; i < show1.length; i++) {
    show1[i].addEventListener('mouseenter', function () {
        msg1[i].style.height = '11.25vw';
        play1[i].style.height = '11.25vw';
    });

    show1[i].addEventListener('mouseleave', function () {
        msg1[i].style.height = '1.375vw';
        play1[i].style.height = '1.375vw';
    });
}


// 国产原创右边排行数据
let hotycData = [
    { num: '1', text: '【素还真x风采铃—不老梦】', src: '07.jpg', p: '综合评分15.3' },
    { num: '2', text: '【神毓逍遥】当战', src: '08.jpg', p: '综合评分15.3' },
    { num: '3', text: '《雄兵连大电影》的预告片！！', src: '10.jpg', p: '综合评分15.3' },
]

let gc = document.querySelector('.gc');

for (var key in hotycData) {
    gc.innerHTML +=
        `
         <ul>
                <li>
                  <div class = "number">${hotycData[key].num}</div>
                    <div class="rank_title">
                        <p>${hotycData[key].text}</p>
                    </div>
                    <div class="details">
                        <img src="./images/${hotycData[key].src}" alt="">
                        <div class="dm_name">
                            <p>${hotycData[key].text}</p>
                            <p>${hotycData[key].p}</p>
                        </div>
                    </div>
                </li>
        </ul>
    `
}
var img = document.createElement('img');
img.src = './images/v_05.jpg'
gc.appendChild(img);

// 手办部分数据
let handOperatedData = [
    { src: 'v_29.jpeg', txt: '霹靂天命之《戰禍邪神》搶先看', txta: '点击数:1621', txtb: '销售量:21' },
    { src: 'v_30.jpg', txt: '【鬼途奇行录01】剑剑：师娘，', txta: '点击数:1950', txtb: '销售量:1748' },
    { src: 'v_33.jpeg', txt: '【布袋戏贵乱】那年的爱恨情仇', txta: '点击数:626', txtb: '销售量:340' },
    { src: 'v_32.jpeg', txt: '鬼途奇行录预告', txta: '点击数:325', txtb: '销售量:740' },
]

let sb_pics = document.querySelector('.sb_pics');
for (let key in handOperatedData) {
    sb_pics.innerHTML +=
        `
             <li>
                <img src="./images/${handOperatedData[key].src}" alt="">
                <p>${handOperatedData[key].txt}</p>
                <div>
                    <span>${handOperatedData[key].txta}</span>
                    <span>${handOperatedData[key].txtb}</span>
                </div>
            </li>
        `
}

// 轮播图渲染
let NationalInnovation = [
    { src: 'dddd.jpg', txt: '动漫1' },
    { src: 'aaaa.jpg', txt: '动漫2' },
    { src: 'bbbb.jpg', txt: '动漫3' },
    { src: 'b999a9014c086e06d143598602087bf40bd1cb10.jpg', txt: '动漫4' },
    { src: 'eeee.jpg', txt: '动漫5' },
]

let swiper1 = document.querySelector('.swiper-wrapper');
for (let key in NationalInnovation) {
    swiper1.innerHTML +=
        `
        <div class="swiper-slide">
            <img src="./images/${NationalInnovation[key].src}" alt="">
            <span>${NationalInnovation[key].txt}</span>
        </div>
    `
}















