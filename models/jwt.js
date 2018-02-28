
// @JWT处理

const MongoDB = require('./mongodb-connect');


/**
 *  @根据用户名查找用户信息
 **/
const findUserInfo = function(username, callback) {

    // @打开数据库
    MongoDB.ConnectMongoDB(function(err, client) {

        // @连接错误
        if(err) {
			return callback(err);
        }

        console.log("@MongoDB连接成功");        
      
        // @获取数据库
        const db = client.db(MongoDB.ConnectMongoDBInfo.dbName);
      
        // @获取集合
        const collection = db.collection('userinfo');

        // @文档操作
        collection.find({
            'username': username
        }).toArray(function(err, docs) {

            // @关闭数据库连接
            client.close();

            // @读取失败
            if(err) {
                return callback(err);
            }

            // @读取成功
            callback(null, docs);

        })
        
    });

};

/**
 *  @存储用户信息
 **/
const saveUserInfo = function(username, password, callback) {

    // @打开数据库
    MongoDB.ConnectMongoDB(function(err, client) {

        // @连接错误
        if(err) {
			return callback(err);
        }

        console.log("@MongoDB连接成功");        
      
        // @获取数据库
        const db = client.db(MongoDB.ConnectMongoDBInfo.dbName);
      
        // @获取集合
        const collection = db.collection('userinfo');

        // @文档操作
        collection.insertMany([
            {
                'username': username,
                'password': password
            }
        ], function(err, result) {

            // @关闭数据库连接
            client.close();

            // @插入失败
            if(err) {
                return callback(err);
            }

            // @读取成功
            callback(null, result);

        })

    })

};


/**
 *  @测试代码
 * */

const login = function() {
    MongoDB.testMongodb();
}

const test2 = function() {
    MongoDB.testMongodb2(function(result) {
        console.log(result);
    });
}

module.exports = {
    login,
    test2,
    saveUserInfo,
    findUserInfo
};