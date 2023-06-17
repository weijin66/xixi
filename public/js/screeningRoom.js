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

// 热播推荐数据
let hotPlayData = [
    { src: 'i101.jpg', txt: '天行九歌', txta: '国产炫美画风' },
    { src: 'i102.jpg', txt: '蜡笔小新', txta: '正男小新模仿秀' },
    { src: 'i103.jpg', txt: '少年锦衣卫', txta: '火热播放' },
    { src: 'i104.jpg', txt: '画江湖之不良人II', txta: '不良人又来了，还在等什么' }
]

let left_img = document.querySelector('.left_img');
for (let key in hotPlayData) {
    left_img.innerHTML +=
        `
         <li>
            <img src="./images/${hotPlayData[key].src}" alt="">
            <p>${hotPlayData[key].txt}</p>
            <p class="gray">${hotPlayData[key].txta}</p>
        </li>
        `
}

// 左边纪录片数据
let documentaryData = [
    { src: 'three01.jpg', txt: '史诗工程III', txta: '见证科技的力量' },
    { src: 'three02.jpg', txt: '乌贼：爱与死亡', txta: '它到底经历了什么？' },
    { src: 'three03.jpg', txt: '川味 第一季', txta: '过一个火辣辣的冬天' },
    { src: 'three04.jpg', txt: '鲨鱼与章鱼', txta: '谁是最后的赢家' }
]

let documentary_pics = document.querySelector('.documentary_pics');
for (let key in documentaryData) {
    documentary_pics.innerHTML +=
        `
        <li>
            <img src="./images/${documentaryData[key].src}" alt="">
            <p>${documentaryData[key].txt}</p>
            <p class="gray">${documentaryData[key].txta}</p>
        </li>
    `
}

// 右边排行数据
let documentaryRightData = [
    { num: '1', text: '45秒飚上60楼！日本这样的电梯你敢坐吗？', src: 'p1.1.jpg', p: '综合评分:4.7万' },
    { num: '2', text: '【这个道长有点帅】一个道长的纪录片', src: 'p1.2.jpg', p: '综合评分:6.8万' },
    { num: '3', text: '这饼太好吃，歪国人吃了再也不想吃披萨', src: 'p1.3.jpg', p: '综合评分:6.8万' },
    { num: '4', text: '原子弹落到日本广岛的那一刻', src: 'p1.4.jpg', p: '综合评分5.3万' },
    { num: '5', text: '【纪录片/BBC】蓝色星球 THE BLUE PLANET', src: 'p1.5.jpg', p: '综合评分:1.5万' },
    { num: '6', text: '【纪录片】亿万富翁的有钱人生【全6P】', src: 'p1.6.jpg', p: '综合评分:1.7万' },
    { num: '7', text: '文艺复兴.第一季第一集.[夏末秋字幕组]', src: 'p1.7.jpg', p: '综合评分:3256' },
    { num: '8', text: '男子声称自己是「时空旅人」', src: 'p1.8.jpg', p: '综合评分:3.7万' },
    { num: '9', text: '【科普纪录】科学证明上帝的存在', src: 'p1.9.jpg', p: '综合评分:1.7万' }
]

let documentary_rank = document.querySelector('.documentary_rank');
for (let key in documentaryRightData) {
    documentary_rank.innerHTML +=
        `
    <ul>
        <li>
            <div class="number">${documentaryRightData[key].num}</div>
            <div class="rank_title">
                <p>${documentaryRightData[key].text}</p>
            </div>
            <div class="details">
                <img src="./images/${documentaryRightData[key].src}" alt="">
                    <div class="dm_name">
                        <p>${documentaryRightData[key].text}</p>
                        <p>${documentaryRightData[key].p}</p>
                    </div>
            </div>
        </li>
    </ul>
    `
}

// 电影下面部分左边数据
let filmLeftData = [
    { src: 'four01.jpg', txt: '你的名字。', txta: '追寻你的踪迹即使次元相隔' },
    { src: 'four02.jpg', txt: '羞羞的铁拳。', txta: '想笑吗，来看我呀' },
    { src: 'four03.jpg', txt: '缝纫机乐队。', txta: '来摇滚公园，重拾音乐梦' },
    { src: 'four04.jpg', txt: '从你的全世界路过。', txta: '都市情感不一样的故事' },
    { src: 'four05.jpg', txt: '空天猎。', txta: '天空是我们的战场' },
    { src: 'four06.jpg', txt: '一代宗师。', txta: '一代武学宗师叶问' },
    { src: 'four07.jpg', txt: '战狼II。', txta: '军人的战场，军人的职责' },
    { src: 'four08.jpg', txt: '大鱼海棠。', txta: '北冥有鱼，其名为鲲' }
]
let film_left = document.querySelector('.film_left');
for (let key in filmLeftData) {
    film_left.innerHTML +=
        `
        <li>
            <img src="images/${filmLeftData[key].src}" alt="">
            <p>${filmLeftData[key].txt}</p>
            <p class="gray">${filmLeftData[key].txta}</p>
        </li>
    `
}

