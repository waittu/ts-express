"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bluebird = require("bluebird");
var mongoose = require("mongoose");
var config_1 = require("./config");
var router_1 = require("./src/router");
var app = express();
// 链接mongodb 
mongoose.Promise = bluebird;
mongoose.connect(config_1.default.mongodb_host + "/" + config_1.default.document_name)
    .then(function () {
    /**
     * 路由中间健，后期基于路由表，配置请求api的相关信息
     */
    app.use(router_1.default);
}).catch(function (err) {
    console.log("\u8FDE\u63A5\u6570\u636E\u5E93\u9519\u8BEF");
});
app.listen(7788, 'localhost', function () {
    console.log("\u670D\u52A1\u5DF2\u7ECF\u542F\u52A8 http://localhost:" + config_1.default.port);
});
