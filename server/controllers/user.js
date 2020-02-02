'use strict'

const model = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class userController {
    static register(req, res, next) {
        console.log(req.body)
        const obj = {
           name: req.body.name,
           email: req.body.email,
           password: req.body.password
        }

        model.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(result => {
            // console.log(result)
            res.status(201).json({result})
        })
        .catch(next)
    }

    static login (req, res, next){
        const obj = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({
            where: {
                email: obj.email
            }
        })
        .then(result => {
            if(!result) throw ({status: 404, message: "Log in details are not correct"})
            else{
                const compare = bcrypt.compareSync(obj.password, result.password)
                if(!compare) throw({status: 404, message: "Log in details are not correct"})

                const token = jwt.sign({userId: result.id}, process.env.JWT_SECRET, { expiresIn: '1d' })
                res.status(200).json({
                    token,
                    user: {
                        userId: result.id,
                        name: result.name,
                        email: result.email
                    }
                })
            }
        })
        .catch(next)
    }
}

module.exports= userController