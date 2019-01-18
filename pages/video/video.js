// pages/video/video.js
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)   // AE 、  B  、8
    color = color.length == 1 ? '0' + color : color  //AE   、 0B   、08
    rgb.push(color)
  }
  return '#' + rgb.join('') //AE0B08
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: [
      "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=56841&editionType=default&source=qcloud",
    ],
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
      }],
    inputValue: null,
    video1Context: null,
    danmuInput:null
    
  },
  /**
   * 弹幕功能
   */
  onInput(e) {
    this.inputValue = e.detail.value;
    console.log(this.inputValue);
    console.log(this);
    
    
  },
  SendDanMu() {
    this.video1Context.sendDanmu({
      text: this.inputValue,
      color:getRandomColor()
    })
  },
  onBindplay(e) {
    console.log(e);

  },
  onBindpause(e) {
    console.log(e);
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
    this.video1Context = wx.createVideoContext('video0');
    
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

  }
})