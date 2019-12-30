// 引入用来发送请求的方法
import { request } from "../../request/index.js";

Page({
  data:{
    // 轮播图数组
    swiperList:[],
    // 分类数据
    cateList:[],
    // 楼层数据
    floorList:[],

  },
  onLoad:function(options){
    // 1. 发送异步请求获取检查轮播图数据
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   success:(result)=>{
    //     console.log(result)
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   },
    // })

    this.getSwiperList()
    this.getCateList()

  },
  onReady:function(){

  },
  onShow:function(){

  },
  onHide:function(){

  },
  onUnload:function(){
    
  },

  // 获取轮播图数据
  getSwiperList(){
    request({url:'https://api.zbztb.cn/api/public/v1/home/swiperdata'}).then(result=>{
      this.setData({
        swiperList: result.data.message
      })
    })
  },
  // 分类数据
  getCateList(){
    request({url:'https://api.zbztb.cn/api/public/v1/home/catitems'}).then(result=>{
      console.log(result)
      this.setData({
        cateList: result.data.message
      })
    })
  },
  // 楼层数据
  getFoorList(){
    request({url:'https://api.zbztb.cn/api/public/v1/home/floordata'}).then(result=>{
      console.log(result)
      this.setData({
        floorList: result.data.message
      })
    })
  }
})