var express = require('express');
var request=require('request');
var router = express.Router();

/* GET home page. */
router.get('/report', function (req, res, next) {
    const cityname=req.query.cityname;
    const method=req.method.toUpperCase();
    const Geturl=req.originalUrl;
    console.log(Geturl);
    let array=Geturl.split('=');
    const name=array[1];
    console.log(name);
    const url="http://v.juhe.cn/weather/index?cityname="+name+"&dtype=&format=&key=15448dc543b57c3eb503a23803f3eb6d";
    request(url,function (error,response,data) {
        if(!error&&response.statusCode===200){
            const chart=JSON.parse(data);
            let re=chart.result;
            console.log(re);
            res.send(re);
            const list=[];
            list.push(re.today.temperature);
            // let future=re.future;
            for (var val in re.future){
                let resu=re.future[val].temperature;
                list.push(resu);
            }
            console.log(list);
            // res.render('blank',{name:cityname,data:list});
        }
    });
});
module.exports = router;
