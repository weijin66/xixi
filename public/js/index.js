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

// 渲染轮播图右边图片部分
let swiperRightData = [
    { src: '55.jpg', txt: '战刻夜想曲' },
    { src: '54.jpg', txt: '血界战线第二季' },
    { src: '57.jpg', txt: '少女终末旅行' },
    { src: '56.jpg', txt: '你的名字' },
]

let right_img = document.querySelector('.right_img');
for (let key in swiperRightData) {
    right_img.innerHTML +=
        `
     <li>
        <img src="./images/${swiperRightData[key].src}" alt="">
        <p>${swiperRightData[key].txt}</p>
        <div class="mask">
            <img src="./images/bofang.png" alt="">
        </div>
    </li>
    `
}

// 渲染vip推广部分
let vipImgData = [
    { src: '23.jpg', txt: '舞动青春' },
    { src: '22.jpg', txt: '夏目友人帐' },
    { src: '21.jpg', txt: '魔法使的新娘' },
    { src: '20.jpg', txt: '火影忍者新时代' },
]

let vip_img = document.querySelector('.vip_img');
// console.log(vip_img);
for (let key in vipImgData) {
    vip_img.innerHTML +=
        `
        <li>
            <img src="./images/${vipImgData[key].src}" alt="">
            <p>${vipImgData[key].txt}</p>
            <div class="mask">
                <img src="./images/bofang.png" alt="">
            </div>
        </li>
    `
}

// 渲染动漫部分
let dmData = [
    { src: '08.jpg', txt: '雨色可可第四季' },
    { src: '09.jpg', txt: '丝绸女孩对谈' },
    { src: '10.jpg', txt: '火影忍者' },
    { src: '11.jpg', txt: '人马小姐不迷茫' },
]

let dm_pic = document.querySelector('.dm_pic');
for (let key in dmData) {
    dm_pic.innerHTML +=
        `
        <li>
            <img src="./images/${dmData[key].src}" alt="">
            <p>${dmData[key].txt}</p>
        </li>
    `
}

// 右边排名
let rankData = [
    { num: '1', text: '名侦探柯南', src: '104.png', p: '综合评分19.3' },
    { num: '2', text: '妖精的尾巴第二季', src: '105.png', p: '综合评分19.3' },
    { num: '3', text: '少年锦衣卫第二季', src: '106.png', p: '综合评分19.3' },
    { num: '4', text: '博人传 火影忍者新时代', src: '107.png', p: '综合评分19.3' },
    { num: '5', text: '少女终末旅行', src: '104.png', p: '综合评分19.3' },
    { num: '6', text: '如果有妹妹就好了', src: '104.png', p: '综合评分19.3' },
    { num: '7', text: '结成友奈是勇者', src: '103.png', p: '综合评分19.3' },
    { num: '8', text: '光之光少女食尚甜心', src: '102.png', p: '综合评分19.3' },
]
let hot_dm = document.querySelector('.hot_dm');

for (var key in rankData) {
    hot_dm.innerHTML +=
        `
         <ul>
                <li>
                  <div class = "number">${rankData[key].num}</div>
                    <div class="rank_title">
                        <p>${rankData[key].text}</p>
                    </div>
                    <div class="details">
                        <img src="./images/${rankData[key].src}" alt="">
                        <div class="dm_name">
                            <p>${rankData[key].text}</p>
                            <p>${rankData[key].p}</p>
                        </div>
                    </div>
                </li>
        </ul>
    `
}

// 渲染原创作品推荐
let ycData = [
    { src: '41.jpg', txt: '恋爱禁止的世界' },
    { src: '42.jpg', txt: '战斗女子高校' },
    { src: '43.jpg', txt: '银之守墓人' },
    { src: '44.jpg', txt: '重启咲良田' },
    { src: '45.jpg', txt: '樱花任务' }
]
let yc_pic = document.querySelector('.yc_pic');
for (let key in ycData) {
    yc_pic.innerHTML +=
        `
        <li>
            <img src="./images/${ycData[key].src}" alt="">
            <p>${ycData[key].txt}</p>
        </li>
    `
}

