<template>
    <div class="film">
        <div class="filmLeft">
            <!-- 电影的座位 -->
            <h3>屏幕</h3>
            <ul>
                <li v-for="(item, index) in seatflag" :key="index" class="seat" :class="{
                    'noSeat': seatflag[index] == -1,
                    'seatSpace': seatflag[index] == 0,
                    'seatActive': seatflag[index] == 1,
                    'seatNoUse': seatflag[index] == 2
                }" @click="handleClick(index)">
                </li>
            </ul>
        </div>
        <div class="filmRight">
            <div class="rightTop">
                <div class="rightTopleft">
                    <!-- 电影的海报 -->
                    <!-- <p>{{ filmInfo.filmImg }}</p> -->
                    <a href="#">
                        <img :src="filmInfo.filmImg" alt="..." height="200">
                    </a>
                </div>
                <div class="rightTopright">
                    <!-- 电影的信息 -->
                    <p>影片中文名：<strong>{{ filmInfo.name }}</strong></p>
                    <p>影片英文名：{{ filmInfo.nameEnglish }}</p>
                    <p>影片类型：{{ filmInfo.storyType }}</p>
                    <p>版本：{{ filmInfo.copyRight }}</p>
                    <p>{{ filmInfo.place }} / {{ filmInfo.timeLength }}</p>
                    <p>{{ filmInfo.timeShow }}</p>
                </div>
            </div>
            <div class="rightBottom">
                <!-- 电影票的购买信息-->
                <p>电影院：<strong>{{ filmInfo.cinema }}</strong></p>
                <p>影厅：<strong>{{ filmInfo.room }}</strong></p>
                <p>场次：<strong>{{ filmInfo.time }}</strong></p>
                <p id="seatSelect">座位：<span v-for="(item, index) in curSeatDisp" :key="index">{{ item }}</span></p>
                <p>已选择
                    <strong style="color: red;">{{ count }}
                    </strong>个座位，
                    <strong style="color:red">再次点击座位可取消。
                        <span v-if="maxFlag">您一次最多只能买五张票！</span>
                    </strong>
                </p>
                <hr>
                <p>单价：<strong>￥{{ numberFormat(filmInfo.unitPrice) }}</strong></p>
                <p>总价：<strong>￥{{ numberFormat(fileTotal) }}</strong></p>
                <hr>
                <button type="button" class="btn" @click="handleBuy" style="display: block; margin: 0 auto;">确定下单</button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, computed } from "vue";
export default {
    setup() {
        const state = reactive(
            {
                seatflag: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 2, 2, 0, 0, 0, 0,
                    0, 0, 0, 2, 2, 0, 2, 2, 0, 0,
                    -1, 0, 0, 0, 0, 0, 0, 0, 0, -1,
                    -1, -1, 0, 0, 0, 0, 0, 0, -1, -1,
                ],
                curSeat: [],
                curSeatDisp: [],
                count: 0,
                maxFlag: false,
                filmInfo: {
                    name: '铃芽之旅',
                    nameEnglish: 'Suzume',
                    copyRight: '日语2D',
                    filmImg: require('../assets/铃芽之旅.jpg'),
                    storyType: '动画',
                    place: '中国大陆',
                    timeLength: '122分钟',
                    timeShow: '2023.3',
                    cinema: '万达影城',
                    room: '4号厅',
                    time: '2023.04.08(周六) 20:00',
                    unitPrice: 38,
                }
            }
        )
        const handleClick = (index) => {
            if (state.seatflag[index] == 1) {
                state.seatflag[index] = 0;
                state.curSeat.splice(state.curSeat.indexOf(index), 1);//
                // state.curSeat.splice(state.curSeat.indexIndex(item=>item===index),1);
            } else {
                if (state.seatflag[index] == 0 && state.curSeat.length < 5) {
                    state.seatflag[index] = 1;
                    state.curSeat.push(index);
                }
            }
            state.curSeatDisp = []
            for (const data of state.curSeat) {
                state.curSeatDisp.push(Math.floor(data / 10 + 1) + '排' + (Math.floor(data % 10) + 1) + '座');
            }
            var mySeat = state.seatflag.filter(item => item === 1);
            state.count = mySeat.length;
            if (state.count >= 5) {
                state.maxFlag = true;
                alert('您已经选满5个座位了');
            } else {
                state.maxFlag = false;
            }
        }
        const fileTotal=computed(()=>{
            return state.count*state.filmInfo.unitPrice;
        })
        const numberFormat=(value)=>{
            return value.toFixed(2);
        }
        return {
            ...toRefs(state),
            handleClick,
            fileTotal,
            numberFormat
        }
    }
}
</script>
<style lang="scss" scoped>
#seatSelect span{
    border:1px solid ;
    background-color: #fff;
    margin:5px;
    padding:1px
}
.seat {
    float: left;
    width: 30px;
    height: 30px;
    margin: 5px 10px;
    cursor: pointer; //鼠标变成手指
}

.seatSpace {
    background: url("../assets/可选座位.png");
    // background-image:url("../assets/可选座位.png") ;
    background-size: 100% auto // background:url("../assets/可选座位.png") no-repeat 1px -29px;
}

.seatActive {
    background: url("../assets/选座位.png");
    background-size: 100% auto // background:url("../assets/选座位.png") no-repeat 1px 0px;
}

.seatNoUse {
    background: url("../assets/已选座位.png");
    background-size: 100% auto // background:url("../assets/已选座位.png") no-repeat 1px -56px;
}

.noSeat {
    // background:url("../assets/直方框.png") ;
    // background-image:url("../assets/直方框.png") ;
    // background-size: 100% auto
    // background:url("../assets/直方框.png") no-repeat 1px -84px;
}

.film {
    // text-align: center;
    margin: 0 auto;
    width: 1050px;
    border: 1px solid grey;
    height: 550px;
}

.filmLeft {
    width: 550px;
    height: 500px;
    float: left;
}

.filmLeft h3 {
    text-align: center;
}

.filmLeft ul {
    list-style: none; //去掉ul前面的小圆点
}

.filmRight {
    width: 500px;
    height: 550px;
    float: left;
    background-color: bisque;
}

.rightTopleft {
    float: left;
    margin: 20px 15px 5px 10px;
}

.rightTopright {
    float: left;
    margin: 0px 0px 5px 5px;
}

.rightBottom {
    clear: both; //清除浮动
    margin: 0px 0px 0px 10px;
}

.rightBottom p {
    line-height: 12px;
}
</style>