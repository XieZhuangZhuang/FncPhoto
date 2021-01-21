Page({

  /**
   * 页面的初始数据
   */
  data: {
    "swiperList":[
      {
        "src":"../../images/1.webp"
      },{
        "src":"../../images/2.webp"
      },{
        "src":"../../images/1.webp"
      }
    ],
    "swiperList1":[
      {
        "src":"../../images/11.png"
      },{
        "src":"../../images/11.png"
      },{
        "src":"../../images/11.png"
      },{
        "src":"../../images/11.png"
      },{
        "src":"../../images/11.png"
      },{
        "src":"../../images/11.png"
      }
    ],
    navbar: ['精美作品', '摄影大师'],
    currentTab: 0
  },
  navbarTap: function(e){
    if(e.currentTarget.dataset.idx == 0){
      this.setData({
        swiperList1: [
          {
            "src":"../../images/11.png"
          },{
            "src":"../../images/11.png"
          },{
            "src":"../../images/11.png"
          },{
            "src":"../../images/11.png"
          },{
            "src":"../../images/11.png"
          },{
            "src":"../../images/11.png"
          },{
            "src":"../../images/11.png"
          }
        ]
      })
    }else{
      this.setData({
        swiperList1: [
          {
            "src":"../../images/3.png"
          },{
            "src":"../../images/3.png"
          },{
            "src":"../../images/3.png"
          },{
            "src":"../../images/3.png"
          },{
            "src":"../../images/3.png"
          },{
            "src":"../../images/3.png"
          },{
            "src":"../../images/3.png"
          }
        ]
      })
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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
    console.log("触底了。。。");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})