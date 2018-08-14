"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var router_1 = require("./router");
router_1.default.forEach(function (item) {
    if (item.method === 'get' || item.method === 'GET') {
        app.get(item.path, item.component);
    }
    else if (item.method === 'post' || item.method === 'POST') {
        app.post(item.path, item.component);
    }
    else if (item.method === 'delete' || item.method === 'DELETE') {
        app.delete(item.path, item.component);
    }
    else if (item.method === 'PUT' || item.method === 'put') {
        app.put(item.path, item.component);
    }
});
exports.default = app;
