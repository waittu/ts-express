"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * request  后期可以继承模型（models）数据字段
 * 目前还没想好怎么定义的
 *
*/
var user = require("../controllers/user/get_user");
var routes = [
    {
        method: 'get',
        path: '/api/user',
        component: user.getUser,
        request: {
            path: {},
            body: {},
            query: {}
        }
    },
    {
        method: 'post',
        path: '/api/user',
        component: user.addUser,
        request: {
            path: {},
            body: {},
            query: {}
        }
    }
];
exports.default = routes;
