const user_model = require("../models/user.model")
const CONFIG = require('../config/env-config').CONFIG

module.exports = {
    request: (req, res) => {
        console.log("soub7ana lah");
        let {
            username,
            commandName,
            description
        } = {...req.body}
        connection.query(user_model.que_request,
            [
                username,
                commandName,
                description
            ]
            , (error,result)    =>  {
                if(!error) console.log("sent")
                else console.log("error: " + error)
            })
    }
}