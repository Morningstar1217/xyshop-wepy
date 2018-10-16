import wepy from 'wepy'

export default class share extends wepy.mixin {
  share() {
    console.log(this.$parent.globalData.shareProfile)
    return {
      title: this.$parent.globalData.shareProfile,
      path: '/pages/index',
      imageUrl:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538135479434&di=1e26798f3abe2b4feb34a3a47d9d9fcf&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019e98554209ab0000019ae9764c6f.jpg',
      success: function(res) {},
      fail: function(res) {
        // 转发失败
      }
    }
  }
}
