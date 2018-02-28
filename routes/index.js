var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// @代理对象
const httpProxy = require('../models/http-proxy');

// @数据库操作对象
const mongodbOP = require('../models/jwt');

/**
 * @主页面
 */ 
router.get('/', function(req, res, next) {

	res.render('index');

});

/**
 * @登录
 */
router.post('/login', function(req, res, next) {

	// @如果有远程服务器，就代理过去
	// httpProxy('login', {
	// 	'name': req.body.name,
	// 	'password': req.body.password,
	// 	'jwt': req.body.jwt
	// }, function(data) { // @成功

	// }, function(error) { // @失败

	// })

	// @没有远程服务器，就使用Express服务

	let username = req.body.username;
	let password = req.body.password;

	let returnJson = {
		'status': false,
		'info': ''
	}
	  
	if (!username) {
		returnJson.status = false;
		returnJson.info = "账户信息不能为空";
		return res.status(400).json(returnJson);
	}

	if (!password) {
		returnJson.status = false;
		returnJson.info = "账户信息不能为空";
		return res.status(400).json(returnJson);
	}

	mongodbOP.findUserInfo(username, function(err, result) {
		
		// @出错
		if(err) {

			returnJson.status = false;
			returnJson.info = '连接出错';

		} else {

			if(!result) { // @未找到相关的用户信息
				returnJson.status = false;
				returnJson.info = '未找到相关的用户信息';
			} else { // @找到了相关的用户信息

				// @检查密码是否一致
				if(password == result[0].password) {

					returnJson.status = true;
					returnJson.info = '登录成功';

					// @jwt.sign(payload, secretOrPrivateKey, [options, callback])
					var authToken = jwt.sign({username: username}, "secret", { expiresIn: '1h' });

					returnJson.token = authToken;

				} else {
					returnJson.status = false;
					returnJson.info = '密码错误';
				}

			}

		}

		// @返回json数据
		res.json(returnJson);

	});

});

/**
 * @注册
 */
router.post('/register', function(req, res, next) {




});


/**
 * @测试代码
 */

router.post('/user', function(req, res, next) {
	res.status(200).json({
		id: '1',
		username: 'dearsw',
		country: 'china',
		age: '22'
	});
});

router.get('/mongodb', function(req, res, next) {
	console.log("MongoDB数据库测试");
	mongodbOP.login();
	res.json({ 'stste': false });
})

router.get('/mongodbinsert', function(req, res, next) {
	console.log("MongoDB数据库插入测试");
	mongodbOP.test2();
	res.json({ 'stste': true });
})

module.exports = router;