// 电影下面部分右边排行数据
let filmRightData = [
    { num: '1', text: '【奇幻/动作】 悟空传 【2017】', src: 'p2.1.jpg', p: '综合评分：9.8万' },
    { num: '2', text: '【爱情/动画】 你的名字。 【2016】', src: 'p2.2.jpg', p: '综合评分:6.8万' },
    { num: '3', text: '【剧情/伦理】 秀女1995 【谢兰 国语】', src: 'p2.3.jpg', p: '综合评分:1.7万' },
    { num: '4', text: '【战争/历史】秦颂【1996】央版高清', src: 'p2.4.jpg', p: '综合评分26.1万' },
    { num: '5', text: '【剧情故事】《双雄会：李自成与张献忠》', src: 'p2.5.jpg', p: '综合评分:7137' },
    { num: '6', text: '（国产/耽美剧）何故惹凡尘', src: 'p2.6.jpg', p: '综合评分:89.8万' },
    { num: '7', text: '巧奔妙逃.1996（东奔西走）', src: 'p2.7.jpg', p: '综合评分:17.1万' },
    { num: '8', text: '姜文电影——鬼子来了 2000年 BD国语中字', src: 'p2.8.jpg', p: '综合评分:22.1万' },
    { num: '9', text: '【剧情】 小森林 精编版（2015）', src: 'p2.9.jpg', p: '综合评分:4.7万' },
    { num: '10', text: '【童年搞笑经典】【三毛从军记】【1992】', src: 'p2.10.jpg', p: '综合评分:15.8万' },
]
let film_rank = document.querySelector('.film_rank');
for (let key in filmRightData) {
    film_rank.innerHTML +=
        `
        <ul>
        <li>
            <div class="number">${filmRightData[key].num}</div>
            <div class="rank_title">
                <p>${filmRightData[key].text}</p>
            </div>
            <div class="details">
                <img src="./images/${filmRightData[key].src}" alt="">
                    <div class="dm_name">
                        <p>${filmRightData[key].text}</p>
                        <p>${filmRightData[key].p}</p>
                    </div>
            </div>
        </li>
    </ul>
    `
}
var img = document.createElement('img');
img.src = './images/1011.jpg'
film_rank.appendChild(img);

// 电视剧左边数据
let dsjLeftData = [
    { src: 'five01.jpg', txt: '隋唐英雄传 | 40集', txta: '经典老剧百看不厌' },
    { src: 'five02.jpg', txt: '无法拥抱的你 | 更新至2集', txta: '放开我你这个禽兽？' },
    { src: 'five03.jpg', txt: '铁齿铜牙纪晓岚 | 40集', txta: '吹口烟都是爱你的形状' },
    { src: 'five04.jpg', txt: '最后的战士 | 更新至4集', txta: '委屈到变形' }
]
let dsj = document.querySelector('.dsj');
for (let key in dsjLeftData) {
    dsj.innerHTML +=
        `
         <li>
            <img src="./images/${dsjLeftData[key].src}" alt="">
            <p>${dsjLeftData[key].txt}</p>
            <p class="gray">${dsjLeftData[key].txta}</p>
        </li>
    `
}


// 右边排行
let dsjRightData = [
    { num: '1', text: '无法拥抱的你 第1集', src: 'p3.1.jpg', p: '综合评分:6.8万' },
    { num: '2', text: '【职场/爱情】 猎场 23-24【2017】', src: 'p3.2.jpg', p: '综合评分:4.5万' },
    { num: '3', text: '【职场/爱情】 猎场 21-22【2017】', src: 'p3.2.jpg', p: '综合评分:4万' },
    { num: '4', text: '【职场/爱情】 猎场 25-26【2017】', src: 'p3.2.jpg', p: '综合评分26.1万' },
    { num: '5', text: '无法拥抱的你 第2集', src: 'p3.1.jpg', p: '发布会后撒' },
    { num: '6', text: '【国产】亮剑 全30集 【2015】', src: 'p3.5.jpg', p: '综合评分:2.9万' },
    { num: '7', text: '【剧情】 雪花女神龙 全45集【2004】', src: 'p3.4.jpg', p: '综合评分:11.5万' },
    { num: '8', text: '【古装剧33集全】 刁蛮公主', src: 'p3.3.jpg', p: '综合评分:5600' },
    { num: '9', text: '【剧情】铠甲勇士 全52集【2009】', src: 'p3.9.jpg', p: '综合评分:1.2万' },
]
let dsj_rank = document.querySelector('.dsj_rank');
for (let key in dsjRightData) {
    dsj_rank.innerHTML +=
        `
      <ul>
        <li>
            <div class="number">${dsjRightData[key].num}</div>
            <div class="rank_title">
                <p>${dsjRightData[key].text}</p>
            </div>
            <div class="details">
                <img src="./images/${dsjRightData[key].src}" alt="">
                    <div class="dm_name">
                        <p>${dsjRightData[key].text}</p>
                        <p>${dsjRightData[key].p}</p>
                    </div>
            </div>
        </li>
    </ul>
    `
}

// 渲染轮播图
let NationalInnovation = [
    { src: 'timg.jpg', txt: '鬼刀' },
    { src: '07.jpg', txt: '啦啦啦' },
    { src: 'bbbb.jpg', txt: '七月' },
    { src: 'cccc.jpg', txt: '你的名字' },
    { src: 'daojiandong.jpg', txt: '柯南' },
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