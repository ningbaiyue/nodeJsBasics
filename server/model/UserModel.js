/*
 * @作者: NingBY
 * @Date: 2024-11-04 10:58:04
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
    username: String,
    password: String,
    age: Number,
    avatar: String
}

const UserModel = mongoose.model("user",new Schema(UserType))
// 模型user 将会对应 users 集合, 
module.exports = UserModel