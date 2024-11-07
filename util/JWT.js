/*
 * @作者: NingBY
 * @Date: 2024-11-04 19:17:51
 */
const jwt = require("jsonwebtoken")
const secret = "nby-anydata"
const JWT = {
    generate(value,expires){
        return jwt.sign(value,secret,{expiresIn:expires})
    },

    verify(token){
        try {
            return jwt.verify(token,secret)
        } catch (error) {
            return false
        }
    }
}

module.exports = JWT