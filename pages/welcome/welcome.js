
Page({
  data:{
    showTime: null
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // var _this = this;
    // clearInterval(this.data.showTime);
    // console.log(this.data.showTime);
    // var t = 5000;
    // this.data.showTime = setInterval(function(){
    //    console.log(123);
    //   if(t <= 0) {
    //     clearInterval(_this.data.showTime);
    //     wx.redirectTo({
    //       url: '../index/index'
    //     });
    //   }
    //   t = t - 1000;
    // },1000)
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '啦啦啦啦', // 分享标题
      desc: '啦啦啦啦' // 分享描述
    }
  },
  gotoIndex(){
    wx.redirectTo({
      url: '../index/index'
    });
  }
})