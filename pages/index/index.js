var dataList = require('../../data/posts-data.js');
Page({
    data: {
        newsItems: []
    },
    onLoad: function (options) {
        console.log('onLoad');
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
        })
        // 生命周期函数--监听页面加载
        this.setData({
            newsItems: dataList.postList
        });
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
        console.log('onReady');
        wx.hideToast();
    },
    onShow: function () {
        // 生命周期函数--监听页面显示

    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏

    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载

    },
    onPullDownRefresh: function () {
        // 页面相关事件处理函数--监听用户下拉动作

    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        // return {
        //   title: 'title', // 分享标题
        //   desc: 'desc', // 分享描述
        //   path: 'path' // 分享路径
        // }
    },
    toDetails: function(event){
        console.log(event.currentTarget.dataset.detailsId)
        wx.navigateTo({
          url: '../details/details'
        });
    }
});