// 渲染日本动漫
let rbdmData = [
    { src: '12.jpg', txt: '妖精的尾巴' },
    { src: '13.jpg', txt: '十二大战' },
    { src: '14.jpg', txt: '甘城光辉游乐园' },
    { src: '15.jpg', txt: '哆啦A梦' },
    { src: '16.jpg', txt: '宠物小精灵BW' },
    { src: '17.jpg', txt: '精灵使的剑舞' },
    { src: '18.jpg', txt: '食戟之灵第三季' },
    { src: '19.jpg', txt: '美妙旋律第八季' },
    { src: '32.jpg', txt: '奇诺之旅2017' },
    { src: '33.jpg', txt: '蜡笔小新' }
]
let rb_dm_pic = document.querySelector('.rb_dm_pic');
for (let key in rbdmData) {
    rb_dm_pic.innerHTML +=
        `
        <li>
            <img src="./images/${rbdmData[key].src}" alt="">
            <p>${rbdmData[key].txt}</p>
        </li>
    `
}

// 渲染国产部分
let ChinaData = [
    { src: '38.jpg', txt: '我的天劫女友' },
    { src: '39.jpg', txt: '橙心资讯' },
    { src: '40.jpg', txt: '我是江小白' },
    { src: '41.jpg', txt: '狐妖小红娘' },
]

let gc = document.querySelector('.gc');
for (let key in ChinaData) {
    gc.innerHTML +=
        `
        <li>
            <img src="./images/${ChinaData[key].src}" alt="">
            <p>${ChinaData[key].txt}</p>
        </li>
    `
}

// 渲染国产动漫
let gcdmData = [
    { src: '42.jpg', txt: '少年锦衣卫第二季' },
    { src: '43.jpg', txt: '萌娘说' },
    { src: '44.jpg', txt: '少年锦衣卫第二季' },
    { src: '45.jpg', txt: '灵剑山' },
    { src: '46.jpg', txt: '咕力咕力丫米果' },
    { src: '47.jpg', txt: '画江湖之换世门生' },
    { src: '48.jpg', txt: '阿狸梦之岛' },
    { src: '49.jpg', txt: '爱精灵乐吉儿' },
    { src: '50.jpg', txt: '怪物公寓' },
    { src: '51.jpg', txt: '樱桃小丸子' }
]
let gc_dm = document.querySelector('.gc_dm');
for (let key in gcdmData) {
    gc_dm.innerHTML +=
        `
        <li>
            <img src="./images/${gcdmData[key].src}" alt="">
            <p>${gcdmData[key].txt}</p>
        </li>
    `
}

var gcData = [
    { num: '1', text: '画江湖之换世门生(上篇)', src: '90.png', p: '综合评分19.3' },
    { num: '2', text: '纳米核心第三季(下篇)', src: '90.png', p: '综合评分19.3' },
    { num: '3', text: '十万个冷笑话 第三季', src: '92.png', p: '综合评分19.3' },
    { num: '4', text: '我差点就信了 第三季', src: '93.png', p: '综合评分19.3' },
    { num: '5', text: '我是江小白', src: '94.png', p: '综合评分19.3' },
    { num: '6', text: '凹凸世界 第一季', src: '95.png', p: '综合评分19.3' },
    { num: '7', text: '女生宿舍日常 第二季', src: '99.png', p: '综合评分19.3' },
    { num: '8', text: '魔法使的新娘', src: '100.png', p: '综合评分19.3' },
]
let gc_rank_dm = document.querySelector('.gc_rank_dm');

