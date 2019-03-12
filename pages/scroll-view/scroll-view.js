// pages/scroll-view/scroll-view.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navData: [
            {
                name: "一年级语文"
            },
            {
                name: "二年级数学"
            },
            {
                name: "三年级英语"
            },
            {
                name: "四年级美术"
            },
            {
                name: "五年级国语"
            }
        ],
        nav: [
            {
                name: "免费课程"
            },
            {
                name: "最新上线"
            },
            {
                name: "销量最高"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    chooseTab: function (e) {
        this.setData({
            type: e.currentTarget.dataset.type
        })
        // this.orderList();
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

    }
})