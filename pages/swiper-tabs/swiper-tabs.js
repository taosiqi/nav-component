// pages/swiper-tabs/swiper-tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        currentTab: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        swiperTab: function(e) {
            var that = this;
            that.setData({
                currentTab: e.detail.current
            });
        },
        clickTab: function(e) {
            var that = this;
            if (this.data.currentTab === e.target.dataset.current) {
                return false;
            } else {
                that.setData({
                    currentTab: e.target.dataset.current
                })
            }
        },
    },
    onShow() {
        // swiper有高度限制，可以根据swiper -item下面的数据列表长度自动添加高度
        this.setData({
            // height: this.data.arrar.length * 220
        })
    }
})