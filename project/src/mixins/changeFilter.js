import wepy from 'wepy'

export default class ChangeFilter extends wepy.mixin {
  changeFilter(value) {
    this.loadingToast()
    this.featuredComList = []
    this.filterCount = value
    this.currentPage = 1
    switch (value) {
      case '0':
        this.getGoodsList()
        this.price_h = true
        break
      case '1':
        var sort = 'sell'
        this.getGoodsList(this.currentPage, this.count, sort)
        this.price_h = true
        break
      case '2':
        this.price_h = !this.price_h
        sort = this.price_h ? 'price_h' : 'price'
        this.getGoodsList(this.currentPage, this.count, sort)
        break
      default:
        sort = 't'
        this.getGoodsList(this.currentPage, this.count, sort)
        this.price_h = true
        break
    }
  }
}
