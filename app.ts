import * as express from 'express';
import * as bluebird from "bluebird";
import * as mongoose  from 'mongoose'
import dev from './config';
import {default as routers} from './src/router';
const app = express();
// 链接mongodb 
(<any>mongoose).Promise = bluebird
mongoose.connect(`${dev.mongodb_host}/${dev.document_name}`)
.then(()=>{
    /**
     * 路由中间健，后期基于路由表，配置请求api的相关信息
     */
    app.use(routers)
}).catch(err=>{
    console.log(`连接数据库错误`);
})
app.listen(7788, 'localhost', () => {
    console.log(`服务已经启动 http://localhost:${dev.port}`);
})