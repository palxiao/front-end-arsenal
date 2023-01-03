/*
 * @Author: ShawnPhang
 * @Date: 2022-12-30 22:31:59
 * @Description: 滚动页面监听
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 13:30:55
 */
export default (dom: any, cb: any = null) => {
  const handleScroll = () => {
    const currentIndex = dom ? dom.parentElement.scrollTop : document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    cb && cb(currentIndex)
  }
  dom.parentElement.addEventListener('scroll', handleScroll)
}
