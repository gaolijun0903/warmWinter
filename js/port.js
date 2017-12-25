2017.11.11司机抽奖活动,活动已结束
原型图
https://prototype.yongche.org/hujingjing/%E5%8F%8C%E5%8D%81%E4%BA%8C%E6%B4%BB%E5%8A%A8/index.html#g=1&p=双十二抽奖活动

16825825825
16886318947  0001
16820171161
16886318957 测试手机号

// 登录接口
http://yaoyakun.market.yongche.org/miscellaneous/Driverwarmwinter/login?cellphone=xxx&id_card=xxx

参数说明
	cellphone 司机手机号
	id_card 司机身份证后四位

{
    "code": 200,
    "msg": “OK”,
   
 	"result": {
        
		“status”: 1, // 是否登录状态
	
		“driver_id” : xxx // 司机ID
    }
}





// 抽奖初始化页面

http://yaoyakun.market.yongche.org/miscellaneous/Driverwarmwinter/getInitPage


{
    "code": 200,
    "msg": "OK",
   
 "result": {
       
 	"isClick": 0, // 是否可点击抽奖
 
 	"count": 0,   // 随叫随到单数
   
 	"remain_times": 0, // 可抽奖次数
    
 	"isLogin": 1, // 是否登录
       
 	"driver_id": "50056790", // 司机ID
    
 	"award_type": 6, // 所中奖品
    
 	"driverList": [ // 中奖司机列表
    
        {
            "name": "易***子",
       
         	"cellphone": "168****58251",
          
      		"award_type": 3
        }
       
 	]
    
}
}




// 抽奖

http://yaoyakun.market.yongche.org/miscellaneous/Driverwarmwinter/getResult


{
    "code": 200,
    "msg": "保温杯",
 
   "result": {
   
     "award_type": 6 // 所中奖品
  
  }
}






 * code说明
 *


 * 200 OK
 
* 101 抽奖未开始
 
* 102 抽奖已结束
 
* 201 司机不存在

* 202 请完成3单随叫随到订单后再来抽奖
 
* 203 请输入正确登陆信息
 
* 204 请登录后抽奖
 
* 205 您已抽过奖