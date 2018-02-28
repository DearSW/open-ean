
// @连接MongoDB的模型、方法

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// @assert.equal(actual, expected[, message])
// @assert.strictEqual(actual, expected[, message])

// @连接的URL地址
const url = 'mongodb://localhost:27017';

// @连接的数据库名 ean
const dbName = 'ean';

// @数据库连接信息
const ConnectMongoDBInfo = {
    url: url,
    dbName: dbName
};

// @连接MongoDB 
const ConnectMongoDB = function(callback) {

    if(typeof callback !== 'function') {
        return console.log('@参数错误');
    }

    MongoClient.connect(url, function(err, client) {
        callback(err, client);
    });

}


// @连接测试方法
const testMongodb = function() {

    // @使用connect方法连接到mongodb服务器
    MongoClient.connect(url, function(err, client) {

        // @断言
        assert.equal(null, err);
        console.log("@MongoDB连接成功");
    
        const db = client.db(dbName);

        client.close();
    
    });

}

// @测试插入数据
const testMongodb2 = function(callback) {

    // @使用connect方法连接到mongodb服务器
    MongoClient.connect(url, function(err, client) {

        // @断言
        assert.equal(null, err);
        console.log("@MongoDB连接成功");        
      
        // @获取数据库
        const db = client.db(dbName);
      
        // @获取集合
        const collection = db.collection('userInfo');

        // @插入文档
        collection.insertMany([
                {'user': 'test1', 'password': 'test1', 'jwt': '123.456.789'}, 
                {'user': 'test2', 'password': 'test2', 'jwt': 'abc.cef.ghi'}, 
                {'user': 'test3', 'password': 'test3', 'jwt': 'ABC.DEF.GHI'}
            ], function(err, result) {
                assert.equal(err, null);
                assert.equal(3, result.result.n);
                assert.equal(3, result.ops.length);
                console.log("@成功插入三条数据");
                callback(result);
        });

        client.close();        

    });

}
 
module.exports = {
    testMongodb,
    testMongodb2,
    ConnectMongoDB,
    ConnectMongoDBInfo
}

