// 这种导出不具有类型检测,ts认为any类型
// module.exports = {
//     name: 'yang guang he',
//     say(name: string) {
//         return name
//     }
// }

// 这种能够使用类型检测
export = {
    name: 'yang guang he',
    say(name: string) {
        return name
    }
}