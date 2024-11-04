/*
 * @作者: NingBY
 * @Date: 2024-11-04 02:16:27
 */
// 连接数据库

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/nby_project")
// 插入集合和数据,数据库nby_project会自动创建