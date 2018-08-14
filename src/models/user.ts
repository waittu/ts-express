import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    user_name: { 
        type: String, 
        required: true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type: String, 
        required: true
    }
})
const userModel = model('user',userSchema);
export default userModel