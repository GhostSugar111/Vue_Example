<template>
    <div id="app">
        <div v-if="books.length">
            <table border="1" align="center" width="500">
                <caption>
                    <h2>购物车</h2>
                </caption>
                <thead>
                    <tr>
                        <th></th>
                        <th>名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in books" :key="index" align="center">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ filter(item.price) }}</td>
                        <td>
                            <button @click="decrement(index)" v-bind:disabled="item.count <= 0">-</button>
                            {{ item.count }}
                            <button @click="increment(index)">+</button>
                        </td>
                        <td><button @click="removeHandle(index)">移除</button></td>
                    </tr>
                    <tr align="center">
                        <td colspan="2">总价格</td>
                        <td colspan="3">{{ filter(computedName) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 v-else>
            购物车为空
        </h2>
    </div>
</template>
<script>
import { reactive, toRefs, computed } from "vue";
export default {
    setup() {
        const state = reactive(
            {
                books: [
                    {
                        id: 1,
                        name: "《算法导论》",
                        price: 85.00,
                        count: 2
                    },
                    {
                        id: 2,
                        name: "《UNIX编程艺术》",
                        price: 59.00,
                        count: 3
                    },
                    {
                        id: 3,
                        name: "《编程原理》",
                        price: 39.00,
                        count: 2
                    },
                    {
                        id: 4,
                        name: "《代码大全》",
                        price: 128.00,
                        count: 4
                    }
                ]
            }
        )
        const decrement = (index) => {
            state.books[index].count--
        }
        const increment = (index) => {
            state.books[index].count++
        }
        const removeHandle = (index) => {
            state.books.splice(index, 1)
            for (let i = 0; i < state.books.length; i++) {
                state.books[i].id = i + 1
            }
        }
        const filter = (price) => {
            return "￥" + price.toFixed(2)
        }
        const computedName = computed(() => {
            let totalPrice = 0
            for (let i = 0; i < state.books.length; i++) {
                totalPrice += state.books[i].price * state.books[i].count
            }
            return totalPrice
        })
        return {
            ...toRefs(state),
            computedName,
            decrement,
            increment,
            removeHandle,
            filter
        }
    }

}



</script>
<style lang="scss" scoped></style>