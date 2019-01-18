// pages/picker/picker.js
const date = new Date();
const years = [];
const months = [];
const days = [];
for (let index =1990; index <= date.getFullYear(); index++) {
  years.push(index)
}
for (let index =1; index <= 12; index++) {
  months.push(index)
}
for (let index =0; index <= 31; index++) {
  days.push(index)
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    years,
    months,
    days,
    array: ['美国', '中国', '巴西', '日本', '韩国', '巴西', '印度', '泰国'],
    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    multiIndex: [1, 0, 1],
    time: '18:41',
    date: '2018-01-01',
    region: ['广东省', '广州市', '海珠区'],
  },
  bindDateChange(e) {
    console.log(e.detail);
    this.setData({
      date:e.detail.value
    }) 
  },
  onPickerView(e) {
    console.log(e.detail);
    
  },
  onRegion(e) {
    console.log(e.detail);
    
  },
  /**
   * 
   * @param {*} options 
   */
  onMulti(e) {
    console.log(e.detail);

  },
  /**
   * 
   */
  onTime(e) {
    console.log(e.detail);

  },
  onColmn(e) {
    console.log(e.detail);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * onPicker
   */
  onPicker(e) {
    console.log(e.detail);

  }
})