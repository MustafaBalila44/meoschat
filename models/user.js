const mongoose = require("mongoose");

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
 username:{
    type: String,
    required:true
    },
 email:{
    type: String,
    required:true
    },
 password: {
    type: String,
    required:true
    }
});
const User = module.exports = mongoose.model("User",UserSchema)