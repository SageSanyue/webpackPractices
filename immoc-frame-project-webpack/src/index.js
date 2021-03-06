// 引入 css
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

// 引入第三方模块
import _ from 'lodash'
console.log(_.each)

// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }

// 引入动态数据-懒加载
setTimeout(() => {
    import('./dynamic-data.js').then(res => {
        console.log(res.default.message)
    })
}, 1500)
