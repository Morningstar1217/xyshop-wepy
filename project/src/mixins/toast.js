import wepy from 'wepy'

export default class Toast extends wepy.mixin {
  noMore () {
    wepy.showToast({
      title: '没有更多了...',
      icon: 'none',
      duration: 1500
    })
  }
  loadingToast () {
    wepy.showToast({
      title: '拼命加载中...',
      icon: 'loading',
      duration: 3000
    })
  }
  hideToast () {
    wepy.hideToast()
  }
  favSuccess() {
    wepy.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 1000
    })
  }
}
