
const ng = require('nodegrass');

/**
 * 代理请求对象 httpProxy
 * @param {*请求主机地址} host 
 * @param {*请求参数} data 
 * @param {*成功回调函数} success 
 * @param {*错误回调函数} error 
 */
var httpProxy = function(host, data, success, error) {
  
    // @定义请求头
    var header = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    console.log("@请求URL：" + host);
    console.log("@请求参数：" + JSON.stringify(data));

    // @保存一个时间点
    var startTime = new Date().getTime();

    // @ng.post(url, callback, reqheaders, data, charset)
    // @url 请求地址,
    // @callback 回调函数,
    // @reqheaders 请求头标识,一般使用 'Content-Type': 'application/x-www-form-urlencoded'
    // @data 请求所包含的具体数据,
    // @charset 编码方式，一般为utf8
    ng.post(host, function(data, status, hearders) {

            console.log("@请求耗时：" + (new Date().getTime() - startTime) + "ms");
            console.log("@返回参数： " + data);

            if(status == 200) {

                // @success为httpProxy的回调函数
                success(data); 

            } else if(status == 404) {

                error({"code": 404, data:"应用服务器资源未找到"});

            } else if(status == 500) {

                error({"code": 500, data:"应用服务器错误"});

            } else {

                error({"code": 502, data:"请求网关错误"});
                
            }

        }, header, data, 'utf8')
        .on('error', function(err) {

            console.log(err);

            if(e.code == "ETIMEDOUT") {

                error({"code":502,data:"网关连接超时！"});

            } else if(e.code == "EHOSTUNREACH") {

                error({"code":502,data:"无法连接到服务器，请检查您的网络设置"});

            } else {

                error({"code":502,data:"请求网关错误！"});

            }

        });

};

module.exports = httpProxy;