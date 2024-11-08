/*
 * @作者: NingBY
 * @Date: 2024-11-04 16:19:17
 */
const UserService = require("../services/UserService");
const JWT = require("../util/JWT");
const UserController = {
    addUser: async (req, res) => {
        console.log(req.body, req.file);
        //插入数据库
        // 1. 创建一个模型(user,限制filed类型), 一一对应数据库的集合(users)
        // user.create user.find user.delete user.update
        const avatar = req.file ? `/uploads/${req.file.filename}` : '/images/default.png'
        const { username, password, age } = req.body

        await UserService.addUser(username, password, age, avatar)
        res.send({
            ok: 1
        })
    },
    updateUser: async (req, res) => {
        console.log(req.body, req.params.myid);
        const { username, password, age } = req.body

        await UserService.updateUser(req.params.myid, username, password, age)
        res.send({
            ok: 1
        })
    },
    deleteUser: async (req, res) => {
        await UserService.deleteUser(req.params.id)
        res.send({
            ok: 1
        })
    },
    getUser: async (req, res) => {
        console.log(req.query);
        const { page, limit } = req.query
        const data = await UserService.getUser(page, limit)
        res.send(data)
    },
    login: async (req, res) => {
        const { username, password } = req.body
        const data = await UserService.login(username, password)
        if (data.length === 0) {
            res.send({
                ok: 0
            })
        } else {
            console.log(data[0])
            // 设置token 
            const token = JWT.generate({
                _id: data[0]._id,
                username: data[0].username
            }, "1d")
            //token返回在header
            res.header("Authorization",token)
            // 默认存在内存中。
            res.send({
                ok: 1
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy(() => {
            res.send({
                ok: 1
            })
        })
    }
}

module.exports = UserController