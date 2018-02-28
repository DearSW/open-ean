var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');

// @+ 为你的网站开启 gzip 压缩功能（nodejs、nginx）
// @通过 gzip / deflate 压缩响应数据，这个compression中间件应该放置在所有的中间件最前面以保证所有的返回都是被压缩的
var compression = require('compression');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// @view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// @+
// @修改模板引擎，之前是默认的jade，现在改为ejs。
app.set('view engine', 'ejs');

// @+
app.use(compression());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// @日志
app.use(logger('dev'));

// @body-parser是一个HTTP请求体解析中间件，否则，默认只能解析GET请求
app.use(bodyParser.json()); // @解析 application/json
app.use(bodyParser.urlencoded({ extended: false })); // @解析 application/x-www-form-urlencoded

// @cookie解析
app.use(cookieParser());

// @Express 会在静态资源目录下查找文件，所以不需要把静态目录作为URL的一部分。
// 静态资源文件通俗的可以理解成对于不同的用户来说，内容都不会变化的文件。
// 比如不管是张三李四还是王五访问百度，他们所接收到的看到的图片、css文件和前端javascript文件都是一样的，我们称这类文件为静态资源文件。
// express.static 是 Express 内置的唯一一个中间件。是基于 serve-static 开发的，负责托管 Express 应用内的静态资源。
// @之前默认是没有浏览器缓存设置的，现在设置上。
// app.use(express.static(path.join(__dirname, 'public')));
const expressStaticOptions = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['css', 'png', 'gif', 'jpg', 'js', 'html'],
	// index: true,
	maxAge: '1800', // @0.5小时
	redirect: true,
	setHeaders: function (res, path, stat) {
		// res.set('x-timestamp', Date.now());
		// res.setHeader("Cache-Control","no-cache");				
		res.setHeader("Cache-Control", "public, max-age=1800");
	}
};
app.use( express.static( path.join(__dirname, 'public/n/dist')) );

// @jwt处理
app.use(expressJwt({secret: 'secret'}).unless({path: ['/login']}));

// @路由
app.use('/', index);
app.use('/users', users);

// @jwt认证错误的处理
app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send('invalid token...');
	}
});

// @catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// @error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

app.set('port', process.env.PORT || '4008');
app.listen(app.get('port'), function() {
  console.log('HaHa.......EAN Start at the port: ' + app.get('port'));
});

// @注意：写端口的时候也不能任意指定，需要使用空闲端口，有些端口被OS与浏览器占据
