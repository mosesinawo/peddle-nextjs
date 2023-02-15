import {Schema} from 'mongoose'
import mongoose from 'mongoose'


const registerSchema =  new Schema({
   _id: {type: String, required: true, unique: true},
   email:{
    type: String,
    required: true,
   },
   password: String,
   address: String,
   country: String,



})
const Details = mongoose.models.Test || mongoose.model('Test', registerSchema)

export default Details;