const express=require('express');
var proxy=require('http-proxy-middleware');

let app=express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});



// var options={
//     target:'http://www.juooo.com',//http://www.juooo.com/Index/ajaxGetCityRecommendData
//     changeOrigin:true,
//     pathRewrite:{
//         '^/cityapi':'/'  //cityapi
//     }
// }

// var exampleProxy=proxy(options);
//   app.use('/cityapi',exampleProxy);


// https://m.juooo.com/index/getNationalSildeList
  app.use('/api',proxy({
      'target':'https://m.juooo.com',      
      'changeOrigin':true,
      'pathRewrite':{
          '^/api':'/'
      }
  }))

//   http://www.juooo.com/Index/ajaxGetCityRecommendData
  app.use('/city',proxy({
    'target':'http://www.juooo.com',      
    'changeOrigin':true,
    'pathRewrite':{
        '^/city':'/'
    }
}))


app.listen(3003,function(){
    console.log('服务器已开启  http://location:3003')
})

// app.use('/proxy',exampleProxy);