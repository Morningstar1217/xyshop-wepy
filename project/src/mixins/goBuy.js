import wepy from 'wepy'

export default class GoBuy extends wepy.mixin {
  goBuy(sku) {
    const url = this.$parent.globalData.host + this.$parent.globalData.getCouponUrl
    wepy
      .showModal({
        title: '大白提示',
        content: '小程序无法打开此链接，点击确定复制淘口令，在淘宝打开即可'
      })
      .then(res => (res.confirm ? this.copy(url, sku) : ''))
  }
  copy(url, sku) {
    wepy
      .request({
        url: url,
        data: {
          sku: sku
        }
      })
      .then(res =>
        setTimeout(() => {
          wepy.setClipboardData({
            data: res.data.data
          })
        }, 100)
      )
  }
}