for (var key in gcData) {
    gc_rank_dm.innerHTML +=
        `
         <ul>
                <li>
                  <div class = "number">${rankData[key].num}</div>
                    <div class="rank_title">
                        <p>${gcData[key].text}</p>
                    </div>
                    <div class="details">
                        <img src="./images/${gcData[key].src}" alt="">
                        <div class="dm_name">
                            <p>${gcData[key].text}</p>
                            <p>${gcData[key].p}</p>
                        </div>
                    </div>
                </li>
        </ul>
    `
}


// 渲染音乐
let musicData = [
    { src: '79.jpg', txt: '麟犀AI韵律' },
    { src: '80.jpg', txt: 'I-DREAM音乐祭' },
    { src: '81.jpg', txt: '战刻夜想曲' },
    { src: '82.jpg', txt: 'BanG Dream!' },
]
let music = document.querySelector('.music');
for (let key in musicData) {
    music.innerHTML +=
        `
        <li>
            <img src="./images/${musicData[key].src}" alt="">
            <p>${musicData[key].txt}</p>
        </li>
    `
}

// 右边排名

let hotMusicData = [
    { num: '1', text: '李宇春《Privacy》MV', src: '97.png', p: '综合评分15.3' },
    { num: '2', text: '《梦想的声音2》林俊杰极限高音演唱', src: '98.png', p: '综合评分15.3' },
    { num: '3', text: '【催泪向/治愈】名为心做し的痛', src: '98.png', p: '综合评分15.3' },
    { num: '4', text: '极乐净土慢动作', src: '99.png', p: '综合评分15.3' },
]

let hot_music = document.querySelector('.hot_music');

for (var key in hotMusicData) {
    hot_music.innerHTML +=
        `
         <ul>
                <li>
                  <div class = "number">${hotMusicData[key].num}</div>
                    <div class="rank_title">
                        <p>${hotMusicData[key].text}</p>
                    </div>
                    <div class="details">
                        <img src="./images/${hotMusicData[key].src}" alt="">
                        <div class="dm_name">
                            <p>${hotMusicData[key].text}</p>
                            <p>${hotMusicData[key].p}</p>
                        </div>
                    </div>
                </li>
        </ul>
    `
}
var img = document.createElement('img');
img.src = './images/1011.jpg'
hot_music.appendChild(img);

let PuArr = [
    { src: 'p2.2.jpg', title: '狐妖小红娘' },
    { src: 'p2.4.jpg', title: '画江湖之换世门生' },
    { src: 'p2.5.jpg', title: '迪迦奥特曼' },
    { src: 'p2.6.jpg', title: '拳皇命运' },
    { src: 'p2.7.jpg', title: '理想禁区' },
    { src: 'p2.8.jpg', title: '嘻嘻动漫壁纸' },
    { src: 'p2.9.jpg', title: '博人传' },
    { src: 'p2.10.jpg', title: '纳米核心' },
    { src: 'p2.5.jpg', title: '铠甲勇士刑天' },
    { src: 'p2.7.jpg', title: '黑猫警长' },
    { src: 'p2.6.jpg', title: '拳皇命运' },
    { src: 'p2.7.jpg', title: '理想禁区' },
    { src: 'p2.8.jpg', title: '嘻嘻动漫壁纸' },
    { src: 'p2.9.jpg', title: '博人传' },
    { src: 'p2.6.jpg', title: '拳皇命运' },
]
// 瀑布流效果
let bizhi = document.querySelector('.bizhi-foot')
window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let clienthight = document.documentElement.clientHeight;
    let uls = bizhi.getElementsByTagName('ul');
    let y = scrollTop + clienthight;

    for (let i = 0; i < uls.length; i++) {
        let height = uls[i].lastElementChild.offsetHeight + uls[i].lastElementChild.offsetTop;
        if (y > height && PuArr.length > 1) {
            let liNode = document.createElement('li');
            liNode.innerHTML = `
                                <img src="./images/${PuArr[i].src}">
                                <p>${PuArr[i].title}</p>
                            `
            uls[i].appendChild(liNode);
            PuArr.shift();
        }
    }
}







