/*
 * @Author: ShawnPhang
 * @Date: 2021-09-25 18:28:46
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-25 18:46:22
 * @site: m.palxp.cn / blog.palxp.com
 */
/**
 * 对象数组模糊查询
 * @param  {Array}  list     原数组
 * @param  {String} field    对应字段
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
 * eg: fuzzyQuery([{key:123},{key:62},{key:7}], 'key', 2)  // [{key:123},{key:62}]
 */
function fuzzyQuery(list, field, keyWord) {
  let reg = new RegExp(keyWord)
  let arr = []
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][field])) {
      arr.push(list[i])
    }
  }
  return arr
}

export default fuzzyQuery
