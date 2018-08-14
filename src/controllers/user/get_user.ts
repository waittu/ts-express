import { Request ,Response} from "express";
import {default as userModel} from '../../models/user'

export let getUser = async (req:Request,res:Response)=>{
  const user_list =   await userModel.find();
  if(user_list){
    res.json(user_list)
  }
}
export let addUser = (req:Request,res:Response)=>{
    const user_data = {
        user_name:'TUTU',
        phone:'17717440878',
        email:'waittutu2163.com'
    }
     const add_user = new userModel(user_data)
     add_user.save(err=>{
         if(err){
            res.json({code:0,message:'添加错误'})
         }else{
            res.json(user_data)
         }
     });
}