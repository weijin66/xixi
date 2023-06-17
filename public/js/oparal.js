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
    { src: 'u=2717148160,2795193567&fm=27&gp=0.jpg', txt: '你的名字 & 爱情的穿越' },
    { src: 'xiaolinjia.jpg', txt: '小林家的龙女仆 & 萌化咯' },
    { src: 'jiechen.jpg', txt: '结城友奈是勇者' },
    { src: 'cihua.jpg', txt: '此花绮谭 & 花儿' }
]

let right_img = document.querySelector('.right_img');
for (let key in swiperRightData) {
    right_img.innerHTML +=
        `
     <li>
        <img src="./images/${swiperRightData[key].src}" alt="">
        <p>${swiperRightData[key].txt}</p>
    </li>
    `
}

// 渲染连载动画下面照片
var serializedData = [
    { src: 'qingyinshaon.jpg', txta: '轻音少女', txtb: '平泽唯 & 秋山雾', txtc: '6' },
    { src: 'molizhicao.jpg', txta: '魔力之潮', txtb: 'DARKERミルクJK搾り', txtc: '12' },
    { src: 'yaohuchuans.jpg', txta: '狐妖传说', txtb: '狐仙 & 狐妖', txtc: '10' },
    { src: 'lingyishijie.jpg', txta: '从零开始的异世界生活', txtb: '長月達平', txtc: '3' },
    { src: 'yirenzhixia.jpg', txta: '一人之下', txtb: '张楚岚 & 魔幻', txtc: '21' },
    { src: 'fate6.jpg', txta: '命运长夜', txtb: 'fate', txtc: '9' },
    { src: 'mengzhishaon.jpg', txta: '梦之少女', txtb: '情牵少女', txtc: '5' },
    { src: 'qingyu.jpg', txta: '清淤恋爱记', txtb: '茶花 & 插画', txtc: '8' },
    { src: 'benghuaishijie.jpg', txta: '崩坏的世界', txtb: '超凡创世', txtc: '3' },
    { src: 'llnye10.jpg', txta: '一人之下', txtb: '鸭志田', txtc: '30' },
    { src: '11.jpg', txta: '地狱少女', txtb: '剧情 & 恐怖', txtc: '33' },
    { src: 'ce1-li1.jpg', txta: '一代剑圣', txtb: '盖聂 & 渊虹', txtc: '66' }
]

let serialized_img = document.querySelector('.serialized_img');

for (let key in serializedData) {
    serialized_img.innerHTML +=
        `
       <li>
                    <img src="./images/${serializedData[key].src}" alt="">
                    <div>
                        <p>
                           ${serializedData[key].txta} <br>
                           ${serializedData[key].txtb}
                        </p>
                        <p>
                            更新
                            <span> ${serializedData[key].txtc}话</span>
                        </p>
                    </div>
                </li>
    `
}

// 完结动画部分左边排名 
let rankData = [
    { num: '1', text: '少年锦衣卫第二季', src: 'jinyiwei.jpg', p: '综合评分19.3' },
    { num: '2', text: '侠岚（魔幻武侠类）', src: 'xialan.jpg', p: '综合评分19.3' },
    { num: '3', text: '斗破苍穹（莫欺少年穷）', src: 'qsmy.jpg', p: '综合评分19.3' },
    { num: '4', text: '秦时明月(他们的结局如何？)', src: '107.png', p: '综合评分19.3' },
    { num: '5', text: '灵主（热血悬疑武侠）', src: 'ling.jpg', p: '综合评分19.3' },
    { num: '6', text: '杯莫停', src: 'beimot.jpg', p: '综合评分19.3' },
    { num: '7', text: '换世门生（一段两个世界爱恨情仇）', src: 'huangshims.jpg', p: '综合评分19.3' },
    { num: '8', text: '从前有座仙灵剑山', src: 'lingjiansan.jpg', p: '综合评分19.3' },
    { num: '9', text: '天行九歌', src: 'tianxjiuge.jpg', p: '综合评分19.3' },
]
let rank_left = document.querySelector('.rank_left');

for (let key in rankData) {
    rank_left.innerHTML +=
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

// 右边图片
let rightimgData = [
    { src: 'aotu.jpg', txt: '【11月】凹凸世界英文译名AOTU,一部3D动画' },
    { src: 'lingyu.jpg', txt: '少年秦烈作为搏天族后裔,会有什么样的成长呢?' },
    { src: 'baisexiangpu.jpg', txt: '纯白相薄 / 白色相册 / White Album' },
    { src: 'bingguo.jpg', txt: '改编自日本推理小说家米泽穗信原作的《古典部系列》小说' },
    { src: 'qsmy.jpg', txt: '秦时明月汉时关 & 纵横流派墨家' },
    { src: 'gemingji.jpg', txt: '犬冢久间(犬冢キューマ),' },
    { src: 'shengyu.jpg', txt: '刀剑神域 -序列之争' },
    { src: 'gc.jpg', txt: '一段跨时间跨空间的恋爱，他们的结局如何？' },
]

let right_photo = document.querySelector('.right_photo');

for (let key in rightimgData) {
    right_photo.innerHTML +=
        `
        <li>
            <div class="dimg">
                <img src="./images/${rightimgData[key].src}" alt="">
            </div>
            <p>
                ${rightimgData[key].txt}
            </p>
        </li>
    `
}

let mhimgData = [
    { src: 'mingren.jpg', txt: '火影忍者【漩涡鸣人】' },
    { src: 'lufei.jpg', txt: '海贼王【路飞】' },
    { src: 'kenan.jpg', txt: '名侦探柯南【柯南】' },
    { src: 'sishen.jpg', txt: '死神【黑崎一护】' },
    { src: 'juren.jpg', txt: '进击的巨人【利威尔】' },
    { src: 'yaojingdeweiba.jpg', txt: '妖精的尾巴【纳兹】' },
    { src: 'yinhun.jpg', txt: '银魂【坂田银时】' },
    { src: 'clksd.jpg', txt: '从零开始的异世界生活' },
    { src: 'printed.jpg', txt: '刀剑神域' },
    { src: 'yirenzhixia.png', txt: '一人之下【冯宝宝】' }
]

let mh_img = document.querySelector('.mh_img');

for (let key in mhimgData) {
    mh_img.innerHTML +=
        `
     <li>
        <img src="./images/${mhimgData[key].src}" alt="">
        <p>${mhimgData[key].txt}</p>
    </li>
    `
}

// 渲染轮播图
let NationalInnovation = [
    { src: 'guidaodong.jpg', txt: '鬼刀' },
    { src: 'printdong.jpg', txt: '啦啦啦' },
    { src: 'v_08.jpg', txt: '七月' },
    { src: 'freedong.jpg', txt: '你的名字' },
    { src: 'sumiaodong.jpg', txt: '柯南' },
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