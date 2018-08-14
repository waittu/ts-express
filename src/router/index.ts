import * as express from 'express';
const app = express();
import {default as router} from './router'
router.forEach((item:any) => {
    if(item.method==='get'||item.method==='GET'){
        app.get(item.path,item.component)
    }else if(item.method==='post'||item.method==='POST'){
        app.post(item.path,item.component)
    }else if(item.method==='delete'||item.method==='DELETE'){
        app.delete(item.path,item.component)
    }else if(item.method==='PUT'||item.method==='put'){
        app.put(item.path,item.component)
    }
});
export default app