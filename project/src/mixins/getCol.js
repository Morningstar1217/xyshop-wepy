import wepy from 'wepy'

export default class GetCol extends wepy.mixin {
  getCol(sku, pic, title, price, marketprice) {
    var favs = wepy.getStorageSync('favs')
    if (!favs) {
      favs = []
    }
    const arr2 = []
    const col = {
      sku: sku,
      pic: pic,
      title: title,
      price: price,
      market_price: marketprice
    }
    favs.forEach(ele => {
      if (sku !== ele.sku) {
        arr2.unshift(ele)
      }
    })
    arr2.unshift(col)
    wepy.setStorage({
      key: 'favs',
      data: arr2
    })
    this.favSuccess()
  }
}
