import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 每次刚进入网站，肯定会调用main.js，在岗调用的时候，从本地存储中，把缓存的
// 购物车数据取出来放到state中
var car = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car')) : []
console.log(car)

export default new Vuex.Store({
  state: {
    car: car
    // 将购物车中的上品数据，存储在car数组中，
    // 数组对象{id:商品id,count:数量，price:价格，title:商品名称，selected:商品选中状态}
  },
  mutations: {
    addTocar (state, obj) {
      // 点击加入到购物车保存商品信息
      // 1.如果购物车之前有对应的商品，只需要更新数量
      // 2.如果没有过，则直接将商品数据push到car列表中去

      var flag = false
      // 默认在购物车中没有找到相同的商品
      state.car.some(item => {
        if (item.id === obj.id) {
          item.count += obj.count
          flag = true
          return true
        }
      })
      // 如果最终循环完毕，数组里没有这个商品，就push
      if (!flag) {
        console.log(state.car)
        state.car.push(obj)
      }

      // 当更新了car之后，将其存储到本地的loaclStorage中去，防止刷新后没有的问题
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateCarNum (state, goodsinfo) {
      state.car.forEach(item => {
        if (item.id === goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 当修改商品数量之后，把最新的购物车数据保存到本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    deleteCar (state, id) {
      state.car.some((item, index) => {
        if (item.id === id) {
          state.car.slice(index, 1)
        }
        return true
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateSelected (state, info) {
      state.car.some(item => {
        if (item.id === info.id) {
          item.selected = info.selected
        }
        return true // 将不再执行
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    // 相当于计算属性computed,相当于过滤器filters
    getAllcount (state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount (state) {
      var o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.count * parseInt(item.price)
        }
      })
      return o
    }
  }
})

// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {

//     // 注意：如果要操作stor中的state值，只能通过调用mutations中的方法才能操作对应的数据，
//     // 不推荐直接操作state中的数据，万一数据紊乱，不能快速定位原因，每个组件都可能有方法

//     // 注意：子组件调用mutations中方法，只能使用this.$store.commit('方法名',参数)
//     // mutations的参数列表中只能支持两个参数，其中
//     // 参数1：state状态
//     // 参数2：通过commit提交过来的参数，多个参数，可以利用数组或者对象
//     increment (state) {
//       state.count++
//     },
//     subtract (state) {
//       state.count -= 1
//     }
//   },
//   getters: {
//     // 注意：这里的getters只负责对外提供数据，不负责修改数据，如果要修改state中的数据
//     // 请去找mutations

//     // getters方法和组件中的过滤器比较类似，因为过滤器和getters都没有修改原数据，
//     // 都是把原数据做了一层包装，提供给了调用者
//     // 其次，getters也与computed比较像，只要state中的数据发生了变化，如果getters同时
//     // 引用了这个数据，那么就会立即触发getters的重新求值
//     optCount (state) {
//       return '当前最新的count值是：' + state.count
//     }
//   },
//   actions: {

//   }

//   // 总结：
//   // 1.state中的数据，不能直接修改，必须通过mutations
//   // 2.组件从store中获取数据：this.$store.state.count
//   // 3.组件想要修改store中的数据，必须使用mutations提供的方法:thhis.$store.commit('方法'，参数)
//   // 4.如果state中的数据，在对外提供的对象时需要提供一层包装，推荐使用getters：this.$store.getters.''
// })
