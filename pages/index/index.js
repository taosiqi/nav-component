//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        
        support: [
            // 要多少个tab就新建多少个对象
            {
                name: '第一个'
            },
            {
                name: '第二个'
            },
            {
                name: '第三个'
            }, 
            {
                name: '第四个'
            }
        ],
        // 默认打开第一个tab
        isactive: 0,

    },
    //事件处理函数
   
    checkactive(e) {
        console.log(e)
        this.setData({
            isactive: e.currentTarget.dataset.ppop
        })
    },
    
})